import React, { useEffect, useState } from 'react';
import { fetchFromApiColombia } from '../services/FetchApiColombia';

const FilterBar = ({ filters, onFilterChange, data, renderItem }) => {
    const [dropdownOptions, setDropdownOptions] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

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
            {filteredData && filteredData.length > 0 ? (
                filteredData.map(renderItem)
            ) : (
                <p className="text-center">No se encontraron resultados.</p>
            )}
        </>
    );
};

export default FilterBar;
