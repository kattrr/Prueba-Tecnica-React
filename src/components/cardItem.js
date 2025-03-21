import Modal from './Modal';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/CardItem.css'; // Import a CSS file for dynamic styles

const CardItem = (props) => {
    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const regionId = props.regionId;
    const cardColorClass = regionId >= 1 && regionId <= 6 ? `card-color-${regionId}` : 'card-color-default';

    return (
        <div className={`card shadow-lg ${props.className || ''} ${cardColorClass}`} style={props.style}>

            <div className="card-header">
                <h5 className="card-title my-3">
                    {props.name}{props.lastName ? ` ${props.lastName}` : ''}
                </h5>
            </div>
            <div className="card-body mt-3">
                {props.image && (
                    <a href={props.image} target="_blank" rel="noreferrer">
                        <img 
                            src={props.image} 
                            className="img-fluid d-block mx-auto mb-5" 
                            alt={props.name} 
                            style={{ maxWidth: "200px" }} 
                            width="200" 
                            height="auto" 
                        />
                    </a>
                )}
                {props.ingredients && <p> <strong>Ingredientes: </strong>{props.ingredients}</p>}
                {props.population && <h6 className="card-subtitle mb-2 text-muted">{props.population}</h6>}
                {props.politicalParty && <p><strong>Partido Político:</strong> {props.politicalParty}</p>}
                {props.startPeriodDate && <p>  {props.startPeriodDate}</p>}
                {props.endPeriodDate && <p>{props.endPeriodDate}</p>}
                {props.ubicacion && <p><FontAwesomeIcon icon="fa-solid fa-map-location-dot" /> <strong>Ubicacion:</strong> {props.ubicacion}</p>}
                <p className="card-text " style={{ textAlign: "justify" }}>{props.description}</p>

            </div>
            <div className="card-body text-end">
                {props.type !== "noModal" && (
                    <button type="button" className="btn btn-primary" onClick={handleShowModal}>
                        Ver mas Informacion
                    </button>
                )}
            </div>
            {showModal && (
                <Modal isOpen={showModal} onClose={handleCloseModal}
                    name={props.name}
                    image={props.image}
                    lastName={props.lastName}
                    population={props.population}
                    description={props.description}
                    surface={props.surface}
                    phone={props.phone}
                    municipalities={props.municipalities}
                    capital={props.capital}
                    latitude={props.latitude}
                    longitude={props.longitude}
                />
            )}
        </div>
    );
};

export default CardItem;