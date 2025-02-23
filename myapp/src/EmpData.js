import { useEffect, useState } from "react"




function EmpData(){

    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3006/EmployeeData",{
            method:"GET"    
    
        }).then((res)=>{
    
            return res.json()
        })
        .then((resp)=>{
            alert("api resived")
            console.log(resp)
            setData(resp)
        })
        .catch(()=>{
            alert("error")
        })
    },[])

       

    return(
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-title text-center">
                        <h1>EmpData</h1>

                    </div>
                    <div className="card-body">
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">mobile</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item)=>(
        <tr>
           <td>{item.id}</td>
           <td>{item.Name}</td>
           <td>{item.Email}</td>
           <td>{item.mobile}</td>  
            

        </tr>
    ))}
    
   
  </tbody>
</table> 

                    </div>

                </div>
                
            </div>
        </div>
    )
      
}
export default EmpData;