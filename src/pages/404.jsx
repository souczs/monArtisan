import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../assets/img/404.png';
import main from '../styles/main.scss';
import components from '../styles/components.scss';
import pages from '../styles/pages.scss';

export default function Error() {
  return (
    <div className="container text-center not-found-page" id="errorContainer">
      <img
        src={ErrorImg}
        alt="404 - Page non trouvée"
        className="img-fluid"
        style={{ maxWidth: '300px' }}
      />
      <p className="lead mt-3">Oups... Cette page n'existe pas.</p>
      <Link to="/" className="btn mt-3" id="btn">Retour à l'accueil</Link>
    </div>
  );
}