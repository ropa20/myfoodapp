import React from 'react'
import { Empty } from 'antd'
import './recipeList.css';
const EmptyPage=() => {
  return (
    <Empty className='blank' image={Empty.PRESENTED_IMAGE_SIMPLE} />
  )
}

export default EmptyPage