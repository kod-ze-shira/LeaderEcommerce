import React, { useEffect ,useState} from 'react' 
import { connect } from 'react-redux';
import { actions } from '../../redux/action'

 function AddProduct (props)  {

  useEffect(()=>{
                
})

        console.log(props);
    const [myValues ,setMyValues]= useState({
        categoryName:'',
        color:'',

         //לא עובד -צריך להביא תמונות מהשרת 
        //  image:'',
         //צריך להיות סטטי שם החנות
        //  store:''
        });
     
  
  
        
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
        props.createNewCategory(myValues);
        props.getAllCategory();
    }

    return(
        
            <div className="form form_create">
                <div className="form__preview"><input className="form__file" type="file" /><i className="la la-user-plus "></i></div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">שם קטגוריה </div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" onChange={update} value={myValues.categoryName} name="categoryName" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">צבע</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" placeholder="Start typing…" name="color" id="description-in" onChange={update} value={myValues.color}/>
                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                      </div>
                    </div>
                  </div>
                </div>

          <div className="form__foot">
                
                <button className="form__btn btn" onClick={Submit}>Add & Proceed</button>
                </div>
             
              </div>
    )
}
export default connect(
                
  (state)=>{
          
          return { 
                 
                  categoryList:state.categoriesReducer.categories
          }
         
  },
  (dispatch)=>{
          return {
                  createNewCategory:(n)=>dispatch(actions.createNewCategory(n)),
                  getAllCategory:()=>dispatch(actions.getAllCategories()),
 
          }
  }             
  )(AddProduct);

