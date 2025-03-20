import { fetchFromApiColombia } from '../services/FetchApiColombia';
import { useEffect, useState } from 'react';
import CardItem from '../components/cardItem';

const Departamentos = () => {
    const [departmentsData, setDepartmentsData] = useState(null);

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
            {departmentsData && departmentsData.map(department => (
                <CardItem 
                    key={department.id} 
                    name={department.name} 
                    description={department.description} 
                />
            ))}
        </div>
    );
};

export default Departamentos;