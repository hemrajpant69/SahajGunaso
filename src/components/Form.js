import React, { useState } from 'react';
import WebcamCapture from './WebcamCapture';

const ReportForm = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [photoError, setPhotoError] = useState('');
  const [location, setLocation] = useState(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          setLocation({ latitude, longitude });
          console.log("Location Filled Successfully");
        },
        (error) => {
          setError(`Error getting location: ${error.message}`);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setFullNameError('');
    setError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setError('');
  };

  const handlePhotoCapture = (image) => {
    setPhoto(image);
    setIsWebcamOpen(false);
    setPhotoError('');
    setError('');
  };

  const handleRecapture = () => {
    setIsWebcamOpen(true);
    setPhoto(null);
    setPhotoError('');
    setError('');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (fullName.trim() === '') {
      setFullNameError('Full Name is required.');
      setError('Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      setError('Please fill in all required fields.');
      return;
    }

    if (photo === null) {
      setPhotoError('Please capture a photo of the issue.');
      setError('Please fill in all required fields.');
      return;
    }

    if (!location) {
      setError('Please fill in all required fields, including location.');
      return;
    }

    // All checks passed, you can now submit the form
    setError('');
    console.log("Form Submitted Successfully");
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <form>
      <div className="my-4">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label"
          style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        >
          Email address
        </label>
        <input
          type="email"
          className={`form-control ${error && !isValidEmail(email) ? 'is-invalid' : ''}`}
          id="emailInput"
          aria-describedby="emailHelp"
          onChange={handleEmailChange}
          required
          style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        />
        {emailError && <div className="invalid-feedback">{emailError}</div>}
      </div>
      <div className="my-3">
        <label
          htmlFor="fullNameInput"
          className="form-label"
          style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        >
          Full Name
        </label>
        <input
          type="text"
          className={`form-control ${fullNameError ? 'is-invalid' : ''}`}
          id="fullNameInput"
          onChange={handleFullNameChange}
          required
          style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        />
        {fullNameError && <div className="invalid-feedback">{fullNameError}</div>}
      </div>
      <div className="my-3">
        <label
          htmlFor="photoInput"
          className="form-label"
          style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        >
          Photo Capture
        </label>
        {!isWebcamOpen ? (
          <>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => setIsWebcamOpen(true)}
            >
              Open Webcam
            </button>
            {photo && (
              <>
                <img
                  src={photo}
                  alt=""
                  style={{
                    maxWidth: '100%',
                    marginTop: '10px',
                  }}
                />
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={handleRecapture}
                >
                  Recapture
                </button>
              </>
            )}
          </>
        ) : (
          <WebcamCapture onCapture={handlePhotoCapture} />
        )}
        {photoError && <div className="invalid-feedback">{photoError}</div>}
      </div>

      <button
        type="button"
        className="btn btn-secondary mx-2"
        onClick={getLocation}
      >
        Current Location
      </button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleSubmit}>
        Submit
      </button>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </form>
  );
};

export default ReportForm;
