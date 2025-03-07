import React, { useState } from 'react';
import branchUrls from "../Config/branchUrls";

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
                        <span className="button-title">Citas Urgentes - WhatsApp</span>
                    </div>
                </div>

                <div
                    id="whatsapp-options"
                    className={`whatsapp-options ${isMenuOpen ? 'visible' : 'hidden'}`}
                >
                    <h3 className="options-title">Selecciona tu sucursal:</h3>

                    {branchUrls.map((branch) => (
                        <a key={branch.name} href={branch.url} target="_blank" rel="noopener noreferrer" className="option-link">
                            {branch.name}
                        </a>
                    ))}
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