import React from 'react';

const Banner = () => {
        return (
            <section className="banner-one" id="banner">
                <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
                <div className="container">
                    <div className="banner-one__moc">
                        <img src="/assets/images/mocs/banner-moc-1-1.webp" alt="Awesome Image" />
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-one__content">
                                <h3 className="banner-one__title">Expertos<br />
                                    <span>en eliminación</span> de Piojos<br /> y Liendres.</h3>
                                <p className="banner-one__text">Atención personalizada ¡Ven a Sin Piojos!.
                                </p>
                                <a href="https://wa.me/5570127591" className="banner-one__btn thm-btn "><span>¡Agenda tu cita!</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Banner;