import React from 'react';
import {Menu} from "../../App.tsx";

interface FoodProps {
    addFood: (food: Menu) => void
}

const ButtonFood:React.FC<FoodProps> = ({addFood}) => {
    const foods: Menu[] = [
        { name: 'Hamburger', price: 80, quantity: 0 },
        { name: 'Cheeseburger', price: 90, quantity: 0 },
        { name: 'Fries', price: 45, quantity: 0 },
        { name: 'Coffee', price: 70, quantity: 0 },
        { name: 'Tea', price: 50, quantity: 0 },
        { name: 'Cola', price: 40, quantity: 0 },
    ]
    return (
        <div>
            {
                foods.map((food) => (
                    <button key={food.name} onClick={() => addFood(food)}>
                        <p>{food.name}</p>
                        <p>Price: {food.price}</p>
                    </button>
                ))
            }

        </div>
    );
};

export default ButtonFood;