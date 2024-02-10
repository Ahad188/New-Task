import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./alluser.css";
const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  console.log(users);

  return (
    <>
      <h2 className="text-center text-3xl my-3 font-bold">There are All user </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3">
        {users && users.length > 0 ? (
          users.map((user) => <Card key={user.id} user={user}></Card>)
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </>
  );
};

export default AllUser;
