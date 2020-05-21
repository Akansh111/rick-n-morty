import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { LeftPane } from './components/LeftPane';
import { RightPane } from './components/RightPane';

import './App.css';

export const App = () => {

    return (
        <div className="App" >
            <div className="app-header">
                Rick N Morty App
            </div>
            <Container fluid>
                <Row>
                    <Col md={3} xs={12}>
                        <LeftPane />
                    </Col>
                    <Col md={9} xs={12}>
                        <RightPane />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
