import React from 'react';
import Container from '../Container/Container';
import MyForm from '../MyForm/MyForm';
import ProductsList from '../Products/ProductsList';
import products from '../../store/productsStore';
import cl from './App.module.scss';
import { observer } from 'mobx-react-lite';
const App:React.FC = observer(():JSX.Element => {
  return(
    <div className={[cl.app].join(" ")}>
      <Container>
        <MyForm />
        <hr />
        <ProductsList products={products.products} />
      </Container>
    </div>
  )
});
export default App;
