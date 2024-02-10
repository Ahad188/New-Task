import { useEffect, useState } from "react";
import Card from "../Card/Card";
 
const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
 
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
          setUsers(data.users)
         
     });
  }, []);
  console.log(users);
//   
const handleSearchChange = (event) => {
     setSearchQuery(event.target.value);
   };
 
   const filteredUsers = users.filter(
     (user) =>
       user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
       user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
   );

   


  return (
    <>
      <h2 className="text-center text-3xl my-3 font-bold">There are All user </h2>
       
       {/*  */}
       <div className="mx-auto mb-3 w-[400px]">
        <input
          type="text"
          placeholder="Search by First Name or Last Name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
       {/*  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3">
          {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <Card key={user.id} user={user} />)
               ) : (
          <p>No users found.</p>
          )}


      </div>
    </>
  );
};

export default AllUser;
