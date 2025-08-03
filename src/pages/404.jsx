import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../assets/img/404.png';

export default function Error() {
  return (
    <div className="container text-center not-found-page my-5">
      <img
        src={ErrorImg}
        alt="404 - Page non trouvée"
        className="img-fluid mb-4"
        style={{ maxWidth: '300px' }}
      />
      <h1 className="display-4">404</h1>
      <p className="lead">Oups... Cette page n'existe pas.</p>
      <Link to="/" className="btn btn-primary mt-3">Retour à l'accueil</Link>
    </div>
  );
}