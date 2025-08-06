import { useParams } from 'react-router-dom';
import data from '../data/datas.json';
import { FaStar } from 'react-icons/fa';
import Error from './404';
import Specialite from '../assets/img/specialite.png';
import Localisation from '../assets/img/localisation.png';

export default function FicheArtisan() {
  const { name } = useParams();

  // Chercher l'artisan par nom
  const artisan = data.find((a) => a.name === name);

  if (!artisan) {
    return <Error />
  }

  return (
    <main className="container my-5 pt-4">
      <div className="d-flex flex-column flex-md-row justify-content-between" id="box-info">
        <h1><strong>{artisan.name}</strong></h1>
        <p>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < Math.round(artisan.note) ? 'gold' : '#ddd'} />
          ))}
        </p>
        <p><img src={Specialite} alt="Logo spécialité" id="box-spec" /> {artisan.specialty}</p>
        <p><img src={Localisation} alt="Logo localisation" id="box-loc" /> {artisan.location}</p>
      </div>

      <p className="mt-4">{artisan.about}</p>

      {artisan.website && (
      <p>
        Plus d'informations sur <a href={artisan.website} target="_blank" rel="noopener noreferrer" className="text-danger">{artisan.website}</a>
      </p>
      )}
      
      <h4 className="mt-5 mb-4">Vous avez une demande spécifique ?</h4>

      <form>
        <div className="mb-3">
          <input type="text" className="form-control" required placeholder="Votre nom..."/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" required placeholder="Objet de la demande..." />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="5" required placeholder="Décrivez votre demande..."></textarea>
        </div>
        <button type="submit" className="btn" id="btn-submit">Envoyer</button>
      </form>
    </main>
  );
}
