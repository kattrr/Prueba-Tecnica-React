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
        <div className={`card ${props.className || ''}`} style={props.style}>    
            
            <div className="card-header">
                    <h5 className="card-title my-3">
                        {props.name}{props.lastName ? ` ${props.lastName}` : ''}
                    </h5>
            </div>
            <div className="card-body mt-3">
            {props.image && <img src={props.image} className="img-fluid d-block mx-auto mb-5" alt={props.name} style={{maxWidth: "200px"}} />}
                {props.population && <h6 className="card-subtitle mb-2 text-muted">{props.population}</h6>}
                {props.politicalParty && <p><strong>Partido Político:</strong> {props.politicalParty}</p>}
                {props.startPeriodDate && <p>  {props.startPeriodDate}</p>}
                {props.endPeriodDate && <p>{props.endPeriodDate}</p>}
                <p className="card-text " style={{ textAlign: "justify" }}>{props.description}</p>

            </div>
            <div className="card-body text-end">
                {(props.type !== "president") || (props.type !==  "natural")  && (
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
                        politicalParty={props.politicalParty}
                        startPeriodDate={props.startPeriodDate}
                        endPeriodDate={props.endPeriodDate}
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