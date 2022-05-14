import { useEffect, useState } from 'react';
import { Header } from './components/Header/styled';
import SearchForm from './components/SearchForm';

const App = () => {
  const [start, setStart] = useState([]);
  const [destination, setDestination] = useState([]);

  useEffect(() => console.log(start), [start]);
  useEffect(() => console.log(destination), [destination]);

  return (
    <Header>
      <h1>Route assistant</h1>
      <SearchForm
        label="From:"
        placeholder="Start point"
        setResult={setStart}
      />
      <SearchForm
        label="To:"
        placeholder="Finish point"
        setResult={setDestination}
      />
    </Header >
  );
}

export default App;
