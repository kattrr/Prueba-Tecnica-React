import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

import CardItem from '../components/cardItem';
import FilterBar from '../components/filterBar';


const Mapas = () => {
    const [mapsData, setMapsData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [filters, setFilters] = useState([
        { key: 'name', type: 'text', placeholder: 'Buscar mapa...', value: '' }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApiColombia('Map');
                setMapsData(data);
            } catch (error) {
                console.error("Error al obtener datos de los mapas:", error.message);
                setErrorMessage("Error al cargar los datos de los mapas. Por favor, inténtalo de nuevo más tarde.");
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
            <h2 className="my-5 text-center fs-1">Tipos de Mapas de Colombia</h2>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            <FilterBar 
                filters={filters}
                itemsPerPage={3}
                onFilterChange={handleFilterChange}
                data={mapsData} // Pasar todos los datos
                renderItem={(map) => (
                    
                        <CardItem
                            key={map.id}
                            name={map.name}
                            description={map.description}
                            image = {map.urlImages[0]}
                            style={{ minHeight: '455px' , maxWidth: '20rem'}}
                            type="noModal"
                        />

                )}
            />
        </div>
    );
};

export default Mapas;

