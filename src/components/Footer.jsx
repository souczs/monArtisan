import { Link } from 'react-router-dom';
import '../styles/components.scss';

function Footer() {
  return (
    <footer className="footer bg-white py-4 border-top shadow-lg" id="footer">
      <div className="container">
        <div className="row">

          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5><strong>Informations légales</strong></h5>
            <ul className="list-unstyled">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Page en cours de construction');
                  }} 
                  className="text-muted text-decoration-none"
                >Mentions légales</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Page en cours de construction');
                  }} 
                  className="text-muted text-decoration-none"
                >Données personnelles</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Page en cours de construction');
                  }} 
                  className="text-muted text-decoration-none"
                >Accessibilité</a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Page en cours de construction');
                  }} 
                  className="text-muted text-decoration-none"
                >Gestion des cookies</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <h5><strong>Nous contacter</strong></h5>
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