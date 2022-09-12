import React, { useState } from "react";
import { Card } from "antd";
import CardTile from "./CardTile";
import FoodModal from "./FoodModal";

const { Meta } = Card;

export default function FoodCard({ recipe }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="" src={recipe["recipe"]["image"]} />}
        onClick={showModal}
      >
        <Meta title={<CardTile recipe={recipe} />} />
      </Card>
      <FoodModal
      recipe={recipe}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
      />
    </>
  );
}
