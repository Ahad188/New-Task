import { Link } from 'react-router-dom'
import './cars.css'
const Card = ({user}) => {
     
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
               <div className="flex justify-evenly my-3">
               <li title='Company' className='name'>Company: {user?.company.name}</li>
               <li title='Address' className='name'>Address: {user?.address.address}</li>
               </div>
          </ul>
          <div className="overlay-box">
               <button className="add-cart">     
                    <Link to={user?.id}>  <span>Details</span></Link>
               </button>
          </div>
     </div>
    
  )
}

export default Card