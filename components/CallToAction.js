import { FaBugSlash } from "react-icons/fa6";
import React from "react";

const CallToAction = () => {
    return (
        <section className="cta-one" id="nosotros">
            <img
                src="/assets/images/background/cta-one-bg.png"
                className="cta-one__bg"
                alt="Awesome Image"
            />
            <div className="container">
                
                <div className="row justify-content-lg-end">
                    <div className="col-lg-6">
                        <div className="cta-one__content">
                            <i className="cta-one__icon"><FaBugSlash /></i>
                            <div className="block-title text-left">
                                <h2 className="block-title__title">
                                ¡Libérate de los <span>Piojos</span> Hoy!
                                </h2>
                            </div>
                            <div className="cta-one__text">
                                <p>
                                Somos expertos en la eliminación de Piojos y Liendres del cabello, ¡Dejándote libre de ellos en 1 sola sesión!
                                </p>
                            </div>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="fa fa-check"></i>Todo nuestro personal está capacitado para brindarle una excelente atención y que disfrute su estancia en nuestra clínica.
                                </li>
                                <li className="list-items">
                                    <i className="fa fa-check"></i>Contamos con productos especializados, gran tecnología y experiencia en la eliminación de piojos. Ofrecemos un diagnóstico GRATIS para familiares y amigos.
                                </li>
                                <li>
                                    <i className="fa fa-check"></i>Con métodos y en procedimientos Patentados, tecnología para una efectiva eliminación de Piojos y Liendres   ¡Garantizamos los Resultados!
                                </li>
                            </ul>
                            <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="thm-btn">
                                <span>¡Agenda hoy!</span>
                            </a>
                        </div>
                    </div>
                </div>
                <img
                    src="/assets/images/mocs/cta-moc-1-1.jpeg"
                    className="cta-one__moc"
                    alt="Awesome Image"
                />
            </div>
        </section>
    );
};
export default CallToAction;
