import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import Container from '../Container/Container';
import MyForm from '../MyForm/MyForm';
import cl from './App.module.scss';
const App:FC = ():JSX.Element => {
  return(
    <div className={[cl.app].join(" ")}>
      <Container>
        <MyForm />
      </Container>
    </div>
  )
};
export default App;
