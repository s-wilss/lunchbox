import React, { useState } from 'react';
import styled from 'styled-components';

const MessageCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 100px;

`
;
const Textarea = styled.textarea`
  font-family: 'Host Grotesk', sans-serif;
  font-size: 16px;
  color: white;
  border: 4px solid rgb(19, 51, 29);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.363);
  height: 40px;
  padding: 8px 12px;
  margin: 8px 0;
  transition: all 0.3s ease;
  flex: 1;  // Allow inputs to take up remaining space
`;

const Button = styled.button`
  font-family: 'Host Grotesk', sans-serif;
  background-color: rgb(19, 51, 29);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  color: white;
`;

const ModalContent = styled.div`
  background-color: rgb(253, 253, 253);;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  color: black;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  background-color: rgb(19, 51, 29);
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;

const SendUsAMessage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility
  const [message, setMessage] = useState(''); // State to store message input

  const handleInputChange = (e) => {
    setMessage(e.target.value); // Update the message state on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open modal when the form is submitted
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <MessageCont>
      <h2 style={{ textAlign: 'center', fontFamily: 'Trade Winds, serif', color: 'white', fontSize: '25px' }}>
        Send Us a Message
      </h2>
      <form method="post" className="contact-us" onSubmit={handleSubmit}>
        <Textarea
          rows="5"
          cols="40"
          placeholder="Enter your message"
          required
          id="contactusmessage"
          value={message} // Bind the textarea value to the message state
          onChange={handleInputChange} // Update state when the user types
        />
        <Button type="submit">Send</Button>
      </form>

      {/* Conditional rendering of the modal */}
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <p>Thank you for sending us your message: <br />{message}</p> {/* Display the message in the modal */}
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </MessageCont>
  );
};

export default SendUsAMessage;
