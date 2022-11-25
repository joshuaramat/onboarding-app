import React from 'react';

const Header = ({ category, title, description }) => (
  <div className=" mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
    <p className="text-md text-black-400">{description}</p>
  </div>
);

export default Header;