import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCart from "./CardCart";
export default function Cart() {
  return (
    <div className="container-fluid">
      <CardCart />
    </div>
  );
}
