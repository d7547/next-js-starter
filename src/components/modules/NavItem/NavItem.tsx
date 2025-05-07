import { FC } from "react";
import clsx from "clsx";

interface NavItemProps {
  label: string;
  active?: boolean;
}

const NavItem: FC<NavItemProps> = ({ label, active }) => {
  return (
    <span
      className={clsx(
        "cursor-pointer hover:text-blue-600 transition-colors",
        active ? "text-blue-700 font-medium" : ""
      )}
    >
      {label}
    </span>
  );
};

export default NavItem;
