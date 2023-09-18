import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const { role } = useAppSelector((store) => store.user.profile);

    useEffect(() => {
      // If user role is not "admin", redirected to 403 page
      if (role !== "admin") {
        router.push("/403");
      }
    }, [role]);

    return role === "admin" ? <Component /> : null; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};
