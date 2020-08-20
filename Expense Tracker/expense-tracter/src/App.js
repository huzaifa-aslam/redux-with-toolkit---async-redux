import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/components.css';
import {Container,Col,Row} from 'react-bootstrap'
import cx from 'classnames'

import {Header,CurrentBalance,ExpenseIncome,Transactiion,AddTransaction} from './components'
import {TrasactionProvider} from './globalContext/Context'

function App() {
  return (
    <TrasactionProvider >
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col md={4} className={cx('bgGainsboro','pa3')}>
      <Header/>
      {/* <CurrentBalance/> */}
      <ExpenseIncome/>
      <Transactiion/>
      <AddTransaction/>
      </Col>
      <Col md={4}></Col>

      </Row>
      </Container>
    </TrasactionProvider>
  );
}

export default App;
