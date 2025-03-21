import React, { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';
import Pagination from './Pagination'; // Importar el nuevo componente

const FilterBar = ({ filters, onFilterChange, data, renderItem, itemsPerPage }) => {
    const [dropdownOptions, setDropdownOptions] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Página actual

    useEffect(() => {
        const fetchDropdownData = async () => {
            const options = {};
            try {
                for (const filter of filters) {
                    if (filter.type === 'dropdown' && filter.endpoint) {
                        const result = await fetchFromApiColombia(filter.endpoint);
                        options[filter.key] = result;
                    }
                }
                setDropdownOptions(options);
            } catch (error) {
                console.error("Error al obtener datos del menú desplegable:", error.message);
                setErrorMessage("Error al cargar las opciones del menú desplegable. Por favor, inténtalo de nuevo más tarde.");
            }
        };
        fetchDropdownData();
    }, [filters]);

    const handleInputChange = (key, value) => {
        onFilterChange({ key, value });
        setCurrentPage(1); // Reiniciar a la primera página al cambiar filtros
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const filteredData = data?.filter(item => {
        return filters.every(filter => {
            if (filter.type === 'text') {
                return item[filter.key]?.toLowerCase().includes((filter.value || '').toLowerCase());
            }
            if (filter.type === 'dropdown') {
                const filterProperty = filter.filterProperty || 'id'; // Default to 'id' if not specified
                return filter.value
                    ? dropdownOptions[filter.key]?.find(option => option[filterProperty] === parseInt(filter.value)) &&
                    item[filter.key] === parseInt(filter.value)
                    : true;
            }
            return true;
        });
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData?.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <div className="mb-4 text-center">
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                {filters.map(filter => (
                    filter.type === 'text' ? (
                        <input
                            key={filter.key}
                            type="text"
                            placeholder={filter.placeholder}
                            className="form-control w-50 mx-auto mb-2"
                            value={filter.value || ''}
                            onChange={(e) => handleInputChange(filter.key, e.target.value)}
                        />
                    ) : filter.type === 'dropdown' ? (
                        <select
                            key={filter.key}
                            className="form-control w-50 mx-auto mb-2"
                            value={filter.value || ''}
                            onChange={(e) => handleInputChange(filter.key, e.target.value)}
                        >
                            <option value="">{filter.placeholder}</option>
                            {dropdownOptions[filter.key]?.map(option => (
                                <option key={option.id} value={option.id}>{option.name}</option>
                            ))}
                        </select>
                    ) : null
                ))}
            </div>
            {paginatedData && paginatedData.length > 0 ? (
                <>
                    <div className="d-flex justify-content-between flex-wrap gap-4">
                        {paginatedData.map(renderItem)}
                    
                    </div>
                    <Pagination
                    currentPage={currentPage}
                    totalItems={filteredData.length}
                    itemsPerPage={itemsPerPage}
                    onNextPage={handleNextPage}
                    onPreviousPage={handlePreviousPage}
                                />
                </>
            ) : (
                <p className="text-center">No se encontraron resultados.</p>
            )}
        </>
    );
};

export default FilterBar;
