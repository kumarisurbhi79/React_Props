// import React, { useState } from 'react'

// function Card1() {
//     const [item , setItem] = useState([])
//     const [first , setFirst] = useState("")
//     const [last , setLast] =useState("")
//     const [edit , setEdit] = useState(null)

//     const AddItem = () =>{
//         setItem([...item , {first , last}])
//         setFirst("")
//         setLast("")
//     }
//     const editItem = (index) => {
//         setFirst(item[index].first)
//         setLast(item[index].last)
//         setEdit(index)

//     }
//     const updateItem = () =>{
//       const newData = [...item]
//        newData[edit] = {first , last}
//        setItem(newData)
//        setFirst("")
//        setLast("")
//        setEdit(null)

//     }
//      const deleteItem = (index)=>{
//         setItem(item.filter((item , i) => i !== index ))

//     }
//   return (
//     <div>
//     <h1>Card1</h1>
//     <input type='First name ' placeholder='firstname' value={first} onChange={(e)=> setFirst(e.target.value)} />
//     <input type='Last name 'placeholder='lastname' value={last} onChange={(e)=> setLast(e.target.value)} />

//     <button onClick={edit === null ? AddItem : updateItem}>
//         {edit === null ? "add" : "Update"}</button>
//     <ul>
//         {item.map((item , index)=>(
//             <li key={index}>{item.first}{item.last}
//             <button onClick={()=> editItem(index)}>Edite</button>
//             <button onClick={()=> deleteItem(index)}>delete</button>
//             </li>
//         ))}
//     </ul>
//     </div>
//   )
// }

// export default Card1






// import  { useEffect, useState } from 'react'

// function App() {
//   const[user , setUser] = useState([])
//   const [loading, setLoading] = useState(true)
//   const[search , setSearch] = useState('')
// const fetchApi = async()=>{
//   let data = await fetch('https://fakestoreapi.com/products/')
//   let result = await data.json()
//   setUser(result)
//     setLoading(false) 
//   console.log(result)
// }
// useEffect(()=>{
//   fetchApi()
// },[])

//   if (loading) {
//     return <h2 style={{color:"blue" , textAlign:"center"}}>Loading......</h2>
//   }


// const filteredUsers = user.filter(u =>
//   u.title.toLowerCase().includes(search.toLowerCase()) 
// )

//   return (
//   <div style={{padding:"20px"}}>
//     <h2 style={{color:"blue"}}>Total Users: {filteredUsers.length}</h2>
//     <h3 style={{color:"blue"}}>Random User</h3>
// <input type='text' placeholder='search by name....' value={search}
// onChange={(e)=>setSearch(e.target.value)} style={{marginBottom:"20px"}}
// />


// <button onClick={fetchApi} style={{marginLeft:"10px"}}>Refresh Users</button>


//     {
//      filteredUsers.map((u, index)=>(
//         <div key={index} style={{border:"1px solid blue"}}>
//           <img src={u.image} alt="mp"/>
//           <h3>{u.title} </h3>
//           <p>{u.price}</p>
//         </div>
       
//       ))
//     }
//   </div>
//   )
// }
// export default App



// import React from 'react'
// import Child from './Child'

// function App() {
//   return (
//     <div>
//      <Child/>
//     </div>
//   )
// }

// export default App
