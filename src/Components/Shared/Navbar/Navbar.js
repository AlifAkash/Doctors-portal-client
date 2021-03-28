import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link mr-5" href="/home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5" href="/dashboard/appointment">DashBoard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5" href="/appointment">Dental services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5 text-white" href="/admin">Admin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5 text-white" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5 text-white" href="#">Contract Us</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;