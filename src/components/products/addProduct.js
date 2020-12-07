import React,{useState} from 'react'
import aService from '../services/product.service'
 function AddProduct (props)  {
        console.log(props);
    const [myValues,setMyValues] = useState({
        name:'',
        description:'',
        sku:'',
        amount:'',
        price:''});

    const update = (event) => {
        debugger
        setMyValues({
            ...myValues,
            [event.target.name]:event.target.value
        });
    }
    
    const Submit = ()=>{
        debugger
        // event.preventDefault();
        console.log(myValues)
          aService.CreateProduct(myValues).then((result)=>{
            console.log(result)
            props.cb();
            // .history.goBack();
            debugger
        })
    }

    return(
        
            <div className="form form_create">
{/* <form onSubmit={Submit} noValidate>
            <label htmlFor="name-in">enter name</label>
            <input type="text" 
            name="name" 
            id="name-in" 
            onChange={update}
            value={myValues.name}
            ></input>

            <label htmlFor="sku-in">enter sku</label>
            <input type="text" 
            id="sku-in" 
            name="sku" 
            id="sku-in" 
            onChange={update}
            value={myValues.sku}
            ></input>

            <label htmlFor="amount-in">enter amount</label>
            <input type="number" 
            name="amount" 
            id="amount-in" 
            onChange={update}
            value={myValues.amount}
            ></input>

            <label htmlFor="price-in">enter price</label>
            <input type="number" 
            name="price" 
            id="price-in" 
            onChange={update}
            value={myValues.price}
            ></input>
            <input type='submit' value='אישור'/> 
                    </form>*/}
                <div className="form__preview"><input className="form__file" type="file" /><i className="la la-user-plus "></i></div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">שם</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" onChange={update} value={myValues.name} name="name" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">תאור</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" placeholder="Start typing…" name="description" id="description-in" onChange={update} value={myValues.description}/>
                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">מק"ט</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text"name="sku" id="sku-in" onChange={update} value={myValues.sku} placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">כמות</div>
                      <div className="field__wrap">
                          <input className="field__input" type="number" placeholder="Start typing…" name="amount" id="amount-in" onChange={update} value={myValues.amount}/>
                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">מחיר</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" placeholder="Start typing…" name="price" id="price-in" onChange={update} value={myValues.price}/>
                        <div className="field__icon"><i className="la la-wallet "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">קטגוריה</div>
                      <div className="field__wrap"><select className="field__select">
                        <option disabled selected>Select category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                        <div className="field__icon"><i className="la la-angle-down "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__foot"><button className="form__btn btn btn_light" o>Cancel</button><button className="form__btn btn" onClick={Submit}>Add & Proceed</button></div>
              {/* </div> */}
              </div>
            


    )
}
export default AddProduct;