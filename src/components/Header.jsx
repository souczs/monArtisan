import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/img/logo.png';
import '../styles/components.scss';

function Header() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Recherche : ${search}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white px-4 shadow-sm fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo du site" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/artisans/alimentation">Alimentation</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artisans/batiments">Bâtiments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artisans/fabrication">Fabrication</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artisans/services">Services</NavLink>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-search" type="submit" id="navSearch">OK</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
