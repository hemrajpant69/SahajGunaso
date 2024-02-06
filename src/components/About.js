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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit amet libero magna. Nulla lacinia magna a dignissim luctus.
              Nulla facilisi. Proin at lacus nunc. Cras nec turpis id sem
              dapibus vestibulum. Mauris maximus, ligula ac consectetur
              malesuada, felis sem sodales libero, in tincidunt felis nulla
              id arcu. Aliquam erat volutpat. Cras at nisi eget ipsum
              imperdiet laoreet. Nullam elementum turpis vitae congue
              vestibulum. Sed tempus velit vitae augue fermentum, nec
              molestie nisl gravida. Sed mattis, felis id cursus luctus,
              lacus elit vestibulum nunc, sit amet gravida velit tortor non
              lectus.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://via.placeholder.com/500"
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
