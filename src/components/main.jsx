import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://img.freepik.com/free-photo/beautiful-view-mountains-covered-snow-annapurna-conservation-area-chhusang-nepal_181624-15705.jpg?size=626&ext=jpg&ga=GA1.2.1302784555.1685612852&semt=ais"
            alt="Card"
            height={300}
          />
          <div className="card-img-overlay align-top">
            <div className="container">
              <h5 className="card-title fs-1 text fw-darker">Sagarmatha Attire</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
