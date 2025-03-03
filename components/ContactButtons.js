"use client";
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
                className={`overlay ${isMenuOpen ? 'show' : ''}`}
                onClick={closeMenu}
            ></div>

            <div className="contact-buttons">
                <div
                    className="whatsapp-button"
                    onClick={toggleWhatsAppOptions}
                >
                    <div className="whatsapp-icon">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp Logo"
                            className="whatsapp-logo"
                        />
                        <div className="status-indicator"></div>
                    </div>
                    <div className="whatsapp-text">
                        <span className="subtitle">Atención inmediata</span>
                        <span>Info por WhatsApp</span>
                    </div>
                </div>

                <div
                    id="whatsapp-options"
                    className={`whatsapp-options ${isMenuOpen ? 'show' : ''}`}
                >
                    <h3 className="options-title">Selecciona tu sucursal:</h3>
                    <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Coapa%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="option">Coapa</a>
                    <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20IztapalapaMe%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="option">Iztapalapa</a>
                    <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Mixcoac%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="option">Mixcoac</a>
                </div>

                <a href="tel:+123456789" className="call-button">
                    <div className="agent-icon">
                        <img
                            src="https://vivahr.com/wp-content/uploads/2023/02/bilingual-customer-service-representative-job-description-template.jpg"
                            alt="Agente"
                            className="agent-photo"
                        />
                        <div className="status-indicator"></div>
                    </div>
                    <div className="agent-text">
                        <span className="subtitle">2 Agentes online</span>
                        <span>Llama a un asesor</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ContactButtons;
