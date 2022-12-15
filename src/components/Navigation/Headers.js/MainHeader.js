import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <div>
            <h1 className="display-2">C.D.O.G Car Dealer</h1>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/" >Home</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link className="nav-link" to="/Signin">SignIN</Link>

                        <Link className="nav-link" to="/Signup">SignUP</Link>

                        <Link className="nav-link" to="/UserViewCars"> View All Cars </Link>

                        
                    </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default MainHeader;