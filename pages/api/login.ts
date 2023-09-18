import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
  user?: any;
  isSuccess: boolean;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { email, password } = req.body;
    // Read the existing users data from a JSON file.
    const usersData = fs.readFileSync("users.json", "utf-8");
    const parsedData = JSON.parse(usersData);
    let user = null;

    // Iterate through the parsed data to find a matching user.
    Object.entries(parsedData).map(([key, value]: any) => {
      if (key === email && value.password === password) {
        const role = value.role;
        // Generate a token (you can replace this logic with an actual JWT generation).
        user = { email, role, token: email + "-generatejwt" };
      }
    });
    // If a matching user is found, return a 200 (OK) response with user data.
    if (user) {
      return res
        .status(200)
        .json({ isSuccess: true, user, message: "User found" });
    } else {
      return res
        .status(200)
        .json({ isSuccess: true, message: "Wrong Credentials." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Error writing to file." });
  }
}
