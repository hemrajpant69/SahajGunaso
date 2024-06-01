import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admin.css';  // This will contain our custom styles
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Card } from 'react-bootstrap';

export default function Admin() {
  const [data, setData] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    updatePage();
  }, []);

  const deleteit = (id) => {
    axios.delete(`http://localhost:8080/api/blogs/blog/${id}`)
      .then(() => {
        navigate('/Home');
      })
      .catch((e) => console.log(e))
      .finally(() => console.log("finally get it"));
  };

  const updateit = (id) => {};

  const updatePage = () => {
    axios.get('http://localhost:8080/api/blogs/blog')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((e) => console.log(e))
      .finally(() => console.log("finally get it"));
  };

  const handleShow = async (userId) => {
    setShow(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/blogs/blog/${userId}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Latest Gunasos</h1>
      <div className="row">
        {data.map((entry, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card className="blog-entry h-100">
              <Card.Img variant="top" src={`data:image/png;base64,${entry.photo}`} alt="Blog Photo" />
              <Card.Body>
                <Card.Title>{entry.name}</Card.Title>
                <Card.Text className="message">
                  {entry.problemStatement}
                </Card.Text>
                <Button variant="danger" className="me-2 mr-0" onClick={() => deleteit(entry.id)}>Delete</Button>
                <Button variant="secondary" className="me-2 ml-10 mt-10" onClick={() => updateit(entry.id)}>Update</Button>
                <Button variant="primary"  className="button mt-1" onClick={() => handleShow(entry.id)}>View Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userDetails ? (
            <div>
              <p><strong>Email ID:</strong> {userDetails.emailId}</p>
              <p><strong>Full Name:</strong> {userDetails.name}</p>
              <p><strong>Problem Statement:</strong> {userDetails.problemStatement}</p>
              <p><strong>Location:</strong> {`(${userDetails.latitude}, ${userDetails.longitude})`}</p>
              {userDetails.photo && <img src={`data:image/png;base64,${userDetails.photo}`} alt="User" className="img-fluid" />}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
