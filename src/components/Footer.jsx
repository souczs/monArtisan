import { Link } from 'react-router-dom';
import '../styles/components.scss';

function Footer() {
  return (
    <footer className="footer bg-light py-4 border-top">
      <div className="container">
        <div className="row">

          {/* Section du menu pour les pages légales */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5>Informations Légales</h5>
            <ul className="list-unstyled">
              <li><Link to="/mentions-legales" className="text-muted text-decoration-none">Mentions Légales</Link></li>
              <li><Link to="/donnees-personnelles" className="text-muted text-decoration-none">Données Personnelles</Link></li>
              <li><Link to="/accessibilite" className="text-muted text-decoration-none">Accessibilité</Link></li>
              <li><Link to="/cookies" className="text-muted text-decoration-none">Gestion des cookies</Link></li>
            </ul>
          </div>

          {/* Section de l'adresse et des contacts */}
          <div className="col-md-6 text-center text-md-end">
            <h5>Contact</h5>
            <address className="text-muted">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <a href="tel:+33426734000" className="text-muted text-decoration-none">+33 (0)4 26 73 40 00</a>
            </address>
          </div>
          
        </div>
        <hr className="my-3" />
        <div className="text-center text-muted">
          <small>&copy; {new Date().getFullYear()} Mon Site. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;