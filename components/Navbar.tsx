import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const user = useAppSelector((store) => store.user);

  //Extracts the user's role and username information
  const {
    profile: { role, username },
  } = user;

  const router = useRouter();
  const { pathname } = router;
  const routes = [
    {
      href: `/home`,
      label: "Home",
      active: pathname === `/home`,
      role: ["user", "admin"],
    },
    {
      href: `/about`,
      label: "About",
      active: pathname === `/about`,
      role: ["user", "admin"],
    },
    {
      href: `/admin`,
      label: "Admin",
      active: pathname === `/admin`,
      role: ["admin"],
    },
  ];
  return (
    // Creates the navigation menu if the username is available
    !!username && (
      <nav
        className={
          "w-full h-[8vh] flex items-center justify-between border-b p-4"
        }
      >
        <div className={"flex space-x-4 lg:space-x-6"}>
          {routes?.map((route) => {
            if (route.role.includes(role))
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`font-medium transition-colors  ${
                    route.active ? "text-red-500 " : "hover:text-blue-500"
                  }`}
                >
                  {route.label}
                </Link>
              );
          })}
        </div>
      </nav>
    )
  );
};

export default Navbar;
