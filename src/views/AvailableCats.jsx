import { useEffect, useState } from 'react';
import './availableCats.css';
const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Tabby' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Ragdoll' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
  { name: 'Tiger', age: '5', breed: 'Siberian' },
  { name: 'Charlie', age: '2', breed: 'Burmese' },
  { name: 'Milo', age: '3', breed: 'Abyssinian' },
  { name: 'Lily', age: '3', breed: 'Bengal' },
  { name: 'Rocky', age: '1', breed: 'Birman' },
  { name: 'Toby', age: '5', breed: 'Persian' },
  { name: 'Sophie', age: '3', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState(availableCats);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json()))
        );
        const catsWithImages = availableCats.map((cat, index) => ({
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

  useEffect(() => {
    const filtered = cats.filter((cat) => {
      const matchesName = cat.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBreed = selectedBreed ? cat.breed === selectedBreed : true;
      return matchesName && matchesBreed;
    });
    setFilteredCats(filtered);
  }, [cats, searchQuery, selectedBreed]);

  return (
    <section className="text-center mt-4 position-relative">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Available Cats</h2>
        <div className="d-flex gap-4">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by name"
              className="form-control"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ maxWidth: '200px' }}
            />
          </div>
          <div className="filter-container">
            <select
              className="form-select"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              style={{ maxWidth: '200px' }}
            >
              <option value="">Filter by breed</option>
              {[...new Set(cats.map((cat) => cat.breed))].map((breed, i) => (
                <option key={i} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          width: '100%',
          borderBottom: '5px solid #2a88c7',
          marginBottom: '50px',
        }}
      />

      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="mt-2 row g-4 cats-container" id="cats-container">
          {filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                />
                <h3 className="h5 mb-2" style={{ textAlign: 'center' }}>
                  {cat.name}
                </h3>
                <div
                  className="cat-info"
                >
                  <div className="cat-info-left" >
                    <p className="mb-0">Breed: {cat.breed}</p>
                  </div>
                  <div className="cat-info-right" >
                    <p className="mb-0">Age: {cat.age}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
