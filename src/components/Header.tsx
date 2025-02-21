import { NavLink } from 'react-router';
import { headerSkills, navLinks } from '../vars';
import Icons from './Icons';

function Header() {
  return (
    <nav className="flex justify-around bg-darkblue items-center fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-col text-white">
        <h1 className="font-squarepeg text-9xl">Eva Johnson</h1>
        <ul className="flex gap-6">
          {headerSkills.map((skill, index) => (
            <li className="font-bold ml-3px font-raleway flex gap-x-3.5 items-center">
              {Boolean(index) && (
                <span className="h-2 w-2 bg-red-500 rounded-full inline-block mr-2" />
              )}
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex gap-x-6 gap-y-4 items-center">
        {navLinks.map((link) => (
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-white font-raleway text-2xl p-6 ease-in duration-100 ${isActive && 'bg-vibrantorange'} border border-transparent hover:border-papyrus`
              }
              to={link.href}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Icons />
    </nav>
  );
}

export default Header;
