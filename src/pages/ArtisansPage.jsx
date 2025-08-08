import { useParams } from 'react-router-dom';
import { useState } from 'react';
import data from '../data/datas.json';
import { FaStar } from 'react-icons/fa';
import Error from './404';
import Specialite from '../assets/img/specialite.png';
import Localisation from '../assets/img/localisation.png';

export default function FicheArtisan() {
  const { name: artisanNameUrl } = useParams();

  // États pour les champs du formulaire
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(''); // Pour afficher un message de succès/erreur

  // Chercher l'artisan par nom
  const artisan = data.find((a) => a.name === artisanNameUrl)

  if (!artisan) {
    return <Error />
  }

  // Gérer la soumission du formulaire
  const handleSubmit = async (event) => {
  event.preventDefault(); // Empêche le rechargement de la page
  setFormStatus('Envoi en cours...');

    try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          name,
          subject,
          message,
          artisanEmail: artisan.email, // Envoi de l'email artisan au backend
        }),
      });

    if (response.ok) {
        setFormStatus('Message envoyé avec succès !');
        setName('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Une erreur est survenue.');
      }
    } catch (error) {
      setFormStatus('Erreur lors de l\'envoi. Veuillez réessayer.');
      console.error(error);
    }
  };

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

      <form onSubmit={handleSubmit}> 
        <div className="mb-3">
          <input 
            type="text"
            className="form-control"
            required placeholder="Votre nom..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            required placeholder="Objet de la demande..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="5"
            required placeholder="Décrivez votre demande..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn"
          id="btn-submit">Envoyer</button>
      </form>
      {formStatus && <p className="mt-3">{formStatus}</p>}
    </main>
  );
}
