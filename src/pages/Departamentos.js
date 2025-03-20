import { fetchFromApiColombia } from '../services/FetchApiColombia';
import { useEffect, useState } from 'react';
import CardItem from '../components/cardItem';

const Departamentos = () => {
    const [departmentsData, setDepartmentsData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("")
    
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
    const filteredDepartments = departmentsData?.filter(department =>
        department.name.toLowerCase().includes(searchTerm.toLowerCase()) // Comparación sin distinción de mayúsculas/minúsculas
    );
    return (
        <div className="container">
            <h1 className="my-5 text-center">Explora los Departamentos de Colombia</h1>
            
            <div className="mb-4 text-center">
                <input 
                    type="text" 
                    placeholder="Buscar departamento..." 
                    className="form-control w-50 mx-auto"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Mostrar los departamentos filtrados */}
            {filteredDepartments && filteredDepartments.length > 0 ? (
                filteredDepartments.map(department => (
                    <CardItem 
                        key={department.id} 
                        name={department.name} 
                        description={department.description} 
                    />
                ))
            ) : (
                <p className="text-center">No se encontraron resultados.</p>
            )}
        </div>
    );
};

export default Departamentos;