import React from 'react';
import Rutas from './routes/Rutas';
import { Provider } from 'react-redux';
import { store } from './app/store';



function App() {
  return (
    <Provider store={store}>
      <Rutas />
    </Provider>
  );
}

export default App;
