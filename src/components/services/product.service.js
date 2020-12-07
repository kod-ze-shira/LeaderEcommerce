class AService {
    constructor(){
        // this.url='http://localhost:8000/'
    }
    getAllProducts=()=>{
       return fetch("http://localhost:8000/products")
        .then(res => res.json())
            .then(
              (result) => {
                return({
                  isLoaded: true,
                  items: result.result_e
                });
              },
              (error) => {
                return({
                  isLoaded: true,
                  items: [],
                  error
                });
              }
            )
        }  
    CreateCompany=(values)=>{
        debugger;
        // let j=JSON.stringify(values);
        fetch('http://localhost:8000/companies',{
            method:'POST',
            headers :{ 'Content-Type': 'application/json; charset=utf-8' }, // Content-Type = application/json
            body:JSON.stringify(values)
        }).then((response)=>{
            debugger
            if(response.status<200||response.status>=300)
                throw new Error();
            return response.json()            
        }).then(json=>console.log(json))
    }
    CreateProduct=(values)=>{
        debugger;
        let j=JSON.stringify(values);
        return fetch('http://localhost:8000/products',{
            method:'POST',
            headers :{ 'Content-Type': 'application/json; charset=utf-8' }, // Content-Type = application/json
            body:JSON.stringify(values)
        }).then((response)=>{
            if(response.status<200||response.status>=300)
                throw new Error();
            return response.json()            
        }).then((json)=>{
            debugger
            console.log(json.product)
            return json.product;
        })
    }
   DeleteProduct=(id)=>{
    return fetch('http://localhost:8000/products/'+id,{
        method:'DELETE',
        // headers :{ 'Content-Type': 'application/json; charset=utf-8' }
    }).then((response)=>{
        debugger
        if(response.status<200||response.status>=300)
            throw new Error();
        return response.json()            
    }).then(json=>console.log(json))
   }
   UpdateProduct=(id,values)=>{
    return fetch('http://localhost:8000/products/'+id,{
        method:'PATCH',
        headers :{ 'Content-Type': 'application/json; charset=utf-8' }, // Content-Type = application/json
        body:JSON.stringify(values)
    }).then((response)=>{
        if(response.status<200||response.status>=300)
            throw new Error();
        return response.json()            
    }).then((json)=>{
        console.log(json);
         return json;})
}
    SaveSale=(sale)=>{
        debugger
        alert(sale+"לשמורררררררררררררררררררר")
    }
} 
export default new AService()