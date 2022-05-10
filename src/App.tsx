import { useEffect } from 'react';
import { getGeocode } from './utils/getGeocode';
import { Header } from './components/Header/styled';

const App = () => {
  useEffect(() => {
    getGeocode(encodeURIComponent("Babiego Lata, Wrocław"));
  }, []);

  return (
    <Header/>
  );
}

export default App;
