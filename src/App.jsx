// import Child from "./Child";

// function App() {

//   const user = {
//     name: "Musu",
//     age: 21,
//     city: "Patna"
//   };

//   return (
//     <>
//       <h1>Parent Component</h1>
//       <Child userData={user} />
//     </>
//   );
// }

// export default App;





// import Child from "./Child";

// function App() {

//   const studentArray = ["Riya", "Musu", "Ankit", "Rahul"];

//   return (
//     <>
//       <h1>Student List</h1>
//       <Child students={studentArray} />
//     </>
//   );
// }

// export default App;






// import Child from "./Child";

// function App() {

//   const message = "Hello Surbhi";

//   return (
//     <>
//       <h1>Parent Component</h1>
//       <Child text={message} />
//     </>
//   );
// }

// export default App;


// import React, { useState } from 'react'

// function App() {
//     const [count, setcount] = useState(0);
//   return (
//     <div>
//       <h1>count: {count}</h1>
//         <button onClick={() => setcount(count + 1)}>Increment</button>
//         <button onClick={() => setcount(count - 1)}>Decrement</button>
//     </div>
//   )
// }

// export default App





// import React, { useState } from "react";

// function App() {
//   const [role, setRole] = useState("guest");

//   return (
//     <div>
//       <h2>Select Role</h2>

//       <button onClick={() => setRole("admin")}>Admin</button>
//       <button onClick={() => setRole("user")}>User</button>
//       <button onClick={() => setRole("guest")}>Guest</button>

//       <hr />

//       {role === "admin" && <h3>Welcome Admin Page</h3>}
//       {role === "user" && <h3>Welcome User Page</h3>}
//       {role === "guest" && <h3>Welcome Guest Page</h3>}
//     </div>
//   );
// }

// export default App;




// import React, { useState } from "react";

// function Bulb() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div>
//       <h2>Bulb Status</h2>

//       <div
//         style={{
//           width: "100px",
//           height: "100px",
//           borderRadius: "50%",
//           backgroundColor: isOn ? "yellow" : "Black",
//           margin: "20px auto"
//         }}
//       ></div>

//       <button onClick={() => setIsOn(true)}>ON</button>
//       <button onClick={() => setIsOn(false)}>OFF</button>
//     </div>
//   );
// }

// export default Bulb;
