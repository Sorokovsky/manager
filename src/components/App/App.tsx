import React, { FC } from 'react';
import Container from '../Container/Container';
import cl from './App.module.scss';
const App:FC = ():JSX.Element => {
  return(
    <div className={[cl.app].join(" ")}>
      <Container>
        
      </Container>
    </div>
  )
}
export default App;
