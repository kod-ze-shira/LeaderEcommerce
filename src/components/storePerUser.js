import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from './../redux/action'


function StorePerUser(props) {

function funcReset(item)
{
 props.setCategories(item.categories);
 props.setAllOrders(item.orders);      
 props.setSoreCurrent(item);
 props.setProducts(item.storeProducts)
 props.setFilteredItems(item.storeProducts)
}


    useEffect(async() => {
      await props.getStoreByUser(props.user._id);
    },[])

    return (
<>
<h1>:בחר אחת מהחנויות שברשותך</h1>

 <div className="data__body">
{ props.stores.map((itemy, index) => (
    //<input className="switch__input" type="button" onClick={async () => { await props.delete(item._id); 
       
    // <input className="switch__input" type="button" onClick={()=>props.deleteStore(itemy._id)} />
    
   
            <div className="data__item">
                 <div className="data__row" >
                        <div className="data__cell data__cell_xl">
                               <div className="data__main">
                               <div className="data__effect mobile-hide"><label className="switch">
                                                                                                                                                <input className="switch__input" type="button" onClick={ () => { alert("האם ברצונך למחוק חנות זו?"); props.deleteStore(itemy._id); 
                                                                                                                                                        // props.getCategories();
                                                                                                                                                         }} />
                                                                                                                                                {/* <i className="la la-truck-loading "></i>
                                                </input> */}
                                                                                                                                                <button>

                                                                                                                                                        <i className="fa fa-trash" style={{ color: "#c3c4ca", fontSize: "1rem" }}>
                                                                                                                                                        </i></button>
                                                                                                                                                <span className="switch__content">

                                                                                                                                                </span></label></div>
  {/* <Link to="/0" > */}
       <div className="data__effect mobile-hide">
           <label className="switch"></label></div>
         
 <div className="data__cell mobile-hide">
     <Link onClick={()=>{funcReset(itemy)}} to="/0">
                      <div className="data__content">
                        <strong>{itemy.storeName}</strong>
                        </div></Link>
                         </div>

                       <div className="data__cell mobile-hide">
                                                                                 
                               </div>
                         <div className="data__wrap">
                              <div className="data__content">
               <strong>{itemy.storeDescription}</strong></div>
                  </div>
          
                   </div>
                </div>
   
                          </div>
             </div>
         
       ))}
        
        </div> 
  </>
    )
} 

export default connect(
    (state)=>{
        return {
         stores: state.storeByUser.stores,
        user:state.userReducer.user,
        }
    },
    (dispatch)=>{
        return {
             getStoreByUser:(id)=>{ dispatch(actions.getStoreByUser(id))},
             setFilteredItems:(i)=>{ dispatch(actions.setFilteredItems(i))},
             setProducts:(i)=>{ dispatch(actions.setProducts(i))},
              setCategories:(i)=>{ dispatch(actions.setCategories(i))},
              setAllOrders:(i)=>{ dispatch(actions.setAllOrders(i))},
             setSoreCurrent:(i)=>{ dispatch(actions.setSoreCurrent(i))},
             deleteStore:(i)=>{ dispatch(actions.deleteStore(i))},
        }
    }

)(StorePerUser);

