import React,{useState} from 'react'
import aService from '../services/product.service'
 
function UpdateProduct (props)  {
    const {_id,name,color,amount,price}=props.item_;
    const updateOK=props.updateOK;
    const [myValues,setMyValues] = useState({
        id:_id,
        name:name,
        color:color,
        amount:amount,
        price:price});

        console.log(myValues)


    const update = (event) => {
        debugger
        setMyValues({
            id:myValues.id,
            name:myValues.name,
            color:myValues.color,
            amount:myValues.amount,
            price:myValues.price,
            [event.target.name]:event.target.value
        });
    }
    
    const Submit = (event)=>{
        // debugger
        event.preventDefault();
        updateOK(myValues);
    }

    return(
        <form onSubmit={Submit} noValidate>
            <label htmlFor="name-in">enter name</label>{/* שם */}
            <input type="text" 
            name="name" 
            id="name-in" 
            onChange={update}
            value={myValues.name}
            ></input>

            <label htmlFor="color-in">enter color</label>{/* צבע */}
            <input type="text" 
            name="color" 
            id="color-in" 
            onChange={update}
            value={myValues.color}
            ></input>

            <label htmlFor="amount-in">enter amount</label>{/* כמות */}
            <input type="number" 
            name="amount" 
            id="amount-in" 
            onChange={update}
            value={myValues.amount}
            ></input>

            <label htmlFor="price-in">enter price</label>{/* מחיר */}
            <input type="number" 
            name="price" 
            id="price-in" 
            onChange={update}
            value={myValues.price}
            ></input>
            <input type='submit' value='אישור'/>
        </form>
    )
}
export default UpdateProduct;