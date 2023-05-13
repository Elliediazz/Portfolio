import React from "react";

import Button from 'react-bootstrap/Button';

const Error = () => {

  return (
    <div className="error-page">
      <h2>Error 404</h2>
      <p>Page Not Found</p>
      <Button className="error-btn" variant="outline-dark" size="lg" style={{ color: "gray" }} href="/" >Home</Button>
    </div>
  );
};

export default Error;