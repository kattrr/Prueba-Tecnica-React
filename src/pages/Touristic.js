import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

import CardItem from '../components/cardItem';
import FilterBar from '../components/filterBar';


const Turismo = () => {
    const [touristicsData, setTouristicsData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [filters, setFilters] = useState([
        { key: 'name', type: 'text', placeholder: 'Buscar Atracción Turística...', value: '' },
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
                const data = await fetchFromApiColombia('TouristicAttraction');
                setTouristicsData(data);
            } catch (error) {
                console.error("Error al obtener datos de las atracciones turisticas:", error.message);
                setErrorMessage("Error al cargar los datos de las atracciones turisticas. Por favor, inténtalo de nuevo más tarde.");
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
                data={touristicsData} // Pasar todos los datos
                renderItem={(site) => (
                    <CardItem 
                        key={site.id} 
                        name={site.name}
                        image = {site.images[0]}
                        description={site.description}
                        capital={site.city}
                        latitude={site.latitude}
                        longitude={site.longitude}  
                    />
                )}
            />
        </div>
    );
};

export default Turismo;