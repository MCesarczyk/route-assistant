import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Footer, Header, Main, Wrapper } from './components/Layout/styled';
import Headline from './components/Headline';
import Home from './views/Home';
import Navigation from './components/Navigation';
import RouteMap from './views/RouteMap';
import { Location } from './common/interfaces';
import { pages } from './common/pages';
import Calculation from './views/Calculation';

const App = () => {
  const [page, setPage] = useState(1);
  const [origin, setOrigin] = useState<Location | undefined>(undefined);
  const [destination, setDestination] = useState<Location | undefined>(undefined);
  const [distance, setDistance] = useState<number | undefined>(undefined);
  const [time, setTime] = useState<number | undefined>(undefined);
  const [fuelPrice, setFuelPrice] = useState<string>('');
  const [currency, setCurrency] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => navigate(pages[page - 1]), [page, navigate]);

  return (
    <Wrapper>
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
              setDistance={setDistance}
              setTime={setTime}
            />
          } />
          <Route path="calculation" element={
            <Calculation
              time={time}
              distance={distance}
              fuelPrice={fuelPrice}
              setFuelPrice={setFuelPrice}
              currency={currency}
              setCurrency={setCurrency}
            />
          } />
          <Route path="summary" element={
            <h2>summary</h2>
          } />
        </Routes>
      </Main>
      <Footer>
        <Navigation
          page={page}
          setPage={setPage}
          total={pages.length}
        />
      </Footer>
    </Wrapper >
  );
}

export default App;
