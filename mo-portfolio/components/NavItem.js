import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link LegacyBehavior>
      <a
        href={href}
        className={`nav__item ${active ? "active" : ""
          }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;