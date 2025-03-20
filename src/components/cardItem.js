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
        <div className="card" >
            {props.image && <img src={props.image} className="card-img-top" alt={props.name} />}
            <div className="card-header">
                    <h5 className="card-title my-3">{props.name}</h5>
            </div>
            <div className="card-body mt-3">
                {props.population && <h6 className="card-subtitle mb-2 text-muted">{props.population}</h6>}
                <p className="card-text " style={{ textAlign: "justify" }}>{props.description}</p>

            </div>
            <div className="card-body text-end">
                <button type="button" className="btn btn-primary" onClick={handleShowModal}>
                    Ver mas Informacion
                </button>
                
            </div>
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
    );
};

export default CardItem;