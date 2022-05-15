import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header, Main, Wrapper } from './components/Layout/styled';
import Headline from './components/Headline';
import Home from './views/Home';
import Navigation from './components/Navigation';
import RouteMap from './views/RouteMap';
import { Location } from './interfaces';

const App = () => {
  const [origin, setOrigin] = useState<Location | undefined>(undefined);
  const [destination, setDestination] = useState<Location | undefined>(undefined);

  useEffect(() => console.log(origin), [origin]);
  useEffect(() => console.log(destination), [destination]);

  return (
    <Wrapper>
      <BrowserRouter>
        <Header>
          <Headline title="Route assistant" />
        </Header>
        <Main>
          <Routes>
            <Route index element={
              <Home
                origin={origin}
                destination={destination}
                setOrigin={setOrigin}
                setDestination={setDestination}
              />
            } />
            <Route path="routeMap" element={
              <RouteMap
                origin={origin?.position}
                destination={destination?.position}
              />
            } />
          </Routes>
        </Main>
        <Footer>
          <Navigation />
        </Footer>
      </BrowserRouter>
    </Wrapper >
  );
}

export default App;
