import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

import CardItem from '../components/cardItem';

const Regiones = () => {
    const [regionsData, setRegionsData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0); // Nuevo estado para el índice activo

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? regionsData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === regionsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApiColombia('Region');
                setRegionsData(data);
            } catch (error) {
                console.error("Error al obtener datos de las regiones:", error.message);
                setErrorMessage("Error al cargar los datos de las regiones. Por favor, inténtalo de nuevo más tarde.");
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="my-5 text-center">Regiones de Colombia</h1>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

            <div className='carousel slide' id='carouselExample' >
                <div className="carousel-inner ">
                    {regionsData && regionsData.length > 0 ? (
                        regionsData.map((region, index) => (
                            <CardItem
                                key={region.id}
                                name={region.name}
                                description={region.description}
                                type="noModal"
                                style={{minHeight:'251px', maxWidth: '80%', margin: 'auto 10%'}}
                                className={index === activeIndex ? "carousel-item active" : "carousel-item"}
                            />
                        ))
                    ) : (
                        <p className="text-center">No hay datos disponibles.</p>
                    )}
                </div>
                <button
                    className="carousel-control-prev bg-primary rounded-circle"
                    type="button"
                    onClick={handlePrev} // Cambiar al elemento anterior
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next bg-primary rounded-circle"
                    type="button"
                    onClick={handleNext} // Cambiar al siguiente elemento
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Regiones;

