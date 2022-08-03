import React from 'react';
import Container from '../Container/Container';
import MyForm from '../MyForm/MyForm';
import cl from './App.module.scss';
const App:React.FC = ():JSX.Element => {
  return(
    <div className={[cl.app].join(" ")}>
      <Container>
        <MyForm />
      </Container>
    </div>
  )
};
export default App;
