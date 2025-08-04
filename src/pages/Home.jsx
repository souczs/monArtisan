import React from 'react';
import main from '../styles/main.scss';
import components from '../styles/components.scss';
import pages from '../styles/pages.scss';
import { FaStar } from 'react-icons/fa';
import Fleche from '../assets/img/fleche.png';
import ArtisansTop from '../components/ArtisansTop';

export default function Home() {
  return (
    // Accueil et présentation des étapes/instructions
    <div className="homeContainer">
      <section className="mb-5">
        <h1 className="mb-4 text-center"><strong>Bienvenue sur le site de la région Auvergne-Rhône-Alpes !</strong></h1>
        <h2 className="mb-5 text-center">Ici, trouvez votre artisan idéal selon le secteur.</h2>
        <img className="d-block mx-auto mb-5 opacity-50" src={Fleche} alt="Descendre vers les instructions" style={{ height: '90px' }}/>
        <h3 className="mb-4 text-center">Comment trouver mon artisan ?</h3>
        <article className="row g-4">
          <div className="col-md-3">
            <div className="p-3 border rounded shadow-sm h-100" id="box-home">
              <h4 className="text-center">1</h4>
              <h5 className="text-center">Le secteur</h5>
              <p className="text-center">Sélectionnez la catégorie souhaitée dans le menu en haut de page</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border rounded shadow-sm h-100" id="box-home">
              <h4 className="text-center">2</h4>
              <h5 className="text-center">L'artisan</h5>
              <p className="text-center">Sélectionnez l'artisan souhaité selon vos critères</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border rounded shadow-sm h-100" id="box-home">
              <h4 className="text-center">3</h4>
              <h5 className="text-center">Le formulaire de contact</h5>
              <p className="text-center">Faites votre demande et laisser vos coordonnées à l'artisan</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border rounded shadow-sm h-100" id="box-home">
              <h4 className="text-center">4</h4>
              <h5 className="text-center">La réponse</h5>
              <p className="text-center">Recevez une réponse de l'artisan en moins de 48h ouvrées</p>
            </div>
          </div>
        </article>
      </section>
      
    <ArtisansTop />

    </div>
  );
}