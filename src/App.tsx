import { useEffect, useState } from 'react';
import { getGeocode } from './utils/getGeocode';
import { Header } from './components/Header/styled';
import { Space } from './components/Space/styled';
import Input from './components/Input';
import Button from './components/Button';
import Dropdown from './components/Dropdown';

interface address {
  title: string
}

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [visible, setVisible] = useState(false);
  const [address, setAddress] = useState('');

  const handleSearch = async (e: any) => {
    e.preventDefault();

    if (query) {
      const data = await getGeocode(encodeURIComponent(query));
      setResults(data);
      setVisible(true);
    }
  };

  const onAddressChange = (value: string) => {
    const newAddress: address = results.filter(({ id }) => id === value)[0];
    setQuery(newAddress.title);
  };

  useEffect(() => {
    console.log(address);
  }, [address]);

  return (
    <Header>
      <h1>Route assistant</h1>
      <Space>
        <form onSubmit={handleSearch}>
          <Input
            value={query}
            setValue={setQuery}
            placeholder="destination"
          />
          <Dropdown
            visible={visible}
            setVisible={setVisible}
            items={results}
            onItemChange={(value: string) => onAddressChange(value)}
          />
        </form>
        <Button
          title={"search"}
          onClick={handleSearch}
        />
      </Space>
      lorem ipsum
    </Header >
  );
}

export default App;
