import React from "react";
import itemsData from "json/itemsExample.json";
import CardItem from "./CardItem";
export default function Home() {
  return (
    <div className="container-md py-5">
      <div className="border p-3">
        <h1 className="text-center">
          <span className="border-bottom border-3">New Comers</span>
        </h1>
        <CardItem isNew product={itemsData.product} />
      </div>
      <div className="border p-3 mt-3">
        <h1 className="text-center">
          <span className="border-bottom border-3 text-warning">
            Coming Expired!!!
          </span>
        </h1>
        <CardItem product={itemsData.product} />
      </div>
    </div>
  );
}
