import React from 'react'
import ProductListPage from './components/productListPage/productListPage'
import './App.css';

function App() {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  // -------------------------------------------------

  return (
    <div style={{ textAlign: 'center' }} className='App'>
      <ProductListPage />
      {/* Check to see if express server is running correctly */}
    </div>
  );
};

export default App;
