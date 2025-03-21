import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido.';
        }
        if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            // Aquí puedes manejar el envío del formulario, como enviarlo a un servidor
            console.log('Formulario enviado:', formData);
            alert('Formulario enviado con éxito.');
            setFormData({ nombre: '', email: '', mensaje: '' });
        }
    };

    return (
        <>
            <section>
                <div className="container mt-5">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="card-title text-primary">Sobre mí</h2>
                            <p className="card-text text-muted">
                                <strong>Nombre:</strong> Kathering Rivera Rodriguez
                            </p>
                            <p className="card-text text-muted">
                                <strong>Cargo:</strong> Desarrolladora Front-End / Diseñadora UX/UI
                            </p>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <a href="mailto:kathering.rivera@example.com" className="text-decoration-none text-dark">
                                <FontAwesomeIcon icon="fas fa-envelope" /> Correo
                                </a>
                                <a href="https://github.com/katheringrivera" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                                <FontAwesomeIcon icon="fa-brands fa-github" /> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/katheringrivera" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                                <FontAwesomeIcon icon="fab fa-linkedin" /> LinkedIn
                                </a>
                                <a href="https://katheringrivera.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                                <FontAwesomeIcon icon="fa-brands fa-behance" /> Portafolio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-5">
                    <h1 className="text-center text-success">Contáctanos</h1>
                    <p className="text-center text-muted">
                        Si tienes alguna pregunta o comentario, no dudes en escribirnos. ¡Nos encantaría saber de ti!
                    </p>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre:</label>
                            <input
                                type="text"
                                name="nombre"
                                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                                placeholder="Tu nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                            {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo Electrónico:</label>
                            <input
                                type="email"
                                name="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="Tu correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensaje:</label>
                            <textarea
                                name="mensaje"
                                className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                                rows="5"
                                placeholder="Escribe tu mensaje aquí"
                                value={formData.mensaje}
                                onChange={handleChange}
                            ></textarea>
                            {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contacto;
