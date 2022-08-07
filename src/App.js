import "./App.css";

function App() {
  return (
    <div class="bg-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="heading">Products</h1>
          </div>
          <div class="col-12 col-md-6">
            <div class="card-container d-flex flex-column justify-content-end">
              <h1 class="cardheading">VR Headset</h1>
              <p class="cardprice">Rs 75,000</p>
              <button class="butn btn-outline-light">Buy Now</button>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="card1-container d-flex flex-column justify-content-end">
              <h1 class="cardheading">VR Headset</h1>
              <p class="cardprice">Rs 75,000</p>
              <button class="butn btn-outline-light">Buy Now</button>
            </div>

            <div class=" col-12 d-flex flex-row justify-content-end">
              <button class="butn1 btn-primary mt-3">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
