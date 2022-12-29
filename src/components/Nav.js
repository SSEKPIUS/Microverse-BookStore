import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/books',
      text: 'Books',
      active: false,
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
      active: true,
    },
  ];
  return (
    <nav>
      <span className="nav-brand">
        Bookstore CMS
      </span>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className={`nav-link ${link.active ? 'active-link' : ''}`}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <span className="icon-button">
        <FaUserTie className="primary-color" />
      </span>
    </nav>
  );
};
export default Navbar;
