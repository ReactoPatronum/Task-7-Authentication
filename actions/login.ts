import baseUrl from "@/config/baseUrl";

export const Login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${baseUrl}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      console.log("Login Failed.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    console.log("Login Failed.");
  }
};
