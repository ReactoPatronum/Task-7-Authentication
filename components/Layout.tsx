import { useRouter } from "next/router";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { getUser } from "@/actions/getUser";
import { useAppDispatch } from "@/redux/store";
import { setUser } from "@/redux/features/userSlice";
import toast from "react-hot-toast";

export default function Layout({ children }: any) {
  const router = useRouter();
  const { pathname } = router;
  const dispatch = useAppDispatch();

  //Function that checks the user's session status
  const checkUser = async () => {
    await getUser().then((res) => {
      if (res.isSuccess) {
        dispatch(setUser(res.user));
      } else {
        toast.error("Something went wrong...");
      }
    });
  };

  // Check if the user is authenticated based on a cookie named "token".
  useEffect(() => {
    const cookie = document.cookie.split("=")[0];
    // If the "token" cookie doesn't exist redirect the user to the home page
    if (cookie || cookie === "token") {
      if (pathname !== "/") {
        checkUser();
      }
    } else {
      router.push("/");
    }
  }, [pathname]);
  return pathname !== "/" ? (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  ) : (
    <>
      <main>{children}</main>
    </>
  );
}
