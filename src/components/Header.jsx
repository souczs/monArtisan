import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/img/logo.png';
import '../styles/components.scss';
import artisansData from '../data/datas.json';

function Header() {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  // 1. Ajoutez le hook useNavigate
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 1) {
      const filteredSuggestions = artisansData.filter(artisan =>
        (artisan.name?.toLowerCase().includes(value.toLowerCase())) ||
        (artisan.city?.toLowerCase().includes(value.toLowerCase())) ||
        (artisan.specialty?.toLowerCase().includes(value.toLowerCase()))
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      // Option : trouver le premier résultat et y naviguer
      const foundArtisan = artisansData.find(artisan => artisan.name.toLowerCase() === search.toLowerCase());
      if (foundArtisan) {
        navigate(`/artisan/${foundArtisan.id}`);
      } else {
        // Redirection vers une page de résultats complète
        alert(`Recherche soumise pour : ${search}`);
      }
      setSuggestions([]);
      setSearch('');
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/artisan/${suggestion.name}`);
    
    setSuggestions([]);
    setSearch(suggestion.name);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-white bg-white px-4 shadow-sm fixed-top">
      <nav className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo du site" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/artisans/Alimentation">Alimentation</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artisans/Bâtiment">Bâtiment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artisans/Fabrication">Fabrication</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artisans/Services">Services</NavLink>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Nom, ville, spécialité..."
                aria-label="Search"
                value={search}
                onChange={handleSearchChange}
              />
          </form>
          {suggestions.length > 0 && (
              <ul className="list-group suggestions-list" id="navbarSearch">
                {suggestions.map(suggestion => (
                  <li
                    key={suggestion.id}
                    className="list-group-item list-group-item-action"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.name} ({suggestion.location})
                  </li>
                ))}
              </ul>
            )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
