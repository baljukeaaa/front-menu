import React from "react"

const Item =(props)=>{
console.log(props.foodCategoies)
return (
    <>
    <div>
        {props.foodCategoies.foodCategoryItem.map((Item)=> {
            return 
        })}
    </div>
    </>
)
}

export default Item