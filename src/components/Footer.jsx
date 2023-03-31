import React from "react";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <footer>
        <div className="container-fluid mt-5">
          <div className="row row-cols-3 mt-5">
            <div className="shopping-address">
              Johannesburg, Randburg
            </div>
            <div className="shopping-email">
              shopping@email.com
            </div>
            <div className="shopping-contact">
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Instgram</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
