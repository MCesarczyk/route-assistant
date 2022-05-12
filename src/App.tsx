import { useEffect, useState } from 'react';
import { getGeocode } from './utils/getGeocode';
import { Header } from './components/Header/styled';
import Input from './components/Input';

const App = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    query && getGeocode(encodeURIComponent(query));
  }, [query]);

  return (
    <Header>
      <h1>Route assistant</h1>
      <Input
        value={query}
        setValue={setQuery}
        placeholder="destination"
      />
    </Header>
  );
}

export default App;
