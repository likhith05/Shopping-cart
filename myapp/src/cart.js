import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const[addtoCart,setaddtoCart]=useState([])
  fetch("http://localhost:3006/ADDtoCart",{
    method:"GET"
  }).then((res)=>{
    return res.json()
  }).then((resp)=>{
    setaddtoCart(resp)

  }).catch(()=>{
    alert("api not added to cart")
  })

  const navigate = useNavigate();
  const Delete=(id)=>{
    fetch("http://localhost:3006/ADDtoCart/"+id,{
      method:"DELETE"
    }).then(()=>{
      alert("caet item deleted")
    }).catch('error')
  }



  return (
    <div>
      <div style={{ backgroundColor: "#f8f8ff" }}>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/cart"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <i className="bi bi-person me-2" style={{ fontSize: "1.5rem" }}></i>
            <span className="fs-4">Simple header</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => navigate("/home")}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" onClick={() => navigate("/cart")}>Cart</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => navigate("/about")}>About</a>
            </li>
          </ul>
        </header>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {addtoCart.map((item) => (
            <div className="col" key={item.id}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">Name: {item.title}</h5>
                  <p className="card-text">Price: {item.price}</p>
                  <button onClick={()=>(Delete(item.id))} type="button" className="btn btn-danger" >
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div style={{ backgroundColor: "#d3d3d3" }}>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Cart</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Cart;
