import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faMap, faUsers, faLanguage, faClock, faMoneyBill, faGlobe, faMapSigns, faFlag } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';
import NaturalAreasType from './NaturalAreas';
import Mapas from './Mapas';
import Regiones from './Region';
import AOS from 'aos';
import '../styles/Home.css';

const Home = () => {
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApiColombia('Country/Colombia');
                setCountryData(data);
                AOS.refresh(); // Reinicializa AOS después de cargar el contenido
            } catch (error) {
                console.error("Error fetching country data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="my-5 text-center titulo">Explora las Características de Colombia</h1>

            <section className='card datosColombia'>
                <div className="box">
                    {countryData ? (
                        <div >
                            <h2 className="text-center mt-4 pt-3 ">{countryData.name}</h2>
                            <div className="table-responsive my-5 px-4">
                                {countryData.flags && (
                                    <div className="d-sm-block d-md-none text-center mb-3">
                                        <img src={countryData.flags[0]} alt="Bandera del país" className="img-fluid" style={{ maxWidth: '200px' }} />
                                    </div>
                                )}
                                <table className="table">
                                    <tbody>
                                        <tr className="d-md-table-row d-none">
                                            <td className="d-md-table-cell"><FontAwesomeIcon icon={faLandmark} /> <strong>Capital:</strong></td>
                                            <td className="d-md-table-cell">{countryData.stateCapital}</td>
                                            <td className="d-md-table-cell"><FontAwesomeIcon icon={faMap} /> <strong>Superficie:</strong></td>
                                            <td className="d-md-table-cell">{countryData.surface} km²</td>
                                            <td rowSpan={6} className="text-center align-middle d-md-table-cell">
                                                <img src={countryData.flags[0]} alt="Bandera del país" className="img-fluid" style={{ maxWidth: '200px' }} />
                                            </td>
                                        </tr>
                                        <tr className="d-md-none d-table-row">
                                            <td className="d-table-cell"><FontAwesomeIcon icon={faLandmark} /> <strong>Capital:</strong></td>
                                            <td className="d-table-cell">{countryData.stateCapital}</td>
                                        </tr>
                                        <tr className="d-md-none d-table-row">
                                            <td className="d-table-cell"><FontAwesomeIcon icon={faMap} /> <strong>Superficie:</strong></td>
                                            <td className="d-table-cell">{countryData.surface} km²</td>
                                        </tr>
                                        <tr className="d-md-table-row d-none">
                                            <td className="d-md-table-cell"><FontAwesomeIcon icon={faUsers} /> <strong>Población:</strong></td>
                                            <td className="d-md-table-cell">{countryData.population}</td>
                                            <td className="d-md-table-cell"><FontAwesomeIcon icon={faLanguage} /> <strong>Idiomas:</strong></td>
                                            <td className="d-md-table-cell">{countryData.languages.join(', ')}</td>
                                        </tr>
                                        <tr className="d-md-none d-table-row">
                                            <td className="d-table-cell"><FontAwesomeIcon icon={faUsers} /> <strong>Población:</strong></td>
                                            <td className="d-table-cell">{countryData.population}</td>
                                        </tr>
                                        <tr className="d-md-none d-table-row">
                                            <td className="d-table-cell"><FontAwesomeIcon icon={faLanguage} /> <strong>Idiomas:</strong></td>
                                            <td className="d-table-cell">{countryData.languages.join(', ')}</td>
                                        </tr>
                                        <tr className="d-md-table-row d-none">
                                            <td className="d-md-table-cell"><FontAwesomeIcon icon={faClock} /> <strong>Zona Horaria:</strong></td>
                                            <td className="d-md-table-cell">{countryData.timeZone}</td>
                                            <td className="d-md-table-cell"><FontAwesomeIcon icon={faMoneyBill} /> <strong>Moneda:</strong></td>
                                            <td className="d-md-table-cell">{countryData.currency} ({countryData.currencySymbol})</td>
                                        </tr>
                                        <tr className="d-md-none d-table-row">
                                            <td className="d-table-cell"><FontAwesomeIcon icon={faClock} /> <strong>Zona Horaria:</strong></td>
                                            <td className="d-table-cell">{countryData.timeZone}</td>
                                        </tr>
                                        <tr className="d-md-none d-table-row">
                                            <td className="d-table-cell"><FontAwesomeIcon icon={faMoneyBill} /> <strong>Moneda:</strong></td>
                                            <td className="d-table-cell">{countryData.currency} ({countryData.currencySymbol})</td>
                                        </tr>
                                        <tr className="d-md-table-row d-none">
                                            <td className="d-md-table-cell"><FontAwesomeIcon icon={faGlobe} /> <strong>Región:</strong></td>
                                            <td className="d-md-table-cell">{countryData.region}</td>
                                            <td className="d-md-table-cell"><FontAwesomeIcon icon={faMapSigns} /> <strong>Subregión:</strong></td>
                                            <td className="d-md-table-cell">{countryData.subRegion}</td>
                                        </tr>
                                        <tr className="d-md-none d-table-row">
                                            <td className="d-table-cell"><FontAwesomeIcon icon={faGlobe} /> <strong>Región:</strong></td>
                                            <td className="d-table-cell">{countryData.region}</td>
                                        </tr>
                                        <tr className="d-md-none d-table-row">
                                            <td className="d-table-cell"><FontAwesomeIcon icon={faMapSigns} /> <strong>Subregión:</strong></td>
                                            <td className="d-table-cell">{countryData.subRegion}</td>
                                        </tr>
                                        <tr>
                                            <td className="d-md-table-cell"><FontAwesomeIcon icon={faFlag} /> <strong>Fronteras:</strong></td>
                                            <td className="d-md-table-cell" colSpan={3}>{countryData.borders.join(', ')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center">Cargando información...</p>
                    )}
                </div>
            </section>
            <hr />
            <section className='my-5 py-3 regiones' data-aos="fade-right" data-aos-duration="3000">
                <Regiones />
            </section>
            <hr />
            <section className='my-5 py-3 areasNaturales' data-aos="fade-left" data-aos-duration="3000">
                <NaturalAreasType />
            </section>
            <hr />
            <section className='my-5 py-3 mapas' data-aos="fade-right" data-aos-duration="2500">
                <Mapas />
            </section>
            
        </div>
    );
};

export default Home;