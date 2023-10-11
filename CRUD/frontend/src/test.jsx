const cars = [
    {
      carName: "audi",
      carSrc: "image/audi.jfif",
      carLink: "https://www.audi.in/in/web/en.html",
    },
    {
      carName: "bmw",
      carSrc: "image/bmw.jfif",
      carLink:
        "https://www.bmw.in/en/more-bmw/concept-cars/bmw-neue-klasse-overview.html",
    },
    { carName: "maserati", carSrc: "image/maserati.jfif" },
    { carName: "benz", carSrc: "image/benz.jfif" },
  ];

  return (
    <>
      <div>
        {cars.map((car) => (
          <div className="card" style={{ width: "18rem" }}>
            <img src={car.carSrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{car.carName}</h5>
              <a href={car.carLink}>
                <button className="btn btn-primary">click</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="100">
            <img src="image/audi.jfif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="100">
            <img src="image/bmw.jfif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src="image/benz.jfif"
              data-bs-interval="100"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
    import Home from "./component/Home";

    function App() {
      return (
        <div style={{ display: "flex" }}>
          <Home
            img="image/criket.jfif"
            title="ENG VS NEW"
            content="new zenland won the match"
            likes={10}
            dislikes={100}
          ></Home>
          <Home
            img="image/pant.jfif"
            title="List Of Injured Players Who Will Miss Out On Marquee Event"
            content="Rishabh Pant, Axar Patel couldn't make it to India's squad for the Cricket World Cup 2023 due to injury concerns."
            likes={10}
            dislikes={100}
          ></Home>
        </div>
      );
    }
    
    export default App;
    