import { FaUserDoctor } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { MdCleanHands } from "react-icons/md";
import { GiArcheryTarget } from "react-icons/gi";
import React from 'react';

const Features = () => {
        return (
            <section className="service-one" id="servicios">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Eliminación de <span>Piojos</span> <br /> y liendres.
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon "><TbTargetArrow />
</i>
                                    <h3>Tratamientos<br /> Eficaces</h3>
                                    <p >Productos no tóxicos, 100% naturales, libres de químicos.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon"><FaUserDoctor /></i>
                                    <h3><a href="#"> Diagnóstico<br /> Gratis</a></h3>
                                    <p>Diagnósticos gratuitos a <br /> familiares y amigos.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon"><MdCleanHands /></i>
                                    <h3><a href="#">Ambiente <br />Agradable</a></h3>
                                    <p>Tratamiento 100%<br/> garantizado</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon"><GiArcheryTarget /></i>
                                    <h3><a href="#">Resultados <br />Garantizados</a></h3>
                                    <p>Certificado de limpieza para escuela/trabajo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Features;