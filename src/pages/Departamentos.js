import { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

import CardItem from '../components/cardItem';
import FilterBar from '../components/filterBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Departamentos = () => {
    const [departmentsData, setDepartmentsData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

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

    return (
        <div className="container">
            <h1 className="my-5 text-center">Explora los Departamentos de Colombia</h1>
            
            <FilterBar 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Buscar departamento..." 
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
                        capital = {department.cityCapital}
                    />
                )}
            />
        </div>
    );
};

export default Departamentos;