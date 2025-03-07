import React, { useState } from "react";
import branchUrls from "../Config/branchUrls";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="banner-one" id="banner">
        <span className="banner-one__shape-1"></span>
        <span className="banner-one__shape-2"></span>
        <span className="banner-one__shape-3"></span>
        <span className="banner-one__shape-4"></span>
        <div className="container reverse">
          <div className="banner-one__moc">
            <img src="/assets/images/mocs/banner-moc-1-1.webp" alt="Awesome Image" />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="banner-one__content">
                <h3 className="banner-one__title">
                  Expertos en<br />
                  <span>eliminar</span> Piojos<br /> y Liendres.
                </h3>
                <p className="banner-one__text">
                Lideres en el mercado en CDMX <br />
                con una sucursal <b>cerca de ti</b>.
                </p>
                <button className="banner-one__btn thm-btn2" onClick={() => setIsOpen(true)}>
                  <span>¡Agenda tu cita!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Selecciona tu sucursal:</h3>
            </div>
            <div className="modal-body">
            {branchUrls.map((branch) => (
                <a key={branch.name} href={branch.url} target="_blank" rel="noopener noreferrer" className="modal-option">
                  {branch.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;