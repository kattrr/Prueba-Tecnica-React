import React from 'react';

const FilterBar = ({ value, onChange, placeholder, data, renderItem }) => {
    const filteredData = data?.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
    );

    return (
        <>
            <div className="mb-4 text-center">
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    className="form-control w-50 mx-auto"
                    value={value}
                    onChange={onChange}
                />
            </div>
            {/* Renderizar los elementos filtrados */}
            {filteredData && filteredData.length > 0 ? (
                filteredData.map(renderItem)
            ) : (
                <p className="text-center">No se encontraron resultados.</p>
            )}
        </>
    );
};

export default FilterBar;
