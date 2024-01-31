import React, { useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { InfoIcon } from "@primer/octicons-react"; // custom icons
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Info = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  
    return (
      <div>
        <button onClick={onOpenModal}><InfoIcon/></button>

        <Modal open={open} onClose={onCloseModal} center>
          <h1>Welcome to the settings page</h1>
          <h3>Benefits:</h3>
          <ul>
            <li>Customize categories to your liking and explore new content</li>
            <li>Adjust difficulty levels based on your skill </li>
            <li>Explore, learn, mix and match categories and difficulty for fun!</li>
          </ul>
        
          <h3>Important: </h3>
          <p>While adjusting settings can enhance your experience, 
            be mindful of your preferences and the time you invest in exploration.
            Some changes may impact the complexity of quesitons and the time required
            to complete quizzes.
          </p>
        </Modal>
      </div>
    )
}

export default Info