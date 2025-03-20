const CardItem = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            {props.image && <img src={props.image} className="card-img-top" alt={props.name} />}
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {props.population && <h6 className="card-subtitle mb-2 text-muted">{props.population}</h6>}
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
};

export default CardItem;