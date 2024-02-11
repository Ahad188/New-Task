import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

 

const PopularCard = () => {
     const [users, setUsers] = useState([]);
     useEffect(() => {
          fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.users)
               
           });
        }, []);
  return (
    <div className="my-10">
     <h2 className="text-center font-bold text-5xl ">There is popular user</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3">
          {users.length > 0 ? (
          users?.slice(4,7).map((user) => <Card key={user.id} user={user} />)
               ) : (
          // <p className="text-center text-red-700 font-bold my-4">No users found.</p>

          ''
          )}
      </div>
      <div className="text-center p-3">
           <Link to="/all-user" className="add-cart p-3"> <span>See All</span></Link>
      </div>
    </div>
  )
}

export default PopularCard