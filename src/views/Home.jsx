import { useEffect, useState } from 'react';
import './availableCats.css';

const featuredCats = [
  { name: 'Shadow', age: '1', breed: 'Maine Coon' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Ragdoll' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
      </section>

      <section className="mt-5">
        <div>
          <h2>Featured Cats</h2>
        </div>

        {loading ? (
          <div className="loader-container">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="mt-2 row g-4 cats-container" id="cats-container">
            {cats.map((cat, i) => (
              <div key={i} className="col-md-4">
                <div className="cat-card">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="img-fluid mb-2"
                    style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                  />
                  <h3 className="h5 mb-2" style={{ textAlign: 'center' }}>
                    {cat.name}
                  </h3>
                  <div
                    className="cat-info"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div className="cat-info-left" style={{ flex: 1 }}>
                      <p className="mb-0">Breed: {cat.breed}</p>
                    </div>
                    <div
                      className="cat-info-right"
                      style={{ flex: 1, textAlign: 'right', marginRight: 20 }}
                    >
                      <p className="mb-0">Age: {cat.age}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
