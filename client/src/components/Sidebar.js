import React, { memo } from 'react'
import { iconsSidebar } from '../utils/constant'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { MdNavigateNext } from 'react-icons/md'
import path from '../utils/path'

const Sidebar = () => {
    const { catalogs } = useSelector(state => state.app)
    // console.log(catalogs);
    return (
        <div className='flex flex-col'>
            {catalogs?.filter(el => !el.value === false)?.map(item => (
                <NavLink
                    key={item?.id}
                    to={`/${path.CATALOG}/${item?.link}`}
                    className={({ isActive }) => `font-medium px-[10px] justify-between h-[40px] flex items-center hover:bg-gray-200 ${isActive ? 'bg-gray-200' : ''}`}
                >
                    <span className='flex gap-[6px] items-center'>
                        <span>{iconsSidebar.find(i => i.name === item?.value)?.icon}</span>
                        <span>{item?.value}</span>
                    </span>
                    {item?.value && <span><MdNavigateNext size={25} /></span>}
                </NavLink>
            ))}
        </div>
    )
}

export default memo(Sidebar)