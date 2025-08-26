import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import {getIconForItem} from "../iconMap";

export default function DocSidebarItemLink({item, activePath, ...props}) {
  const icon = getIconForItem(item);
  return (
    <li className="menu__list-item">
      <Link
        className={clsx("menu__link", item.className)}
        to={item.href}
        {...props}
      >
        <span className="menu__link--text">
          {icon && <img className="dsb-icon" src={icon} alt="" aria-hidden="true" />}
          {item.label}
        </span>
      </Link>
    </li>
  );
}
