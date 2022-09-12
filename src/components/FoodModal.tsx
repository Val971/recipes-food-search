import React from 'react'
import { Modal } from 'antd';

export default function FoodModal({handleOk,handleCancel,isModalOpen,recipe}) {
    const ingredientsList =(recipe["recipe"]["ingredients"])
  return (
    <Modal title={recipe["recipe"]["label"]} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {ingredientsList && ingredientsList.map((ingredient,key)=>{
            return <p key={key}>{ingredient.text}</p>
        })}
      </Modal>
  )
}
