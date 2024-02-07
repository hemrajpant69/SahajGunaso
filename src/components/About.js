import React from 'react';
function About(props) {
  const textColorClass = props.mode === 'dark' ? 'text-white' : 'text-dark';

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-primary">About Us</h2>
            <p className={`lead ${textColorClass}`}>
            Founded in 2010, Bedkot Municipality has been a cornerstone of community development in the Kanchanpur district.
             With a rich history spanning centuries, our municipality has evolved into a vibrant center for cultural exchange and economic growth.
              Nestled amidst the lush greenery of the Himalayan foothills, Bedkot offers a serene and picturesque setting for residents and visitors alike.

Our municipality is home to a diverse population, encompassing various ethnicities, languages, and traditions. We take pride in our cultural heritage, 
celebrating festivals and customs that reflect the unique identity of our community. At Bedkot Municipality, inclusivity and unity are at the forefront of our initiatives, 
fostering a sense of belonging among all residents.

As we look towards the future, our municipality remains committed to sustainable development and progress. Through innovative projects and partnerships,
 we aim to enhance the quality of life for our residents while preserving the natural beauty of our surroundings. Join us on this journey as we continue to build a brighter and more prosperous future for Bedkot and its residents.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="hemraj.jpg"
              alt="About Us"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
