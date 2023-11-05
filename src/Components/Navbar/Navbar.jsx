
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import useAuth from '../../Hooks/useAuth';
const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then()
      .catch(err => {
      console.log(err);
    })
  }
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addJob'>Add Job</Link></li>
        <li><Link to='/myJobs'>My posted Jobs</Link></li>
        <li><Link to='/bids'>My Bids</Link></li>
        
      </ul>
    </div>
   <Link to='/'> <img src={logo} alt="logo" className='w-[70px] h-[70px]' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><Link to='/'>Home</Link></li>
        <li><Link to='/addJob'>Add Job</Link></li>
        <li><Link to='/myJobs'>My posted Jobs</Link></li>
        <li><Link to='/bids'>My Bids</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
          
             {
                        user?.email ? <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="btn bg-gray-400 btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {/* <img src={} alt="Akash" /> */}
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box bg-gray-400  w-52">
                                <li>
                                    <button className="btn text-black btn-sm  btn-ghost">Rashed</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={handleLogout}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login' className="btn">Login</Link>
                    }
         
          
  </div>
</div>
    </div>
  );
};

export default Navbar;