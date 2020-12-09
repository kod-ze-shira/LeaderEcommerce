import React, { useEffect,useState } from 'react' 
import './admin.css'
import BootstrapTable from 'react-bootstrap-table-next';
import './admin.css'

function CrudCategory() {

        const [categories, setCategories] = useState(0);

        useEffect(()=>{
              setCategories([
                      {
                        "id":1,
                        "name":"food",
                        "description":"eat",
                        "count":40
                      },
                      {
                        "id":2,
                        "name":"clothes",
                        "description":"wear",
                        "count":150
                      }
              ])
        })
        
        return (
                <div>
                        Hello World!
                        {/* <BootstrapTable
                                keyField="id"
                                data={categories}
                                columns={3}
                                striped
                                hover
                                condensed
                        /> */}
                </div>
                )
                
        }
        
        export default CrudCategory;