import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
    return (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" aria-labelledby="exampleModalLabel">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" className="btn-close" onClick={props.onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.image && <img src={props.image} className="card-img-top" alt={props.name} />}
                        {props.population && <p> {props.population}</p>}
                        {props.surface && <p> <FontAwesomeIcon icon="fa-solid fa-left-right" /><strong> Superficie:</strong> {props.surface} km²</p>}
                        <p>{props.description}</p>
                        {props.phone && <p> <FontAwesomeIcon icon="fa-solid fa-phone" /><strong> Prefijo:</strong> 60{props.phone}</p>}
                        {props.municipalities && <p> <FontAwesomeIcon icon="fa-solid fa-city" /><strong> Municipios:</strong> {props.municipalities}</p>}
                        {props.capital &&
                            <>
                                <h2 className='modal-title fs-3' >Capital:</h2>
                                <div className="card w-100" style={{ width: "18rem" }}>
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