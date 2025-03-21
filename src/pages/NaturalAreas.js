import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

import CardItem from '../components/cardItem';
import FilterBar from '../components/filterBar';


const NaturalAreasType = () => {
    const [naturalAreasTypeData, setNaturalAreasTypeData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [filters, setFilters] = useState([
        { key: 'name', type: 'text', placeholder: 'Buscar area...', value: '' }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApiColombia('CategoryNaturalArea');
                setNaturalAreasTypeData(data);
            } catch (error) {
                console.error("Error al obtener datos de las Areas Naturales:", error.message);
                setErrorMessage("Error al cargar los datos de las Areas Naturales. Por favor, inténtalo de nuevo más tarde.");
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
            <h2 className="my-5 text-center fs-1">Tipos de Áreas Naturales en Colombia</h2>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            <FilterBar
                filters={filters}
                itemsPerPage={3}
                onFilterChange={handleFilterChange}
                data={naturalAreasTypeData} // Pasar todos los datos
                renderItem={(area) => (

                    <CardItem
                        key={area.id}
                        name={area.name}
                        description={area.description}
                        style={{ minHeight: '455px', maxWidth: '20rem' }}
                        type="noModal"
                    />

                )}
            />
        </div>
    );
};

export default NaturalAreasType;