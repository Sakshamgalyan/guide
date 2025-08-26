import React, {useState, useEffect} from "react";
import clsx from "clsx";
import {useLocation} from "@docusaurus/router";
import iconMap from "./iconMap";
import {ChevronDown, ChevronRight} from "lucide-react";

export default function DocSidebarItemLink({item}) {
  const {href, label, className, type, items} = item;
  const location = useLocation();

  const active =
    href && (location.pathname === href || location.pathname.startsWith(href + "/"));

  const key = label?.toLowerCase().replace(/\s+/g, "-");
  const icon = iconMap[key];
  const iconSrc = active ? icon?.active : icon?.default;

  // Check if any child item is active
  const hasActiveChild = (items) => {
    return items?.some(child => {
      if (child.type === "category") {
        return hasActiveChild(child.items);
      }
      const childHref = child.href;
      return location.pathname === childHref || location.pathname.startsWith(childHref + "/");
    });
  };

  // Initialize collapsed state based on whether any child is active
  const [collapsed, setCollapsed] = useState(!hasActiveChild(items));
  
  // Update collapsed state when location changes
  useEffect(() => {
    if (hasActiveChild(items)) {
      setCollapsed(false);
    }
  }, [location.pathname]);

  // 📂 Category
  if (type === "category") {
    const toggle = () => setCollapsed((prev) => !prev);

    return (
      <li className="menu__list-item">
        <div
          className={clsx("menu__link sidebar-link-with-icon", {
            "menu__link--active": active,
          })}
          onClick={toggle}
          style={{cursor: "pointer"}}
        >
          {iconSrc && <img src={iconSrc} alt="" className="sidebar-icon" />}
          <span className="sidebar-text flex-1">{label}</span>
          {collapsed ? (
            <ChevronRight size={16} className="sidebar-chevron" />
          ) : (
            <ChevronDown size={16} className="sidebar-chevron" />
          )}
        </div>

        {!collapsed && (
          <ul className="menu__list">
            {items?.map((child, i) => (
              <DocSidebarItemLink key={i} item={child} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  // 📄 Normal doc/link
  return (
    <li className="menu__list-item">
      <a
        className={clsx(
          "menu__link sidebar-link-with-icon",
          className,
          active && "menu__link--active"
        )}
        href={href}
      >
        {iconSrc && <img src={iconSrc} alt="" className="sidebar-icon" />}
        <span className="sidebar-text">{label}</span>
      </a>
    </li>
  );
}