import { Fragment, useState } from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import Contrast from '../assets/contrast.svg';

function Header({toggleButton}) {
    const [search, setSearch] = useState("");
    let navigate = useNavigate()
    function searchManga(){
        if(!search) return;
        navigate(encodeURI(`manga?q=${search}`));
        setSearch("");
    }
    return (
        <Fragment>
            <header>
                <nav class="navbar navbar-dark navbar-expand-md">
                    <div class="container-fluid">
                        <Link to="/" class="navbar-brand">
                            <img className= "pb-3" src={Logo} alt="logo" width="64" height="64" />
                            <b>Mangait</b>
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                            <div class="input-group mx-auto" id="search-bar">
                                <input type="text" class="form-control" placeholder="Search for manga" value={search} onInput={(e) => setSearch(e.target.value)} />
                                <button class="btn btn-secondary" type="button" onClick={searchManga}>Search</button>
                            </div>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <NavLink to='/' className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to='upload' className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"}>Upload</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to='bookmarks' className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"}>Bookmarks</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="toggleTheme" class="me-5 d-none d-md-block" onClick={toggleButton}>
                        <img src={Contrast} alt="toggle" height="48" />
                    </div>
                </nav>
            </header>
            <Outlet />
        </Fragment>
    );
}

export default Header;