import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onNextPage, onPreviousPage }) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const isNextDisabled = startIndex + itemsPerPage >= totalItems;
    const isPreviousDisabled = currentPage === 1;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="d-flex justify-content-between my-4 py-4 elementos">
            <button 
                className="btn btn-secondary mx-2" 
                onClick={onPreviousPage} 
                disabled={isPreviousDisabled}
            >
                Anterior
            </button>
   
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">{currentPage}</li> 
                    <li className="list-group-item">de</li> 
                    <li className="list-group-item">{totalPages}</li>
                </ul>
                

            <button 
                className="btn btn-secondary mx-2" 
                onClick={onNextPage} 
                disabled={isNextDisabled}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;
