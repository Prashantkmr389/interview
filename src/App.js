import React, { useState, useEffect } from "react";

const App = () => {
  const [dataarr, setDataarr] = useState([]);

  async function getdata() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await data.json();
    setDataarr(response);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">User Information</h1>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
          </tr>
        </thead>

        <tbody>
          {dataarr.map((item, index) => {
            return (
              <tr key={index} className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.username}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.address.street} {item.address.suite} {item.address.city} {item.address.zipcode}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
