import React from 'react';
import {Menu} from "../../App.tsx";
import "./order-list.css"

interface Order {
    food:Menu;
    removeFood:(name:string) => void
}

const OrderList:React.FC<Order> = ({food,removeFood}) => {
    return (
        <div className="list-order">
                <p className="text-food-1">{food.name} </p>
                <p className="text-food-2"> Quantity: {food.quantity} </p>
                <p className="text-food-3"> Price: {food.price * food.quantity} KGS</p>
                <button onClick={() => removeFood(food.name)}>Remove</button>
        </div>
    );
};

export default OrderList;