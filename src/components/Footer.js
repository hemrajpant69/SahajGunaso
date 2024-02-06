import React from 'react';

const Footer = ({ mode }) => {
  // Define the text color class based on the mode
  const textColorClass = mode === 'dark' ? 'text-white' : 'text-dark';

  return (
    <>
      <div className="container my-5">
        <footer className={`text-center text-lg-start bg-${mode}`}>
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row mt-4">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className={`text-uppercase mb-4 ${textColorClass}`}>Bedkot Municipality</h5>
                <p className={textColorClass}>
                  Bedkot Municipality is situated in Nepal's Kanchanpur district, 
                  known for its rich cultural heritage and picturesque landscapes.
                </p>
                <p className={textColorClass}>
                  This vibrant municipality serves as a hub for local trade and commerce, offering a blend of tradition and modernity.
                  With its diverse population and thriving community spirit.
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className={`text-uppercase mb-4 pb-1 ${textColorClass}`}>Search something</h5>
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="formControlLg">
                    Search
                  </label>
                </div>
                <ul className={`fa-ul ${textColorClass}`} style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home" />
                    </span>
                    <span className="ms-2">Bedkot, 02, Jadepani</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope" />
                    </span>
                    <span className="ms-2">bedkot@example.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone" />
                    </span>
                    <span className="ms-2">099-520-043</span>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className={`text-uppercase mb-4 ${textColorClass}`}>Opening hours</h5>
                <table className={`table text-center ${textColorClass}`}>
                  <tbody className="font-weight-normal">
                    <tr>
                      <td>Sun - Thu:</td>
                      <td>10am - 5pm</td>
                    </tr>
                    <tr>
                      <td>Friday:</td>
                      <td>10am - 2pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className={`text-center p-3 ${textColorClass}`}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright :  
            <a className={textColorClass} href="https://hptech.com/">
              HpTech
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </>
  );
};

export default Footer;
