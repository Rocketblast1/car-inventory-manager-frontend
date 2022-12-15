import React from 'react';

const Home = () => {
    return (
        <div>

            <h2 style={{ textAlign: "center" }} 
                className="display-4" >
                    Welcome to C.D.O.G Car Dealer.We have  your dream car with the best price 
            </h2>
            <h3>Our services </h3>
            <ul>
  <li>Make a reservation to test drive </li>
  <li>Buy your Dream Car Online !</li>
  <li> View Our New cars </li>
</ul>


            <img src="data:image/jpeg;base64,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"
                alt='Car'
                style={{ width: "50%"}}
                />

        </div>
    );
};

export default Home;