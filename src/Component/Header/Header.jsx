import { Link } from "react-router-dom"

 

 

const Header = () => {
      
  return (
     <div className="navbar bg-slate-300 ">
          
          <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-300 rounded-box w-52">
               <li><Link to='/' className="text-orange-500">Home</Link></li>
               <li><Link to='/all-user' className="text-orange-500">All User</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
     <img src="https://e6tgusu7445.exactdn.com/wp-content/uploads/2023/09/Technext-Logo-White-Text.png?strip=all&lossy=0&sharp=1&ssl=1" className="w-[100px] h-[40px] text-red-500" alt="logo" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 ">
          <li><Link to='/' className="text-orange-500">Home</Link></li>
          <li><Link to='/all-user' className="text-orange-500">All User</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Blog</a>
  </div>
          
     </div>
  )
}

export default Header