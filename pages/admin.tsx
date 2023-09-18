import { withAuth } from "@/HOC/withAuth";
import React from "react";

const Admin = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Sensitive Information</h2>
          <p className="text-gray-700">
            This is a restricted admin page where sensitive information can be
            accessed.
          </p>
        </div>
      </main>
    </div>
  );
};

export default withAuth(Admin);
