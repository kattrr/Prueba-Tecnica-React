import React, { useEffect, useState } from 'react';

const FilterBar = ({ filters, onFilterChange, data, renderItem }) => {
    const [dropdownOptions, setDropdownOptions] = useState({});

    useEffect(() => {
        const fetchDropdownData = async () => {
            const options = {};
            for (const filter of filters) {
                if (filter.type === 'dropdown' && filter.endpoint) {
                    try {
                        const response = await fetch(filter.endpoint);
                        const result = await response.json();
                        options[filter.key] = result;
                    } catch (error) {
                        console.error(`No se pudo cargar la lista ${filter.key}:`, error);
                    }
                }
            }
            setDropdownOptions(options);
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
