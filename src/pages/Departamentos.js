import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

import CardItem from '../components/cardItem';
import FilterBar from '../components/filterBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Departamentos = () => {
    const [departmentsData, setDepartmentsData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [filters, setFilters] = useState([
        { key: 'name', type: 'text', placeholder: 'Buscar departamento...', value: '' },
        { 
            key: 'regionId', 
            type: 'dropdown', 
            placeholder: 'Seleccionar región', 
            endpoint: 'Region', 
            filterProperty: 'id', 
            value: '' 
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApiColombia('Department');
                setDepartmentsData(data);
            } catch (error) {
                console.error("Error al obtener datos de los departamentos:", error.message);
                setErrorMessage("Error al cargar los datos de los departamentos. Por favor, inténtalo de nuevo más tarde.");
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
            <h1 className="my-5 text-center">Explora los Departamentos de Colombia</h1>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            <FilterBar 
                filters={filters}
                itemsPerPage={5}
                onFilterChange={handleFilterChange}
                data={departmentsData} // Pasar todos los datos
                renderItem={(department) => (
                    <CardItem 
                        key={department.id} 
                        name={department.name}
                        population={
                            <>
                                <FontAwesomeIcon icon={faUsers} /> <strong>Población:</strong> {department.population}
                            </>
                        }
                        description={department.description}
                        surface={department.surface}
                        phone={department.phonePrefix}
                        municipalities={department.municipalities}
                        capital={department.cityCapital}
                    />
                )}
            />
        </div>
    );
};

export default Departamentos;