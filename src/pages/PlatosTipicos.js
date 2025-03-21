import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

import CardItem from '../components/cardItem';
import FilterBar from '../components/filterBar';

const PlatosTipicos = () => {
    const [dishesData, setDishesData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [filters, setFilters] = useState([
        { key: 'name', type: 'text', placeholder: 'Buscar Nombre del plato...', value: '' }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApiColombia('TypicalDish');
                setDishesData(data);
            } catch (error) {
                console.error("Error al obtener datos de los platos:", error.message);
                setErrorMessage("Error al cargar los datos de los platos. Por favor, inténtalo de nuevo más tarde.");
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
            <h1 className="my-5 text-center">Conoce los Platos Tipicos de Colombia</h1>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            <FilterBar
                filters={filters}
                itemsPerPage={8}
                onFilterChange={handleFilterChange}
                data={dishesData} // Pasar todos los datos
                renderItem={(dish) => (
                    <CardItem
                        key={dish.id}
                        name={dish.name}
                        description={dish.description}
                        image={dish.imageUrl}
                        ingredients={dish.ingredients}
                        type="noModal"
                        style={{ minHeight: '455px', maxWidth: '22%' }}
                        regionId={dish.department.regionId}
                    />
                )}
            />
        </div>
    );
};

export default PlatosTipicos;