import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header, Main, Wrapper } from './components/Layout/styled';
import Headline from './components/Headline';
import Home from './views/Home';

const App = () => {
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);

  useEffect(() => console.log(origin), [origin]);
  useEffect(() => console.log(destination), [destination]);

  return (
    <Wrapper>
      <Header>
        <Headline title="Route assistant" />
      </Header>
      <Main>
        <BrowserRouter>
          <Routes>
            <Route index element={
              <Home
                setOrigin={setOrigin}
                setDestination={setDestination}
              />
            } />
          </Routes>
        </BrowserRouter>
      </Main>
      <Footer />
    </Wrapper >
  );
}

export default App;
