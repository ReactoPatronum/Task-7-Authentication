import Link from "next/link";

const ForbiddenPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[92vh] bg-gray-100">
      <div className="p-8 max-w-md">
        <h1 className="text-4xl font-bold text-red-500">403 Forbidden</h1>
        <p className="mt-4 text-gray-600">
          Sorry, you do not have permission to access this page.
        </p>
        <Link className="mt-4 text-blue-500 hover:underline" href="/home">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ForbiddenPage;
