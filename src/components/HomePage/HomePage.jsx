import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import './HomePage.css';
import ConstructionBanner from '../ConstructionBanner/ConstructionBanner';

export default function HomePage() {
  if (process.env.NODE_ENV === 'production') {
    return <ConstructionBanner />;
  }
  return (
    <>
      <Container fluid className="orange-section">
        <h1>
          Be the voice of the change
          <br />
          you want to see around you.
        </h1>
        <div className="centered-paragraph">
          Find how your elected officals have voted in relation with climate
          change and
          {' '}
          <u>make your voice heard.</u>
        </div>
      </Container>
      <Container fluid className="main call">
        <Container className="inside">
          <h1 className="paragraph-headings">
            Because for more and more
            {' '}
            <br />
            Australians climate change is
            {' '}
            <br />
            no longer a mere question of
            <br />
            morality.
          </h1>

          <p>
            It is the very real and physical challenge of bushfires, floods and
            droughts causing untold damage to homes, livelihoods and lives.
          </p>
          <p>
            It is the country - and the planet - that we will leave to those who
            come after us.
          </p>
        </Container>
      </Container>
      <div className="full-width-image">
        <img
          src={`${process.env.PUBLIC_URL}/img/bushfire.jpg`}
          alt="bushfire"
        />
        <div className="centered">
          {' '}
          <h1 className="paragraph-headings">
            {' '}
            It is still our greatest challenge.
            {' '}
          </h1>
        </div>
      </div>
      <Container fluid className="main call">
        <p>
          In 2007, Australian Prime Minister Kevin Rudd called climate change
          &apos;the great moral challenge of our generation&apos;.
        </p>
      </Container>
      <Container fluid className="main call">
        <div id="kevinquote">
          <div className="yearquote">
            <p>2007 -------</p>

            <br />
            <p id="kevruddName">Kevin Rudd</p>
          </div>

          <div className="kevimage">
            <img
              src={`${process.env.PUBLIC_URL}/img/kevin_rudd.png`}
              alt="Kevin Rudd"
            />
          </div>
          <div id="speechBubble">
            <p className="bubble speech">
              &apos;the great moral challenge&apos;
            </p>
            <div>
              <p className="kevinquote1">#SocialChallenge</p>
              <p className="kevinquote2">#EconomicChallenge</p>
            </div>
          </div>
        </div>
      </Container>
      <Container fluid className="main call">
        <div>
          <p>
            He would also label it an environmental challenge, an economic
            challenge and a social challenge.
          </p>
        </div>
      </Container>
      <Container fluid className="main call">
        <div>
          But he led with morality:
          {' '}
          <br />
          <h1 className="paragraph-headings">
            this was an issue of undoubted
            {' '}
            <br />
            <span id="quoteunderline">ethical significance.</span>
          </h1>
        </div>

        <div>
          <p>
            An issue that was the duty of one generation to address for the
            survival of those to come.An issue that should be unquestionably
            beyond politics.
          </p>
        </div>

        <div>
          <p>
            The story of Australia&apos;s response to climate change in the
            years since Mr. Rudd declared it a moral challenge is a story of
            missed opportunities.
          </p>
        </div>
      </Container>
      <Container fluid className="main call">
        <div className="full-width-image">
          <img
            src={`${process.env.PUBLIC_URL}/img/scottmorrison.jpg`}
            alt="morrison"
          />
        </div>

        <p>
          <br />
          <br />
          <br />
          It&apos;s a story of false starts, broken promises and
          {' '}
          <br />
          bad faith arguments.
          <br />
          <br />
          <br />
          A story of big ideas being comprised, diminished
          <br />
          and finally disappearing altogether.
          <br />
          <br />
          <br />
        </p>

        <div className="full-width-image">
          <img
            src={`${process.env.PUBLIC_URL}/img/protests.jpg`}
            alt="protests"
          />
        </div>
      </Container>
      <Container fluid className="however">
        <Row>
          <Col className="nopadding-left" xs={6} md={6}>
            HOWEVER
          </Col>
          <Col className="nopadding-right" xs={6} md={6}>
            <div className="h-text">HOWEVER</div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="backgroundforcall call">
        <Container>
          <p>
            This story
            {' '}
            <u>should not</u>
            {' '}
            end with them.
          </p>
          <p>
            {' '}
            <u>We</u>
            {' '}
            believe in accountability, transparency and the
            <br />
            right of all people to participate in the
            <br />
            decisions that will shape our future.
          </p>
          <p>
            On this page you will find significant legislation
            <br />
            and motions, debated in the Australian House of
            <br />
            Representatives and Senate and relating to climate
            <br />
            {' '}
            change, carbon emissions and environmental
            <br />
            {' '}
            protections.
          </p>
          <p>
            <u>You</u>
            {' '}
            will find how your elected officials voted and
            <br />
            <u>their</u>
            {' '}
            track record of voting on these issues.
          </p>
          <p>
            <u>You</u>
            {' '}
            will find ways that you can make&nbsp;
            <u>your voice</u>
            <br />
            heard and ways to make a difference.
          </p>
        </Container>
      </Container>
    </>
  );
}
