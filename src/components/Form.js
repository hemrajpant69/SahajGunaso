// ReportForm.jsx
import  axios from 'axios';
import React, { useState } from 'react';
import WebcamCapture from './WebcamCapture';

const ReportForm = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [location, setLocation] = useState({});
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [description, setDescription]=useState('');
  const [descriptionError, setDescriptionError]=useState('');
//need for demo
const[image,setImage]= useState({})
//   const [formData, setFormData] = useState({
//     emailId: '',
//     name: '',
//     problemStatement: '',
  
//     latitude: '',
//     longitude: ''
// });

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
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setDescriptionError('');
    setError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setError('');
  };

  const handlePhotoCapture = (image) => {
    setPhotos((prevPhotos) => [...prevPhotos, image]);
    setIsWebcamOpen(false);
    setError('');
  };

  const removePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
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
      if (description.trim() === '') {
        setDescriptionError('Description is required.');
        setError('Please fill in all required fields.');
        return;
      }

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      setError('Please fill in all required fields.');
      return;
    }

    // if (photos.length === 0) {
    //   setError('Please capture at least one photo.');
    //   return;
    // }

    if (!location) {
      setError('Please fill in all required fields, including location.');
      return;
    }

    // All checks passed, you can now submit the form
    setError('');
    props.showAlert("Form Submitted Successfully","success")
    // console.log("Form Submitted Successfully", { fullName, email,description, photos,location });
   const a= location.latitude;
const b= location.longitude;
    const formData = new FormData();
    const blog = {
      
      "emailId":email,
      "name":fullName,
     "problemStatement":description,
     "latitude":a,
      "longitude":b
      
      
    };
    formData.append('blog', new Blob([JSON.stringify(blog)], { type: 'application/json' }));
    formData.append('photoFile', photos);
    console.log(formData)

    axios.post('http://localhost:8080/api/blogs/create', formData,{
      headers: {
        "Content-Type": `multipart/form-data`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
     },
     body:formData,
  })
    .then(response => {
        console.log('Blog created successfully:', response.data);
        // Reset form after successful submission
        setFullName('');
        setEmail('');
        setDescription('');
        setPhotos([]);
        setLocation({});
        setFullNameError('');
        setEmailError('');
        setDescriptionError('');
    })
    .catch(error => {
        console.error('There was an error creating the blog!', error);
    });
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
          htmlFor="descriptionInput"
          className="form-label"
          style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        >
          Problem Of Statement and Objectives:
        </label>
        <input
          type="text"
          className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
          id="descriptionInput"
          onChange={handleDescriptionChange}
          required
          style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        />
        {descriptionError && <div className="invalid-feedback">{descriptionError}</div>}
      </div>




      <div className="my-3">
        <label htmlFor="photoInput" className="form-label">
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
            {photos.length > 0 && (
              <div>
                <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Captured Photos:</p>
                <div className="d-flex flex-wrap">
                  {photos.map((photo, index) => (
                    <div key={index} className="m-2">
                      <img
                        src={photo}
                        alt={`Captured Pics ${index + 1}`}
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                      <button type="button" onClick={() => removePhoto(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : ( console.log("hey")
          // <WebcamCapture onCapture={handlePhotoCapture} />
        )}
      </div>


      <input
  type="file"
  accept="image/*"
  onChange={(e)=>{
    console.log(e.target.files[0])
    setPhotos(e.target.files[0])}}
  multiple  // Add this attribute if you want to allow multiple file selection
/>
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
