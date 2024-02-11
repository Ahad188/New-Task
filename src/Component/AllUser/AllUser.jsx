import { useEffect, useState } from "react";
import Card from "../Card/Card";
 
const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");
 
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
 
   const handleSortChange = (event) => {
     setSortOption(event.target.value);
   };
 
   const sortedUsers = [...users].sort((a, b) => {
     if (sortOption === "name") {
       return a.firstName.localeCompare(b.firstName);
     } else if (sortOption === "email") {
       return a.email.localeCompare(b.email);
     } else if (sortOption === "company") {
       return a.company.name.localeCompare(b.company.name);
     }
     return 0;
   });
 
   const filteredUsers = sortedUsers.filter(
     (user) =>
       user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
       user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
   );
   


  return (
    <>
      <h2 className="text-center text-3xl my-3 font-bold">There are All user </h2>
       
       {/*  */}
       <div className="md:flex md:gap-5 ps-8 md:ps-20 md:w[900px] py-3">
       <div className=" mb-3 w-[400px]">
        <input
          type="text"
          placeholder="Search by First Name or Last Name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
       </div>
       {/* sort by  */}
      <div className="w-[400px] ">
      <select
          value={sortOption}
          onChange={handleSortChange}
          className="border border-gray-300 rounded-md py-2 w-full text-gray-500   "
        >
          <option value="name">Sort by Name</option>
          <option value="email">Sort by Email</option>
          <option value="company">Sort by Company Name</option>
        </select>
      </div>
       
       {/*  */}
       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3">
          {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <Card key={user.id} user={user} />)
               ) : (
          // <p className="text-center text-red-700 font-bold my-4">No users found.</p>

          ''
          )}


      </div>
    </>
  );
};

export default AllUser;
