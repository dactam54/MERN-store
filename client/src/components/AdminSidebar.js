import React, { memo } from 'react'
import { adminSidebar } from '../utils/constant'
import { NavLink, Link } from 'react-router-dom'


const activedStyles = 'flex gap-2 py-[13px] pr-[31px] pl-4 items-center bg-gray-200  rounded-md'
const notActivedStyles = 'flex gap-2 py-[13px] pr-[31px] pl-4 items-center'
const AdminSidebar = () => {
    return (
        <div className='w-full flex flex-col'>
            <Link to='/' className='pl-4 flex items-center h-[60px] mb-4 shadow-md bg-main rounded-md'>
                <p >The Store phone</p>
            </Link>
            {adminSidebar.map(item => (
                <NavLink
                    key={item.path}
                    to={`/${item.path}`}
                    className={({ isActive }) => isActive ? activedStyles : notActivedStyles}
                >
                    <span>{item.icons}</span>
                    <span>{item.name}</span>
                </NavLink>
            ))}
        </div>
    )
}

export default memo(AdminSidebar)