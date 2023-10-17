import React from 'react'
import { Sidebar, Section } from '../../components'


const Home = () => {

    return (
        <div className='w-main m-auto bg-gray-100 mt-[15px] p-[10px] text-sm text-gray-700'>
            <div className='flex gap-4'>
            
                <div className='w-[205px] flex-none bg-white rounded-lg shadow-lg'>
                    <Sidebar />
                </div>
                <img
                    src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg"
                    alt="banner"
                    className='flex-auto object-cover'
                />
            </div>
            <img
                src="https://dashboard.cellphones.com.vn/storage/special-desktop.png"
                alt="special desktop"
                className='my-[15px] w-full object-contain'
            />
            <Section spec catalog={'đien-thoai'} title='ĐIỆN THOẠI NỔI BẬT NHẤT' />
            <Section spec catalog={'laptop'} title='LAPTOP' />
            {/* <Section spec catalog={'am-thanh'} title='ÂM THANH' /> */}
            <Section spec catalog={'đong-ho'} title='ĐỒNG HỒ THÔNG MINH' />
            <Section spec catalog={'may-tinh-bang'} title='MÁY TÍNH BẢNG' />
            <Section spec catalog={'phu-kien'} title='PHỤ KIỆN' />
        </div>
    )
}

export default Home