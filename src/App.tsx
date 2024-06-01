
import './App.css'
import ButtonFood from "./components/ButtonFood/ButtonFood.tsx";
import {useState} from "react";
import OrderDetails from "./components/OrderDetails/OrderDetails.tsx";


export interface Menu {
  name: string
  price: number
  quantity: number
}

const App = () => {
  const [order,setOrder] = useState<Menu[]>([])




  const getOrder = (food:Menu) => {
    console.log(food)
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((orderItem) => orderItem.name === food.name)
      if (existingItem) {
        return prevOrder.map((orderItem) =>
            orderItem.name === food.name
                ? { ...orderItem, quantity: orderItem.quantity + 1 }
                : orderItem,
        )
      }
      return [...prevOrder, { ...food, quantity: 1 }]
    })
  }

  const click2 = () => {

  }


  return (
    <>
      <ButtonFood addFood={getOrder}></ButtonFood>
      <OrderDetails order={order}  removeFood={click2}></OrderDetails>
    </>
  )
};

export default App
