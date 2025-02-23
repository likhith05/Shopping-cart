import { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import User from "./user";

function Home() {
  const currentUser=User()
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3006/items", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((resp) => {
        setData(resp);
        console.log(resp);
        alert("API data successful");
      })
      .catch((error) => {
        console.error("Error fetching API:", error);
        alert("Error fetching API data");
      });
  }, []);


//add to cartr
const addtoCart = (id) => {
  fetch("http://localhost:3006/items/"+id ,{
    method: "GET",
  })
    .then((res) => res.json())
    .then((resp) => {
      //console.log(resp);
      fetch("http://localhost:3006/ADDtoCart",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(resp)
      }).then(()=>{
        alert("api sucess added to cart")
      }).catch(()=>{
        alert("error")
      })
    })
   
};



  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <div>
      <div style={{ backgroundColor: "#f8f8ff" }}>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/home"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <i className="bi bi-person me-2" style={{ fontSize: "1.5rem" }}></i>
            <span className="fs-4">{currentUser?.email}</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link active" onClick={() => navigate("/home")}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => navigate("/cart")}>Cart</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => navigate("/about")}>About</a>
            </li>
          </ul>
        </header>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {currentItems.map((item) => (
            <div className="col" key={item.id}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">Name: {item.title}</h5>
                  <p className="card-text">Price: {item.price}</p>
                  <button onClick={()=>{addtoCart(item.id)}} type="button" className="btn btn-success" >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index + 1}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
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

export default Home;
