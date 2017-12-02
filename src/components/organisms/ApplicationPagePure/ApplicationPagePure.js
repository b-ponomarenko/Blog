import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import AboutCardPure from '../../molecules/AboutCardPure/AboutCardPure';
import Container from '../../atoms/Container/Container';
import { StickyContainer, Sticky } from 'react-sticky';

const ApplicationPagePure = ({ children }) =>
  <Container>
    <StickyContainer>
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            {children}
          </Col>
          <Col xs={12} md={4}>
            <Sticky topOffset={-30} bottomOffset={30}>
              {
                ({ style }) =>
                  <div style={{...style, top: style.top + 30}}>
                    <AboutCardPure/>
                  </div>
              }
            </Sticky>
          </Col>
        </Row>
      </Grid>
    </StickyContainer>
  </Container>


export default ApplicationPagePure