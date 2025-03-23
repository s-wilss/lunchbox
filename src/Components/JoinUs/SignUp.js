import React, { useState } from 'react';

// CSS inline styles defined within the component
const styles = {
    //Entire container
    signupBlock: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '150px',
    },
    //Individual sections
    formGroup: {
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'row',  
      alignItems: 'center',  
    },

    //Individual text boxes
    input: {
      fontFamily: "'Host Grotesk', sans-serif",
      fontSize: "16px",
      color: "white",
      border: "4px solid rgb(19, 51, 29)",
      borderRadius: "4px",
      backgroundColor: "rgba(255, 255, 255, 0.363)",
      height: "40px",
      padding: "8px 12px",
      margin: "8px 0",
      transition: "all 0.3s ease",
      flex: 1,  
    },

    //Label within textboxes
    label: {
      marginRight: '10px', 
      fontSize: "16px",
      color: "white",
    },

    //Send button
    button: {
      fontFamily: "'Host Grotesk', sans-serif",
      backgroundColor: "rgb(19, 51, 29)",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },

    //Modal popup after clicking send
    modal: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "1000",
      color: "white",
    },

    //Content of modal popup 
    modalContent: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "5px",
      textAlign: "center",
      color: "black",
    },

    //Close button in modal
    closeButton: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "rgb(19, 51, 29)",
      color: "white",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

//Component for the sign-up form 
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  //Controls whether modal is displayed
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signupMessage, setSignupMessage] = useState('');

  //Update state when inout fields are filled
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // If fields are filled, open modal & show message
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email } = formData;

    if (firstName && lastName && email) {
      setSignupMessage(`Thanks for joining, ${firstName} ${lastName}! A confirmation email has been sent to ${email}`);
      setIsModalOpen(true);
    }
  };

  //Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


  //Returns title & three input text box sections, along with a send button
  return (
    <div style={styles.signupBlock}>
      <h2 style={{ textAlign: 'center', fontFamily: 'Trade Winds, serif', color: 'white', fontSize: '25px'}}>
        Sign Up
     </h2>

     
      
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="firstName" style={styles.label}>
            First name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <label htmlFor="lastName" style={styles.label}>
            Last name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        
        
        
        <button
          type="submit"
          style={styles.button}
        >
          Send
        </button>
      </form>

      

      {isModalOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <p id="confirmation-message">{signupMessage}</p>
            <button onClick={closeModal} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
