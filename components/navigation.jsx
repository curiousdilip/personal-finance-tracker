import { usePathname } from "next/navigation";
import NavButton from "./nav-button";
const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },

  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
      <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
        {routes.map((route) => (
          <NavButton
            key={route.href}
            href={route.href}
            label={route.label}
            isActive={pathname === route.href}
          />
        ))}
      </nav>
    </>
  );
}
