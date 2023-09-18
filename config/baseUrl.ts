const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://task-7-authentication-next.vercel.app/api/"
    : "http://localhost:3000/api/";

export default baseUrl;
