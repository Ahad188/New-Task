import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleDetails = () => {
  const [user, setAllUsers] = useState([]);

  const {id} = useParams();
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
          const users = data?.users;
           const user = users?.find((us)=>parseInt(us.id) === parseInt(id))
          setAllUsers(user)
     
     });
  }, [id]);

console.log(user);

  return (
          <div className="card card-side w-[800px] mx-auto  shadow-xl cursor-pointer my-10">
               <figure><img src={user?.image} alt="avatar"/></figure>
               <div className="card-body">
               <h2 className="card-title ">First Name : <span className="name"> {user?.firstName}</span></h2>
               <h2 className="card-title ">Last Name :  <span className="name">{user?.lastName}</span></h2>
               <h3 className="card-title">Email : <a href="#"><span className="name">{user?.email}</span></a></h3>
               <h3 className="card-title">Company : <a href="#" className="name"> {user?.company?.name}</a></h3>
               <h3 className="card-title">Address : <a href="#" className="name"> {user?.address?.address}</a></h3>

               <div className="card-actions justify-end">
                    
                    <Link to='/all-user' className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Back</Link>
               </div>
          </div>
          </div>
          
     
     
  );
};

export default SingleDetails;
