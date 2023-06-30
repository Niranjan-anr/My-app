import React, { useState } from 'react';
import classes from './people.module.css';
import jp from './Images/jp-WAfU.jpg';
import Dialog from './ImageDialog';

const NeedyPeople = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className={classes.needyPeople}>
      <ul>
        <h5>click on image for proofs and to know about him</h5>
        <li>
          <p>Name: JP (Jaya Prakash)</p>
          <p>Age: 19 years</p>
          <p>College: SVCE College, Tirupati, 517507</p>
          <img
            className={classes.image}
            src={jp}
            alt='jp'
            onClick={handleImageClick}
          />
        </li>
      </ul>
      {isDialogOpen && <Dialog onClose={handleCloseDialog} />}
    </div>
  );
};

export default NeedyPeople;
