import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

import CardItem from '../components/cardItem';
import FilterBar from '../components/filterBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Departamentos = () => {
    const [departmentsData, setDepartmentsData] = useState(null);
    const [filters, setFilters] = useState([
        { key: 'name', type: 'text', placeholder: 'Buscar departamento...', value: '' },
        { 
            key: 'regionId', 
            type: 'dropdown', 
            placeholder: 'Seleccionar región', 
            endpoint: 'https://api-colombia.com/api/v1/Region', 
            filterProperty: 'id', // Compare the 'id' property of the fetched regions
            value: '' 
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFromApiColombia('Department');
                setDepartmentsData(data);
            } catch (error) {
                console.error("Error fetching country data:", error);
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
            
            <FilterBar 
                filters={filters}
                onFilterChange={handleFilterChange}
                data={departmentsData}
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