import React from 'react';
import "./order-details.css"
import {Menu} from "../../App.tsx";
import OrderList from "../OrderList/OrderList.tsx";

interface OrderDetails {
    order:Menu[];
    removeFood:(name:string) => void
}

const OrderDetails:React.FC<OrderDetails> = ({order,removeFood}) => {
    return (
        <div>
            <h2>Order Details</h2>
                    {order.map((food) => (
                        <OrderList key={food.name} food={food} removeFood={removeFood} />
                    ))}
        </div>
    );
};

export default OrderDetails;