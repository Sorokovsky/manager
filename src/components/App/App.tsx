import React from 'react';
import Container from '../Container/Container';
import MyForm from '../MyForm/MyForm';
import ProductsList from '../Products/ProductsList';
import cl from './App.module.scss';
import { observer } from 'mobx-react-lite';
const App:React.FC = observer(():JSX.Element => {
  return(
    <div className={[cl.app].join(" ")}>
      <Container>
        <MyForm />
        <hr />
        <ProductsList />
      </Container>
    </div>
  )
});
export default App;
