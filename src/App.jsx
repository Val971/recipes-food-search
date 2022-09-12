import React from "react";
import { Input, Button, Dropdown, Menu, Space, Spin, Alert } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import "./App.css";
import FoodCard from "./components/FoodCard";
import { useUserContext } from "./context";

function App() {
  const {
    handleHealthLabel,
    handleQuery,
    getRecipes,
    recipes,
    query,
    healthLabel,
    loading,
    error,
  } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  const onHealthLabel = async (value) => {
    try {
      await handleHealthLabel(value);
    } catch (err) {
      console.log("onHealthLabel error:", err);
    }
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <a onClick={() => onHealthLabel("vegan")}>Vegan</a>,
        },
        {
          key: "2",
          label: (
            <a onClick={() => onHealthLabel("gluten-free")}>Gluten-free</a>
          ),
        },
        {
          key: "3",
          label: <a onClick={() => onHealthLabel("low-sugar")}>Low-sugar</a>,
        },
        {
          key: "4",
          label: <a onClick={() => onHealthLabel("dairy-free")}>Dairy-free</a>,
        },
        {
          key: "5",
          label: <a onClick={() => onHealthLabel("egg-free")}>Egg-free</a>,
        },
        {
          key: "6",
          label: (
            <a onClick={() => onHealthLabel("peanut-free")}>Peanut-free</a>
          ),
        },
      ]}
    />
  );
  return (
    <div className="app">
      <h1>Discover Food Recipes</h1>
      <form className="app__searchForm">
        {error && <Alert message={`${error}`} type="error" />}
        <Input
          placeholder="Enter ingridient"
          value={query}
          onChange={handleQuery}
        />
        <Dropdown overlay={menu}>
          <Button onClick={(e) => e.preventDefault()}>
            <Space>
              {healthLabel}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </form>
      {loading ? (
        <Spin />
      ) : (
        <div className="foodCard-section">
          {recipes.length > 0 &&
            recipes.map((recipe, key) => {
              return <FoodCard key={key} recipe={recipe} />;
            })}
        </div>
      )}
    </div>
  );
}

export default App;
