import React, { useState } from "react";
import clsx from "clsx";
import { useLocation } from "@docusaurus/router";
import iconMap from "../../iconMap";

export default function DocSidebarItemCategory({ item, ...props }) {
  const { label, items, collapsible = true } = item;
  const location = useLocation();

  const isActive =
    items?.some(
      (child) =>
        location.pathname === child.href ||
        location.pathname.startsWith((child.href || "") + "/")
    ) ?? false;

  const [collapsed, setCollapsed] = useState(!isActive);

  const key = label?.toLowerCase().replace(/\s+/g, "-");
  const iconSrc = iconMap[key];

  return (
    <li
      className={clsx(
        "menu__list-item",
        isActive && "menu__list-item--active"
      )}
    >
      <div
        className={clsx(
          "menu__link sidebar-link-with-icon",
          isActive && "menu__link--active"
        )}
        onClick={() => collapsible && setCollapsed(!collapsed)}
      >
        {iconSrc && <img src={iconSrc} alt="" className="sidebar-icon" />}
        <span className="sidebar-text">{label}</span>
      </div>

      {!collapsed && items?.length > 0 && (
        <ul className="menu__list">
          {items.map((child, i) => (
            <props.components.DocSidebarItem key={i} item={child} {...props} />
          ))}
        </ul>
      )}
    </li>
  );
}
