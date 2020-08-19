import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row} from 'react-bootstrap'

import {Header,CurrentBalance,ExpenseIncome,Transactiion,AddTransaction} from './components'
import {TrasactionProvider} from './globalContext/Context'

function App() {
  return (
    <TrasactionProvider>
      <Container>
        <Row>
          <Col md={6}>
      <Header/>
      <CurrentBalance/>
      <ExpenseIncome/>
      <Transactiion/>
      <AddTransaction/>
      </Col>
      </Row>
      </Container>
    </TrasactionProvider>
  );
}

export default App;
