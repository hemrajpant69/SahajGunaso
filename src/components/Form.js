import React, { useState } from 'react';

const ReportForm = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
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
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (fullName.trim() === '') {
      setError('Full Name is required.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (photo === '') {
      setError('Please upload a photo of the issue.');
      return;
    }

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
        backgroundColor: props.mode === 'white' ? 'black' : 'white',
        color: props.mode === 'white' ? 'white' : 'black',
      }}
    >
      Email address
    </label>
    <input
      type="email"
      className={`form-control ${error && !isValidEmail(email) ? 'is-invalid' : ''}`}
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={handleEmailChange}
      required
      style={{
        backgroundColor: props.mode === 'dark' ? 'white' : 'black',
        color: props.mode === 'white' ? 'white' : 'black',
      }}
    />
    {error && !isValidEmail(email) && (
      <div className="invalid-feedback">{error}</div>
    )}
  </div>
  <div className="my-3">
    <label
      htmlFor="exampleInputName"
      className="form-label"
      style={{
        backgroundColor: props.mode === 'white' ? 'black' : 'white',
        color: props.mode === 'white' ? 'white' : 'black',
      }}
    >
      Full Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputName"
      onChange={handleFullNameChange}
      required
      style={{
          backgroundColor: props.mode === 'white' ? 'black' : 'white',
          color: props.mode === 'white' ? 'white' : 'black',
        }}
    />
  </div>
  <div className="my-3">
    <label
      htmlFor="photo"
      className="form-label"
      style={{
          backgroundColor: props.mode === 'white' ? 'black' : 'white',
          color: props.mode === 'white' ? 'white' : 'black',
        }}
    >
      Upload Photo of issue
    </label>
    <input
      type="file"
      className="form-control"
      id="photo"
      accept="image/*"
      onChange={handlePhotoChange}
      required
    />
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
</form>

  );
};

export default ReportForm;
