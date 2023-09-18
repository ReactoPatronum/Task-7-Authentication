const Home = () => {
  return (
    <div className="bg-gray-200 p-5 h-[92vh]">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">User Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your user dashboard. There is no sensitive information
          here. Anyone logged in can see this page.
        </p>
      </div>
    </div>
  );
};

export default Home;
