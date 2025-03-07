import { FaUserDoctor } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { MdCleanHands } from "react-icons/md";
import { GiArcheryTarget } from "react-icons/gi";
import React from "react";

const Features = () => {
    return (
        <section className="service-one" id="servicios">
            <div className="container">
                <div className="block-title text-center">
                    <h2 className="block-title__title">
                        Clínicas de Tratamiento Profesional Antipiojos. <br />
                        <span>Resultados Asegurados.</span>
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                        <div className="service-one__single text-center">
                            <div className="service-one__inner">
                                <i className="service-one__icon ">
                                    <TbTargetArrow />
                                </i>
                                <h3>
                                    ✔ Una sesión,
                                    <br /> problema resuelto
                                </h3>
                                <p> Tratamiento para piojos 100% efectivo desde la 1a sesión.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                        <div className="service-one__single text-center">
                            <div className="service-one__inner">
                                <i className="service-one__icon">
                                    <FaUserDoctor />
                                </i>
                                <h3>
                                    {" "}
                                    ✔ Sin químicos,
                                    <br /> sin riesgo
                                </h3>
                                <p>Usamos productos antipiojos naturales y seguros.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                        <div className="service-one__single text-center">
                            <div className="service-one__inner">
                                <i className="service-one__icon">
                                    <MdCleanHands />
                                </i>
                                <h3>✔ Gratis para tu familia</h3>
                                <p>Revisión sin costo para quienes te acompañen.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                        <div className="service-one__single text-center">
                            <div className="service-one__inner">
                                <i className="service-one__icon">
                                    <GiArcheryTarget />
                                </i>
                                <h3>
                                    ✔ Certificado oficial
                                </h3>
                                <p>Prueba de
                                    eliminación para escuela o trabajo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Features;
