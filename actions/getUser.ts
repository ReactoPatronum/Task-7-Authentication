import baseUrl from "@/config/baseUrl";

export const getUser = async () => {
  const token = document.cookie;
  try {
    const response = await fetch(`${baseUrl}getUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
    });

    if (!response.ok) {
      console.log("User not found.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    console.log("User not found.");
  }
};
