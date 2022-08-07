import "./App.css";

function App() {
  return (
    <div className="bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="heading">Products</h1>
          </div>
          <div className="col-12 col-md-6">
            <div className="card-container d-flex flex-column justify-content-end">
              <h1 className="cardheading">VR Headset</h1>
              <p className="cardprice">Rs 75,000</p>
              <button className="butn btn-outline-light">Buy Now</button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card1-container d-flex flex-column justify-content-end">
              <h1 className="cardheading">VR Headset</h1>
              <p className="cardprice">Rs 75,000</p>
              <button className="butn btn-outline-light">Buy Now</button>
            </div>

            <div className=" col-12 d-flex flex-row justify-content-end">
              <button className="butn1 btn-primary mt-3">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
