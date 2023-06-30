import React, { useState } from 'react';
import classes from './MainHeader.module.css';
import PaymentDialog from './Payment';
import Contact from './Contact';
import DonorsButton from './DonorButton';

const Header = () => {
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isContactDetailsOpen, setIsContactDetailsOpen] = useState(false);

  const openPaymentDialog = () => {
    setIsPaymentDialogOpen(true);
  };

  const closePaymentDialog = () => {
    setIsPaymentDialogOpen(false);
  };

  const toggleContactDetails = () => {
    setIsContactDetailsOpen((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <h1>We Are For You</h1>
      <h5>(A website created by students for students)</h5>
      <nav>
        <button onClick={toggleContactDetails}>Contact</button>
        <button onClick={openPaymentDialog}>Payment</button>
        <DonorsButton/>
      </nav>
      {isContactDetailsOpen && (
        <div className={classes.backdrop} onClick={toggleContactDetails}>
          <Contact onClose={toggleContactDetails} />
        </div>
      )}
      {isPaymentDialogOpen && (
        <>
          <div className={classes.backdrop} onClick={closePaymentDialog} />
          <PaymentDialog onClose={closePaymentDialog} />
        </>
      )}
    </header>
  );
};

export default Header;
