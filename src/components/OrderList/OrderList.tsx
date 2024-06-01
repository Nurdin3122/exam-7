import React from 'react';
import {Menu} from "../../App.tsx";

interface Order {
    food:Menu;
    removeFood:(name:string) => void
}

const OrderList:React.FC<Order> = ({food,removeFood}) => {
    return (
        <div>
            <li className="order-item">
                <span>{food.name}</span>
                <span>Quantity: {food.quantity}</span>
                <span>Price: {food.price * food.quantity} KGS</span>
                <button onClick={() => removeFood(food.name)}>Remove</button>
            </li>

        </div>
    );
};

export default OrderList;