const Home = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div
        className="relative bg-blue-600 text-white p-10 rounded-lg shadow-md"
        style={{ height: "658px" }}
      >
        <img
          src="https://source.unsplash.com/1600x900/?office,workspace"
          alt="Office workspace"
          className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg"
        />
        <div className="relative z-10 image" style={{margin: "405px auto"}}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 head" style={{fontSize: "50px"}}>
            Welcome to the Contact Management Dashboard
          </h1>
          <p className="text-base md:text-lg para" style={{fontSize: "1.5rem", marginTop: "30px"}}>
            Manage your contacts efficiently and effectively. Use the dashboard
            to add, view, and manage all your contacts in one place.
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-bold mb-2">Add Contacts</h2>
          <p>
            Easily add new contacts to your list with our user-friendly form.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-bold mb-2">View Contacts</h2>
          <p>View all your contacts in a well-organized list format.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-bold mb-2">Manage Contacts</h2>
          <p>Edit or delete contacts with just a few clicks.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
