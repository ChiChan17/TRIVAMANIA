import React, { useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { InfoIcon } from "@primer/octicons-react"; // custom icons
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './instruction.css'

const Instructions = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  
    return (
      <div>
        <button id="instructions" onClick={onOpenModal}><InfoIcon/></button>

        <Modal open={open} onClose={onCloseModal} center>
          <h1>Instructions</h1>
          <h3>Steps</h3>
          <ul>
            <li>1. A random question will pop up</li>
            <li>2. Press submit to have your question graded. A correct/incorrect will be returned. </li>
            <li>3. After your question is submitted. A new question will pop up.</li>
          </ul>
        
          <h3>Considerations: </h3>
          <ul>
            <li>If you want to skip a question click the "Skip Question" button with no penalty.</li>
            <li>If you want to adjust the questions click on the settings page button.</li>
            <li>You may change question category and difficulty in the settings page.</li>
          </ul>
        </Modal>
      </div>
    )
}

export default Instructions