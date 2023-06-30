import React, { useState } from 'react';
import classes from './DonorButton.module.css';

const DonorsButton = () => {
  const [isDonorsOpen, setIsDonorsOpen] = useState(false);
  const [donors, setDonors] = useState([{Name:"unknown ",Donated:"unknown"}]);

  const toggleDonors = () => {
    setIsDonorsOpen((prevState) => !prevState);
  };

  const closeDonors = () => {
    setIsDonorsOpen(false);
  };

  return (
    <>
      <button onClick={toggleDonors}>Donors</button>
      {isDonorsOpen && (
        <div className={classes.backdrop} onClick={closeDonors}>
          <div className={classes.donorsContainer}>
            <h2>Donors</h2>
            {donors.map((donor, index) => (
              <div key={index}>
                <p>Name: {donor.Name}</p>
                <p>Donated: {donor.Donated}</p>
                Yet no donors!
              </div>
            ))}
            <button className={classes.closeButton} onClick={closeDonors}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DonorsButton;
