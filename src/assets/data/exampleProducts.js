import { nanoid } from "@reduxjs/toolkit";
import headphones from "../images/headphones.png";
import pc from "../images/pc.png";

export const Headphones = {
    name: "Headphones",
    id: nanoid(),
    price: 11.90,
    quantity: 1,
    image: `${headphones}`,
};

export const computer = {
    name: "Computer",
    id: nanoid(),
    price: 200,
    quantity: 1,
    image: `${pc}`,
};

