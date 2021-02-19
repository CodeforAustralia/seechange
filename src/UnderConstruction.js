import React from "react";

import Container from "react-bootstrap/Container";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function UnderConstruction (){
    return (
      <div>
        <Container fluid className="p1">
          Learn more. Demand better. SeeChange.<br /> Coming soon.
          <div className="p2">
            <p>
              This open-source project is still under construction. If you would like to participate, {" "} 
              <a href="https://codeforaustralia.org/civic-makers/">
                 please follow this link.
              </a>
            </p>
          </div>
        </Container>
      </div>
    );
}


export default UnderConstruction;