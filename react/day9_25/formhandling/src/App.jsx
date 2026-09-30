import { useState } from "react";

const App = () => {
  const [nameUser, setNameUser] = useState("");
  const [ageUser, setAgeUser] = useState("");
  const [showData, setShowData] = useState([]);

  const handleChange = (e) => {
    setNameUser(e.target.value);
  };

  const handleAge = (e) => {
    setAgeUser(e.target.value);
  };

  const hanldeClick = () => {
    const obj = {
      id: Date.now(),
      name: nameUser,
      age: ageUser,
    };

    setShowData([...showData, obj]);

    alert("Successfully Save");

    setNameUser("");
    setAgeUser("");
  };

  return (
    <>
      <div className="flex items-center gap-3 p-5">
        <input
          type="text"
          onChange={handleChange}
          value={nameUser}
          placeholder="Enter the Name"
          className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
        />

        <input
          type="number"
          onChange={handleAge}
          value={ageUser}
          placeholder="Enter the Age"
          className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
        />

        <button
          onClick={hanldeClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Click to Login
        </button>
      </div>

      <div className="px-5">
        <table className="border-collapse border border-gray-400 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-400 px-4 py-2">
                Id
              </th>
              <th className="border border-gray-400 px-4 py-2">
                User Name
              </th>
              <th className="border border-gray-400 px-4 py-2">
                User Age
              </th>
            </tr>
          </thead>

          <tbody>
            {showData.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="border border-gray-400 px-4 py-2">
                  {e.id}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {e.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {e.age}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;

//useState

//onChange

//value

//onClick

//Array-la data add pannradhu

//.map() use panni display pannradhu
