import React from 'react';
import "./order-details.css"
import {Menu} from "../../App.tsx";
import OrderList from "../OrderList/OrderList.tsx";


interface OrderDetails {
    order:Menu[];
    removeFood:(name:string) => void
}

const OrderDetails:React.FC<OrderDetails> = ({order,removeFood}) => {
    const totalPrice = order.reduce((total, food) => total + food.price * food.quantity, 0)

    return (
        <div>
            <h2>Order Details</h2>
            <div className="block-order-list">
                {order.map((food) => (
                    <OrderList key={food.name} food={food} removeFood={removeFood}/>
                ))}
            </div>
            <p>Total price:{totalPrice}</p>
        </div>

    );
};

export default OrderDetails;