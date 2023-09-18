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
    const token = req.headers.authorization;
    const email = token?.split("=")[1].split("-")[0];

    const usersData = fs.readFileSync("users.json", "utf-8");
    const parsedData = JSON.parse(usersData);
    let user = null;

    // Returns the user data and finds the user by email address
    Object.entries(parsedData).map(([key, value]: any) => {
      if (key === email) {
        const { password, ...profile } = value;
        user = { profile };
      }
    });

    if (user) {
      return res.status(200).json({ isSuccess: true, user });
    } else {
      return res
        .status(500)
        .json({ isSuccess: true, message: "Please login again!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Something went wrong" });
  }
}
