import React, { useState } from 'react';

// CSS styles defined within the component
const styles = {
    signupBlock: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '150px',
    },
    formGroup: {
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'row',  // This makes the form fields sit horizontally
      alignItems: 'center',  // Ensure labels and inputs are vertically aligned
    },
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
      flex: 1,  // Allow inputs to take up remaining space
    },
    label: {
      marginRight: '10px', // Add space between the label and the input
      fontSize: "16px",
      color: "white",
    },
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
    modalContent: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "5px",
      textAlign: "center",
      color: "black",
    },
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

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signupMessage, setSignupMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email } = formData;

    if (firstName && lastName && email) {
      setSignupMessage(`Thanks for joining, ${firstName} ${lastName}! A confirmation email has been sent to ${email}`);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
