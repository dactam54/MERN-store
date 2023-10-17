import React, { memo, useEffect, useState } from 'react'
import { apiGetCurrent } from '../apis'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from './'
import { useNavigate } from 'react-router-dom'
import path from '../utils/path'
import actionTypes from '../store/actions/actionTypes'
import { apiGetCartAnon } from '../apis'

const Cart = () => {
    const { cart } = useSelector(state => state.user)
    const { isLoggedIn } = useSelector(state => state.auth)
    const { wishlist, anonmyousCart } = useSelector(state => state.app)
    const [cartData, setCartData] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const fetchCart = async () => {
        if (isLoggedIn) {
            const response = await apiGetCurrent()
            if (response.err === 0) setCartData(response.rs.cart)
        } else {
            const response = await apiGetCartAnon({ pids: anonmyousCart })
            if (response.err === 0) setCartData(response.rs)
        }
    }
    useEffect(() => {
        fetchCart()
    }, [cart, anonmyousCart])

    return (
        <div className='p-4 h-full flex flex-col'>
            <h3 className='font-bold text-[20px] flex-none h-[32px]'>Giỏ hàng của bạn</h3>
            <div className='w-full flex flex-auto flex-wrap mt-8 gap-2 overflow-y-auto'>
                {!cartData && <span>Bạn chưa có sản phẩm nào trong giở hàng</span>}
                {cartData && cartData?.map(item => (
                    <Card
                        key={item.id}
                        image={item.thumb}
                        name={item.name}
                        policy={item?.policy && item?.policy[0]}
                        price={item?.variants && item?.variants[0]?.price}
                        star={item?.star}
                        discountNumber={item?.discount}
                        id={item?.id}
                        wishlist={wishlist}
                    />
                ))}
            </div>
            <button
                type='button'
                className='w-full py-2 h-[50px] flex-none text-white font-semibold bg-main rounded-md'
                onClick={() => {
                    dispatch({ type: actionTypes.SHOW_CART, flag: false })
                    navigate(`/${path.MEMBER}/${path.BUY}`)
                }}
            >
                Đi tới mua hàng
            </button>
        </div>
    )
}

export default memo(Cart)