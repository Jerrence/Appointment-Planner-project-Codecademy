import React from "react";
import { Tile } from "../tile/Tile";

export function TileList({ tiles }) {
  return (
    <div>
      {
        tiles.map((tile, index) => (
          <Tile key={index} tile={tile} />
        ))
      }
    </div>
  );
}
