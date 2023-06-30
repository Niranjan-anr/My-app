import React from 'react';
import classes from './Payment.module.css';
import qr from './Images/jupiterqr.jpeg'
const PaymentDialog = ({ onClose }) => {
  return (
    <div className={classes.dialog}>
      <div className={classes.dialogContent}>
        <h2>QR</h2>
         <img src={qr} alt='qr'></img>
      </div>
      <button className={classes.closeButton} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default PaymentDialog;
