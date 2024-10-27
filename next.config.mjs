/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    MONGODB_URI:
      "mongodb+srv://admin:admin@localhost:27017/best-retirement-planner-db?retryWrites=true&w=majority",
    MONGODB_DB: "best-retirement-planner-db",
  },
};

export default nextConfig;
