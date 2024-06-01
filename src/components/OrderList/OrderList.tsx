import React from 'react';
import {Menu} from "../../App.tsx";

interface Order {
    food:Menu;
    removeFood:(name:string) => void
}

const OrderList:React.FC<Order> = ({food,removeFood}) => {
    return (
        <div>
                <p>{food.name}</p>
                <p> Quantity: {food.quantity}</p>
                <p>Price: {food.price * food.quantity} KGS</p>
                <button onClick={() => removeFood(food.name)}>Remove</button>
        </div>
    );
};

export default OrderList;