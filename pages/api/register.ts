import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
  isSuccess: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { username, email, password, role } = req.body;

    // Read the existing users data from a JSON file.
    const usersData = fs.readFileSync("users.json", "utf-8");
    const parsedData = JSON.parse(usersData);
    let isEmailExist = false;

    // Check if the email already exists in the parsed data.
    if (Object.keys(parsedData).includes(email)) {
      isEmailExist = true;
    }

    if (isEmailExist) {
      return res.status(403).json({
        isSuccess: false,
        message: "Already registered with this email.",
      });
    }

    // Add the new user data to the parsed data.
    parsedData[email] = { username, password, role };

    fs.writeFile("users.json", JSON.stringify(parsedData, null, 2), (err) => {
      console.log(err);
    });
    return res
      .status(200)
      .json({ isSuccess: true, message: "User added successfully." });
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Error writing to file." });
  }
}
