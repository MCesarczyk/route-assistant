import { useState } from 'react';
import { getGeocode } from './utils/getGeocode';
import { Header } from './components/Header/styled';
import { Space } from './components/Space/styled';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  const [query, setQuery] = useState('');

  const searchGeocode = () => {
    query && getGeocode(encodeURIComponent(query));
  };

  return (
    <Header>
      <h1>Route assistant</h1>
      <Space align="center">
        <Input
          value={query}
          setValue={setQuery}
          placeholder="destination"
        />
        <Button
          title={"search"}
          onClick={searchGeocode}
        />
      </Space>
    </Header>
  );
}

export default App;
