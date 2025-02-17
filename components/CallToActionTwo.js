import React from "react";

const CallToActionTwo = () => {
    return (
        <section className="cta-two">
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-6">
                        <div className="cta-two__content">
                            <i className="cta-two__icon dimon-icon-data"></i>
                            <div className="block-title text-left">
                                <h2 className="block-title__title">
                                Confía en nosotros para un <span>tratamiento</span> <br /> profesional.
                                </h2>
                            </div>
                            <div className="cta-two__text">
                                <p>
                                Nuestros procesos de eliminación de piojos están realizados con productos 100% naturales que no dañan su salud y sin efectos secundarios.<br />
                                Nuestros tratamientos y productos NO TÓXICOS hacen efectiva la eliminación de piojos y liendres sin efectos secundarios para tu salud y la de su familia.<br />
                                Contamos con instalaciones seguras, limpias, divertidas y dinámicas para que los pequeños tengan un momento agradable.<br />
                                </p>
                            </div>
                            <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="thm-btn">
                                <span>¡Agenda hoy!</span>
                            </a>
                        </div>
                    </div>
                </div>
                <img
                    src="/assets/images/mocs/cta-moc-2-1.webp"
                    className="cta-two__moc"
                    alt="Awesome Image"
                />
            </div>
        </section>
    );
};
export default CallToActionTwo;
