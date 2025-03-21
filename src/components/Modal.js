import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import '../styles/Modal.css';

const Modal = (props) => {
    return (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" aria-labelledby="exampleModalLabel">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel">{props.name}{props.lastName ? ` ${props.lastName}` : ''}</h1>
                        <button type="button" className="btn-close" onClick={props.onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.image && <img src={props.image} className="img-fluid d-block mx-auto mb-5" alt={props.name} style={{ maxWidth: "200px" }} />}
                        {props.population && <p> {props.population}</p>}
                        {props.politicalParty && <p><strong>Partido Político:</strong> {props.politicalParty}</p>}
                        {props.startPeriodDate && <p><strong>Inicio del Periodo:</strong> {props.startPeriodDate}</p>}
                        {props.endPeriodDate && <p><strong>Fin del Periodo:</strong> {props.endPeriodDate}</p>}
                        {props.surface && <p> <FontAwesomeIcon icon="fa-solid fa-left-right" /><strong> Superficie:</strong> {props.surface} km²</p>}
                        {props.latitude && <p> <FontAwesomeIcon icon="fa-solid fa-map-location-dot" /><strong> Latitud:</strong> {props.latitude}</p>}
                        {props.longitude && <p> <FontAwesomeIcon icon="fa-solid fa-map-location-dot" /><strong> Longitud:</strong> {props.longitude}</p>}
                        {props.phone && <p> <FontAwesomeIcon icon="fa-solid fa-phone" /><strong> Prefijo:</strong> 60{props.phone}</p>}
                        {props.municipalities && <p> <FontAwesomeIcon icon="fa-solid fa-city" /><strong> Municipios:</strong> {props.municipalities}</p>}
                        <p>{props.description}</p>
                        {props.capital &&
                            <>

                                <div className="card w-100">
                                    <div className="card-header">
                                        <h2 className='card-title' >Ciudad Principal:</h2>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">{props.capital.name}</h5>
                                        {props.capital.population && <p>
                                            <FontAwesomeIcon icon={faUsers} /> <strong>Población:</strong> {props.capital.population}
                                        </p>}
                                        {props.capital.surface && <p> <FontAwesomeIcon icon="fa-solid fa-left-right" /><strong> Superficie:</strong> {props.capital.surface} km²</p>}
                                        {props.capital.postalCode && <p> <FontAwesomeIcon icon="fa-solid fa-box" /><strong> Código Postal:</strong> {props.capital.postalCode}</p>}

                                        <p className="card-text">{props.capital.description}</p>
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;