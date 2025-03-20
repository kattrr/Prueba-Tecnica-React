import Modal from './Modal';
import React from 'react';

const CardItem = (props) => {
    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            {props.image && <img src={props.image} className="card-img-top" alt={props.name} />}
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {props.population && <h6 className="card-subtitle mb-2 text-muted">{props.population}</h6>}
                <p className="card-text">{props.description}</p>
                <button type="button" className="btn btn-info" onClick={handleShowModal}>
                    Ver mas Informacion
                </button>
                {showModal && (
                    <Modal isOpen={showModal} onClose={handleCloseModal} 
                        name={props.name}
                        population={props.population}
                        description={props.description}
                        surface={props.surface}
                        phone={props.phone}
                        municipalities={props.municipalities}
                        capital={props.capital}
                        
                    />
                )}
            </div>
        </div>
    );
};

export default CardItem;