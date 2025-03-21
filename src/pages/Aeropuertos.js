import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

import CardItem from '../components/cardItem';
import FilterBar from '../components/filterBar';


const Aeropuertos = () => {
    const [aeropuertosData, setAeropuertosData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [filters, setFilters] = useState([
        { key: 'name', type: 'text', placeholder: 'Buscar Aeropuerto...', value: '' },
        { 
            key: 'cityId', 
            type: 'dropdown', 
            placeholder: 'Seleccionar ciudad...', 
            endpoint: 'City?sortBy=name&sortDirection=asc', 
            filterProperty: 'id', 
            value: '' 
        }       
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApiColombia('Airport');
                setAeropuertosData(data);
            } catch (error) {
                console.error("Error al obtener datos de los aeropuerto:", error.message);
                setErrorMessage("Error al cargar los datos de los aeropuerto. Por favor, inténtalo de nuevo más tarde.");
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
            <h1 className="my-5 text-center">Explora los Lugares Turisticos de Colombia</h1>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            <FilterBar 
                filters={filters}
                itemsPerPage={5}
                onFilterChange={handleFilterChange}
                data={aeropuertosData} // Pasar todos los datos
                renderItem={(airport) => (
                    <CardItem 
                        key={airport.id} 
                        name={airport.name}
                        capital={airport.city}
                        latitude={airport.latitude}
                        longitude={airport.longitude}  
                    />
                )}
            />
        </div>
    );
};

export default Aeropuertos;