 

const Footer = () => {
  return (
     <footer className="footer p-10 bg-black text-white ">
     <aside>
       <img src="https://e6tgusu7445.exactdn.com/wp-content/uploads/2023/09/Technext-Logo-White-Text.png?strip=all&lossy=0&sharp=1&ssl=1" className="w-[80px] text-orange-500" alt="" />
       <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
     </aside> 
     <nav>
       <h6 className="footer-title">Services</h6> 
       <a className="link link-hover">Branding</a>
       <a className="link link-hover">Design</a>
       <a className="link link-hover">Marketing</a>
       <a className="link link-hover">Advertisement</a>
     </nav> 
     <nav>
       <h6 className="footer-title">Company</h6> 
       <a className="link link-hover">About us</a>
       <a className="link link-hover">Contact</a>
       <a className="link link-hover">Jobs</a>
       <a className="link link-hover">Press kit</a>
     </nav> 
     <nav>
       <h6 className="footer-title">Legal</h6> 
       <a className="link link-hover">Terms of use</a>
       <a className="link link-hover">Privacy policy</a>
       <a className="link link-hover">Cookie policy</a>
     </nav>
   </footer>
  )
}

export default Footer