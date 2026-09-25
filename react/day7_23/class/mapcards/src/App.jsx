import { useState } from "react";

const App = () => {
  const [nameuser, setNameUser] = useState("");
  const [ageuser, setAgeUser] = useState("");
  const [showData, setShowData] = useState([]);

  const handlechange = (e) => {
    setNameUser(e.target.value);
  };

  const handlechangeage = (e) => {
    setAgeUser(e.target.value);
  };

  const handleclick = () => {
    const obj = {
      id: Date.now(),
      name: nameuser,
      age: ageuser
    };

    const arr = [...showData];
    arr.push(obj);
    setShowData(arr);

    alert("sucessfull saved");
    setNameUser("");
    setAgeUser("");
  };

  return (
    <>
     
      <input
        type="text"
        onChange={handlechange}
        placeholder="Enter the name"
      />

      <input
        type="number"
        onChange={handlechangeage}
        placeholder="Enter the age"
      />
     

      <button onClick={handleclick}>click to login</button>

      {showData.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
        </div>
      ))}
    </>
  );
};

export default App;
