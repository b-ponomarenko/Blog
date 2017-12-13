import React from 'react';
import ApplicationPagePure from '../components/organisms/ApplicationPagePure/ApplicationPagePure';
import ImageBlockPure from '../components/molecules/ImageBlockPure/ImageBlockPure';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Button from '../components/atoms/Button/Button';

export default () =>
  <ApplicationPagePure>
    <ImageBlockPure image='http://demo.shapedtheme.com/kotha-pro-html/assets/images/archi-feature-cat-6.jpg'>
      <h1>Contact Us</h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus eveniet fuga iure laborum libero obcaecati ratione rerum. Consectetur expedita illo neque nostrum numquam officiis quam quod sint totam vero.
      <h3>Send Message</h3>
      <form>
        <Row>
          <Col xs={12} md={6}>
            <input/>
          </Col>
          <Col xs={12} md={6}>
            <input/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <input />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <textarea></textarea>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Button type='secondary'>
              Отправить
            </Button>
          </Col>
        </Row>
      </form>
    </ImageBlockPure>
  </ApplicationPagePure>