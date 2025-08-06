import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/datas.json'; // ou le chemin vers ton fichier JSON
import { FaStar } from 'react-icons/fa';

export default function ArtisansList() {
    // Lecture de la catégorie depuis l'URL
  const { category } = useParams();
  const navigate = useNavigate();

  // Les artisans dont la catégorie correspond sont filtrés
  const filteredArtisans = data.filter((artisan) => artisan.category === category);

  return (
    <main id="box-background">
        <article className="container my-5">
        <div id="box-category"></div>
        <h3 className="mt-5 mb-4 text-center" id="category-list">Nos artisans dans le domaine <strong>{category}</strong></h3>
        <div className="row g-4 mt-3">
            {filteredArtisans.map((artisan) => (
            <div
                className="col-md-12"
                key={artisan.id}
                onClick={() => navigate(`/artisan/${artisan.name}`)}
                style={{ cursor: 'pointer' }}
            >
                <div className="p-3" id="box-artisans">
                <h5>{artisan.name}</h5>
                <p>
                    Note :
                    {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < Math.round(artisan.note) ? 'gold' : '#ddd'} />
                    ))}
                </p>
                <p>Spécialité : {artisan.specialty}</p>
                <p>Localisation : {artisan.location}</p>
                </div>
            </div>
            ))}
        </div>
        </article>
    </main>
  );
}
