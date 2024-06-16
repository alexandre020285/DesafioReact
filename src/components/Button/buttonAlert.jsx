import React from 'react';
import './buttonAlert.css';


const ButtonAlert = ({ label }) => {
  const handleClick = () => 
    
    Toastify({
      text:`A função desse label desse botão é ${label}`,
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        borderRadius: "10px"
        
        
      },
    }).showToast();
   
  return (
    <button className="ButtonAlert" onClick={handleClick}>{label}</button>
  );
};

export default ButtonAlert;