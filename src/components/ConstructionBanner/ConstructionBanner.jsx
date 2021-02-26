import React from 'react';
import Container from 'react-bootstrap/Container';

function ConstructionBanner() {
  return (
    <Container fluid className="p1">
      Learn more. Demand better. SeeChange.
      <br />
      {' '}
      Coming soon.
      <div className="p2">
        This open-source project is still under construction. If you would
        like to participate,
        {' '}
        <a href="https://codeforaustralia.org/civic-makers/">
          please follow this link.
        </a>
      </div>
    </Container>
  );
}
export default ConstructionBanner;
