 
import { Link, useNavigate,   } from 'react-router-dom'
import './cars.css'
const Card = ({user}) => {
     const navigate = useNavigate();
  return (
    
     
     <div className="boxs">
          <ul className="card-box">
               <div className="d-img">
                     <img src={user?.image} className='w-[200px] mx-auto' alt="" />
               </div>
               <div className="flex justify-evenly my-3">
               <li title='First Name' className='name'>Name: {user?.firstName} <span title='Last Name'>{user?.lastName}</span></li>
               <li title='Email' className='name'>Email : {user?.email}</li>
               </div>
               {/* <div className="flex mx-auto justify-between my-3"> */}
               <li title='Address' className='name px-5 my-4'>Address: {user?.address.address}</li>
               <li title='Company' className='name px-5 my-4'>Company: {user?.company.name}</li>
               {/* </div> */}
          </ul>
          <div className="overlay-box">
               <button className="add-cart" onClick={()=>navigate(`/single-dt/${user?.id}`)}>     
                    
                     <Link to= '/single-dt'> Details</Link>
               </button>
          </div>
     </div>
    
  )
}

export default Card