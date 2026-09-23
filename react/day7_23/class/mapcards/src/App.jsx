

const App = () => {
  const studentData = [
    { name: "tej", age: 20, email: "tej@gmail.com", course: "css" },
    { name: "tej", age: 20, email: "tej@gmail.com", course: "css" },
    { name: "tej", age: 20, email: "tej@gmail.com", course: "css" },
    { name: "tej", age: 20, email: "tej@gmail.com", course: "css" },
  ];

  return (
    <>
      <div className="bg-blue-400 min-h-screen flex justify-between p-5 gap-5">
        {studentData.map((e, i) => (
          <div
            key={i}
            className="bg-white p-5 w-64 h-60 rounded-lg"
          >
            <h2>Name: {e.name}</h2>
            <h2>Age: {e.age}</h2>
            <h2>Email: {e.email}</h2>
            <h2>Course: {e.course}</h2>

            <button className="bg-black text-white p-2 mt-4 rounded">
              View
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
