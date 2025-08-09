import { NavLink } from "react-router-dom";
import './NavBar.css';
const NavBar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Money', path: '/money' },
    { name: 'Health Check', path: '/healthcheck' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about-us' },
    
  ];

  return (
    <nav className="bg-white flex justify-between px-16 py-2 gradient-bg rounded-b-2xl shadow-lg shadow-gray-500">
        <div className="content-center p-2">
            <span className="font-bold text-xl text-violet-700">Daily Life Monitoring App</span>
        </div>
      <ul className="flex justify-center gap-10">
        {navItems.map((navItem) => (
          <li key={navItem.path} className="w-32 h-16 flex justify-center items-center text-lg">
            <NavLink
              to={navItem.path}
              className={({isActive})=>
                isActive?"text-sky-800 font-bold text-xl":"text-gray-800 hover:font-semibold transition-all duration-300"
              }
              
            >
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="content-center p-2">
        <button className="rounded-3xl py-3 px-5 bg-violet-600 text-white w-36 outline-none transition-all duration-200 hover:scale-105 hover:shadow-lg font-semibold cursor-pointer">Login/Signup</button>
      </div>
    </nav>
  );
};

export default NavBar;
