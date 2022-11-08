import React from 'react'
import WishList from './wishList'
import { LeftOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const WishlistHelper = () => {
  return (
    <div>
        <Link to='/home' className='link'><LeftOutlined style={{ fontSize: '20px', color: '#08c' }}/>Back</Link>
        <WishList />
    </div>
  )
}

export default WishlistHelper