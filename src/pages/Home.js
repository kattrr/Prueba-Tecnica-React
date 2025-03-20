import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faMap, faUsers, faLanguage, faClock, faMoneyBill, faGlobe, faMapSigns, faFlag } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

const Home = () => {
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApiColombia('Country/Colombia');
                setCountryData(data);
            } catch (error) {
                console.error("Error fetching country data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="my-5 text-center">Explora las Características de Colombia</h1>
            <section className="row">
                {countryData ? (
                    <div className="col-12">
                        <h2 className="text-center mb-4">{countryData.name}</h2>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <p><FontAwesomeIcon icon={faLandmark} /> <strong>Capital:</strong> {countryData.stateCapital}</p>
                                <p><FontAwesomeIcon icon={faMap} /> <strong>Superficie:</strong> {countryData.surface} km²</p>
                                <p><FontAwesomeIcon icon={faUsers} /> <strong>Población:</strong> {countryData.population}</p>
                                <p><FontAwesomeIcon icon={faLanguage} /> <strong>Idiomas:</strong> {countryData.languages.join(', ')}</p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <p><FontAwesomeIcon icon={faClock} /> <strong>Zona Horaria:</strong> {countryData.timeZone}</p>
                                <p><FontAwesomeIcon icon={faMoneyBill} /> <strong>Moneda:</strong> {countryData.currency} ({countryData.currencySymbol})</p>
                                <p><FontAwesomeIcon icon={faGlobe} /> <strong>Región:</strong> {countryData.region}</p>
                                <p><FontAwesomeIcon icon={faMapSigns} /> <strong>Subregión:</strong> {countryData.subRegion}</p>
                                <p><FontAwesomeIcon icon={faFlag} /> <strong>Fronteras:</strong> {countryData.borders.join(', ')}</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <img src={countryData.flags[0]} alt="Bandera de Colombia" className="img-fluid" style={{ maxWidth: '200px' }} />
                        </div>
                    </div>
                ) : (
                    <p className="text-center">Cargando información...</p>
                )}
            </section>
        </div>
    );
};

export default Home;