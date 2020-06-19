import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'
const burger = (props) => {

let transforedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [... Array(props.ingredients[igKey])].map((_, i) =>{
         return <BurgerIngredient key={igKey + i} type={igKey}/>
    });
})
.reduce((arr, el) => {
    return arr.concat(el)
}, [])

if (transforedIngredients.length === 0) {
    transforedIngredients = <p> Please start adding ingredients</p>
}


console.log(transforedIngredients)
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transforedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}
export default burger