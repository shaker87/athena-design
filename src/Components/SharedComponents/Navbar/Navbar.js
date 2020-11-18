import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-area bg-dark">
            <nav class="navbar navbar-expand-lg navbar-dark container">
                <Link to="#" class="navbar-brand">Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item active">
                            <Link to="#" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" class="nav-link">Link</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>

    );
};

export default Navbar;