import React, { useState } from 'react';

const ContactButtons = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleWhatsAppOptions = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="contact-buttons-container">
            <div
                id="overlay"
                className={`overlay ${isMenuOpen ? 'visible' : 'hidden'}`}
                onClick={closeMenu}
            ></div>

            <div className="buttons-wrapper">
                <div
                    className="whatsapp-button"
                    onClick={toggleWhatsAppOptions}
                >
                    <div className="button-inner">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp Logo"
                            className="whatsapp-logo"
                        />
                        <div className="status-indicator"></div>
                    </div>
                    <div className="button-text">
                        <span className="button-subtitle">Atención inmediata</span>
                        <span className="button-title">Info por WhatsApp</span>
                    </div>
                </div>

                <div
                    id="whatsapp-options"
                    className={`whatsapp-options ${isMenuOpen ? 'visible' : 'hidden'}`}
                >
                    <h3 className="options-title">Selecciona tu sucursal:</h3>
                    <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Coapa%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="option-link">
                        Coapa
                    </a>
                    <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Iztapalapa%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="option-link middle-link">
                        Iztapalapa
                    </a>
                    <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Mixcoac%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="option-link">
                        Mixcoac
                    </a>
                </div>

                <a
                    href="tel:+123456789"
                    className="phone-link"
                >
                    <div className="button-inner">
                        <img
                            src="https://vivahr.com/wp-content/uploads/2023/02/bilingual-customer-service-representative-job-description-template.jpg"
                            alt="Agente"
                            className="agent-logo"
                        />
                        <div className="status-indicator"></div>
                    </div>
                    <div className="button-text">
                        <span className="button-subtitle">2 Agentes online</span>
                        <span className="button-title">Llama a un asesor</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ContactButtons;