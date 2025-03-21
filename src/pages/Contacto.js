import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../styles/Contacto.css';

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
                <div className="container mt-5 contacto">
                    <div className="card shadow-lg rounded-5 playing text-white flex-wrap text-center">
                        <div class="wave d-none d-sm-block"></div>
                        <div class="wave d-none d-sm-block"></div>
                        <div class="wave d-none d-sm-block"></div>
                        <h1 className="card-title py-3 mt-2" >Sobre mí</h1>
                        <div className="card-body ">
                            <h2 className="card-text text-break">
                                Kathering Rivera Rodriguez
                            </h2>
                            <p className="card-text text-light fs-4 text-break">
                                Desarrolladora Front-End / Diseñadora UX/UI
                            </p>
                            <div className="d-flex justify-content-center gap-3 mt-3 fs-5 flex-wrap">
                                <a href="mailto:katheriverar@gmail.com" className="text-decoration-none text-light">
                                    <FontAwesomeIcon icon="fas fa-envelope" /> Correo
                                </a>
                                <a href="https://github.com/kattrr" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">
                                    <FontAwesomeIcon icon="fa-brands fa-github" /> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/katheringriverar/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">
                                    <FontAwesomeIcon icon="fab fa-linkedin" /> LinkedIn
                                </a>
                                <a href="https://www.behance.net/katherivera" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">
                                    <FontAwesomeIcon icon="fa-brands fa-behance" /> Portafolio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container my-5 contacto py-5">
                    <h1 className="text-center" style={{ color: 'var(--bs-purple)' }}>Contáctanos</h1>
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
                        <button type="submit" className="btn w-100 text-white" style={{ background: 'var(--bs-purple)' }}>
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contacto;
