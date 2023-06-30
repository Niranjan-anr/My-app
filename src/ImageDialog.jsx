import React, { useState } from 'react';
import classes from './ImageDialog.module.css';
import jpProof from './Images/Jpproof.jpeg';

const Dialog = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      <div className={`${classes.dialog} ${isOpen ? classes.open : ''}`}>
      <div className={classes.backdrop} onClick={handleClose}></div>
        <div className={classes.content}>
          <img className={classes.image} src={jpProof} alt='proof' />
          <p>Its the original proof of the fees details of JP authorised by respectable principle of the svce college</p>
          <div className={classes.dialogContent}><p>Our beloved  JP lost his father at the age of 16 years.He got into financial problems from then and now he is also facing many difficulties to pay his college fees which is around Rs 90,000 per annum and increases gradually year by year.His mom is a house wife and sadly she can't support him.He is a good student with decent grades and great determination.He applied for student loan by going around banks for 1 year and got student loan for 3 years but the loan is not sufficient to satisfy his fees and daily needs.He is not eligible even for JVD(Jagananna Vidya Dheevana) which a scholarship from govt of AP as he is a non-local.I hope there is still hope for him from us!.Let's donate and help him to complete his studies</p> </div>
          <button onClick={handleClose}>Close</button>
                </div>
      </div>
    </>
  );
};

export default Dialog;
