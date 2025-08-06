import data from '../data/datas.json';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Specialite from '../assets/img/specialite.png';
import Localisation from '../assets/img/localisation.png';

export default function ArtisansTop() {
  // Lister les artisans marqués comme top=true
  const navigate = useNavigate();
  const artisansDuMois = data.filter((artisan) => artisan.top === true);

  return (
    <section className="container my-5">
      <h3 className="mb-4 text-center">Pour vous guider : nos 3 artisans du mois !</h3>
      <div className="row g-4">
        {/* Boucle sur les 3 premiers top artisans du tableau */}
        {artisansDuMois.slice(0, 3).map((artisan) => (
          <div className="col-md-4" key={artisan.id}>
            <div className="p-3 border rounded shadow-sm h-100" id="box-top">
                <h5 className="text-center mb-3">{artisan.name}</h5>
              {/* Génère 5 étoiles avec la couleur dorée et compare avec le nombre d'étoiles de l'artisan - Si moins de 5 étoiles, le reste est grisé */}
              <p>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < Math.round(artisan.note) ? 'gold' : '#ddd'} />
                ))}
              </p>
              <p><img src={Specialite} alt="Logo spécialité" id="box-spec" /> {artisan.specialty}</p>
              <p><img src={Localisation} alt="Logo localisation" id="box-loc" /> {artisan.location}</p>
              <button
                className="btn btn-sm mb-3"
                id="btn"
                onClick={() => navigate(`/${artisan.name}`)}
                >
                Voir la fiche
                </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
