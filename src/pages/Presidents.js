import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

import CardItem from '../components/cardItem';
import FilterBar from '../components/filterBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Presidentes = () => {
    const [presidentsData, setPresidentsData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [filters, setFilters] = useState([
        { key: 'name', type: 'text', placeholder: 'Buscar Nombre...', value: '' },
        { key: 'lastName', type: 'text', placeholder: 'Buscar Apellido...', value: '' },
        { key: 'politicalParty', type: 'text', placeholder: 'Buscar Partido Político...', value: '' },
        { key: 'startPeriodDate', type: 'text', placeholder: 'Buscar Por fecha de inicio...', value: '' },
        { key: 'endPeriodDate', type: 'text', placeholder: 'Buscar Por fecha de fin...', value: '' },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApiColombia('President');
                setPresidentsData(data);
            } catch (error) {
                console.error("Error al obtener datos de los presidentes:", error.message);
                setErrorMessage("Error al cargar los datos de los presidentes. Por favor, inténtalo de nuevo más tarde.");
            }
        };
        fetchData();
    }, []);

    const handleFilterChange = (updatedFilter) => {
        setFilters((prevFilters) =>
            prevFilters.map((filter) =>
                filter.key === updatedFilter.key
                    ? { ...filter, value: updatedFilter.value }
                    : filter
            )
        );
    };

    return (
        <div className="container">
            <h1 className="my-5 text-center">Conoce los Presidentes de Colombia</h1>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            <FilterBar
                filters={filters}
                itemsPerPage={6}
                onFilterChange={handleFilterChange}
                data={presidentsData} // Pasar todos los datos
                renderItem={(president) => (
                    <CardItem
                        key={president.id}
                        name={president.name}
                        lastName={president.lastName}
                        politicalParty={president.politicalParty}
                        startPeriodDate={<>
                            <FontAwesomeIcon icon="fa-solid fa-calendar" /> <strong>Inicio del Periodo:</strong> {president.startPeriodDate}
                        </>}
                        endPeriodDate={<>
                            <FontAwesomeIcon icon="fa-solid fa-calendar-days" /> <strong>Fin del Periodo:</strong> {president.endPeriodDate}
                        </>}
                        description={president.description}
                        image={president.image}
                        type="president"
                    />
                )}
            />
        </div>
    );
};

export default Presidentes;