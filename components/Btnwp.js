import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Btnwp = () => {
  return (
    <>
      <div className='btn-wp btn-fixed'>
        <a href='https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias.'>
        <FaWhatsapp />
        </a>
        </div>
      <div className='btn-pn btn-fixed'><a href='tel:5570127591'><FaPhone /></a></div>
    </>
    
  )
}

export default Btnwp;