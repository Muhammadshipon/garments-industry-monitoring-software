import Link from 'next/link';
import React from 'react';
import { RiDashboardLine } from "react-icons/ri";
import { MdAddBox, MdOutlineInventory } from "react-icons/md";
import { VscReport } from "react-icons/vsc";
import { FaUsers } from 'react-icons/fa';
import { IoSettingsSharp } from "react-icons/io5"
import { ImExit } from "react-icons/im";
const Sidebar = () => {
  return (
    <aside className='h-[100%] border-r '>
      <h1 className='text-4xl font-bold text-blue-700 text-center p-3 pb-4 font-serif italic active:scale-105'>Inventify</h1>
      {/* menu section  */}
      <section className='flex flex-col justify-between h-[90%]'>
     <div  className=''>
     <Link href='/'>
      <div className='flex justify-start items-center gap-2 px-10 py-2  hover:text-blue-700  hover:bg-blue-200 text-gray-500 active:scale-95'>
        <span className='font-bold text-xl'><RiDashboardLine /></span>
        <p className='text-lg  hover:text-blue-700'>Dashboard</p>
      </div>
      </Link>
      <Link href='/inventory'>
      <div className='flex justify-start items-center gap-2 px-10 py-2  hover:text-blue-700  hover:bg-blue-200 text-gray-500 active:scale-95'>
        <span className='font-bold text-xl'><MdOutlineInventory /></span>
        <p className='text-lg hover:text-blue-700'>Inventory</p>
      </div>
      </Link>
      <Link href='/add-items'>
      <div className='flex justify-start items-center gap-2 px-10 py-2  hover:text-blue-700  hover:bg-blue-200 text-gray-500 active:scale-95'>
        <span className='font-bold text-xl'><MdAddBox /></span>
        <p className='text-lg hover:text-blue-700'>Add Items</p>
      </div>
      </Link>
      <Link href='/report'>
      <div className='flex justify-start items-center gap-2 px-10 py-2  hover:text-blue-700  hover:bg-blue-200 text-gray-500 active:scale-95'>
        <span className='font-bold text-xl'><VscReport /></span>
        <p className='text-lg hover:text-blue-700'>Report</p>
      </div>
      </Link>
      <Link href='/suppliers'>
      <div className='flex justify-start items-center gap-2 px-10 py-2  hover:text-blue-700  hover:bg-blue-200 text-gray-500 active:scale-95'>
        <span className='font-bold text-xl'><FaUsers /></span>
        <p className='text-lg hover:text-blue-700'>Suppliers</p>
      </div>
      </Link>
      <Link href='/settings'>
      <div className='flex justify-start items-center gap-2 px-10 py-2  hover:text-blue-700  hover:bg-blue-200 text-gray-500 active:scale-95'>
        <span className='font-bold text-xl'><IoSettingsSharp /></span>
        <p className='text-lg hover:text-blue-700'>Settings</p>
      </div>
      </Link>
     </div>
     <div className='border-2'>
     <Link href='/logout'>
      <div className='flex justify-start items-center gap-2 px-10 py-2  hover:text-red-700 text-red-600  hover:bg-red-200  active:scale-95'>
        <span className='font-bold text-xl'><ImExit /></span>
        <p className='text-xl text-red-600 font-semibold '>logOut</p>
      </div>
      </Link>
     </div>
      </section>
    </aside>
  );
};

export default Sidebar;