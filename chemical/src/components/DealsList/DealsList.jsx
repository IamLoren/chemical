import React from 'react'
import DealCard from '../DealCard/DealCard'
import { StyledUl } from './DealsList.styled'

const DealsList = () => {
    const deals = [
        {img: null, name: "The Marina Torch", price: 6500000, tiket:  60000,  income: 9.25, left:150, sold:75},
        {img: null, name: "The Marina Torch", price: 6500000, tiket:  60000,  income: 9.25, left:150, sold:75}
    ]
  return (
    <StyledUl>
        {deals.map(({img, name, price, tiket, income, left, sold}, index) => {
            return  <DealCard key={index} img ={img} name={name} price={price} tiket={tiket} income={income} left={left} sold={sold}/>
        })}
    </StyledUl>
  )
}

export default DealsList