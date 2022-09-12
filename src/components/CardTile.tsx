import React from "react";

export default function CardTile({ recipe }) {
  return (
      <div className="recipeTile">
        <p>{recipe["recipe"]["label"]}</p>
        <br />
      </div>
  );
}
