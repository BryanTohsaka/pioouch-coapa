import React,{ Component } from 'react';
import { IoLogoWhatsapp, IoCallSharp, IoLocationSharp } from "react-icons/io5";

export default class Blog extends Component {
    

    render(){
        return (
            <div>
            <footer className="site-footer" id='ubicaciones'>
                <div className="site-footer__upper">
                    <div className="container">
                    <h3 className='suc'>Sucursales</h3>
                        <div className="row">
                           
                            <div className="col-lg-9 d-flex justify-content-around footer-widget__links-wrap">
                                <div className="footer-widget sucursal">
                                    <h3 className="footer-widget__title">Sucursal Tlalpan</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#servicios" className='btn-align'><IoLocationSharp /> Prolongación División del Norte<br/> 4506, Plaza Acambay. <br/>Tlalpan.</a></li>
                                        <li><a href="https://wa.me/5570127591" className='btn-align'><IoCallSharp />55 7012 7591</a></li>
                                        <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias."  className='btn-ubi btn-align no-style'><IoLogoWhatsapp />WhatsApp</a>
                                    </ul>
                                </div>
                                <div className="footer-widget sucursal">
                                    <h3 className="footer-widget__title">Sucursal Mixcoac</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                    <li><a href="#servicios"><IoLocationSharp /> Francisco de P.Miranda 377,<br /> col. Merced Gómez,<br /> Álvaro Obregón <br />CP 01480 CDMX</a></li>
                                        <li><a href="https://wa.me/5551004343"><IoCallSharp /> 55 5100 4343</a></li>
                                        <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className='btn-ubi btn-align no-style'><IoLogoWhatsapp />WhatsApp</a>
                                    </ul>
                                </div>
                                <div className="footer-widget sucursal">
                                    <h3 className="footer-widget__title">Sucursal Tepalcates</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#servicios"> <IoLocationSharp />José Arrése #22 Col.<br/> Tepalcates, 09210 Alcaldía Iztapalapa. <br/>CDMX.</a></li>
                                        <li><a href="https://wa.me/5547403702"><IoCallSharp /> 55 4740 3702</a></li>
                                        <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className='btn-ubi btn-align no-style'><IoLogoWhatsapp />WhatsApp</a>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <div className="footer-widget footer-widget__about">
                                    <img src="/assets/images/resources/logo-dark.png" width="119" alt=""
                                        className="footer-widget__logo" />
                                        
                                </div>
                                
                            
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="inner-container text-center">
                            <p className="site-footer__copy">Desarrollado por <a href="https://zyntus.com" target='_blank'>Zyntus.com</a></p>
                        </div>
                    </div>
                </div>
            </footer>

                

            </div>
        )
    }
}