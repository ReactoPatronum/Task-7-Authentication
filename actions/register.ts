import baseUrl from "@/config/baseUrl";

interface IFormInput {
  username: string;
  email: string;
  password: string;
  role: string;
}

export const Register = async (cretendials: IFormInput) => {
  try {
    const response = await fetch(`${baseUrl}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cretendials),
    });

    if (!response.ok) {
      console.log("Registration failed.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
