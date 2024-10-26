import { Button } from '@headlessui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-white shadow-md'>
      <div className='container mx-auto flex justify-center p-4'>
        <div className='flex flex-wrap justify-center gap-10 text-2xl text-gray-700'>
          <Link to="/">
            <Button className="bg-transparent hover:bg-gray-200 border border-gray-400 rounded-lg transition duration-300 ease-in-out px-4 py-2">
              Home
            </Button>
          </Link>
          <Link to="/product">
            <Button className="bg-transparent hover:bg-gray-200 border border-gray-400 rounded-lg transition duration-300 ease-in-out px-4 py-2">
              Product
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-transparent hover:bg-gray-200 border border-gray-400 rounded-lg transition duration-300 ease-in-out px-4 py-2">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-transparent hover:bg-gray-200 border border-gray-400 rounded-lg transition duration-300 ease-in-out px-4 py-2">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
