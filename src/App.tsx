import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Footer, Header, Main, Wrapper } from './components/Layout/styled';
import Headline from './components/Headline';
import Home from './views/Home';
import Navigation from './components/Navigation';
import RouteMap from './views/RouteMap';
import { IRouteData, Location } from './common/interfaces';
import { pages } from './common/pages';
import Calculation from './views/Calculation';
import Summary from './views/Summary';
import { exampleDestination, exampleOrigin } from './assets/fixtures';

const App = () => {
  const [page, setPage] = useState(1);
  const [origin, setOrigin] = useState<Location | undefined>(exampleOrigin);
  const [destination, setDestination] = useState<Location | undefined>(exampleDestination);
  const [routeData, setRouteData] = useState<IRouteData | undefined>(undefined);
  const [fuelPrice, setFuelPrice] = useState<string>('6.50');
  const [currency, setCurrency] = useState('PLN');
  const [currencyRate, setCurrencyRate] = useState<number>(4.8);
  const navigate = useNavigate();

  useEffect(() => navigate(pages[page - 1]), [page, navigate]);

  useEffect(() => {
    console.log(routeData);
  }, [routeData]);

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
              setRouteData={setRouteData}
            />
          } />
          <Route path="calculation" element={
            <Calculation
              time={routeData?.summary.totalTime}
              distance={routeData?.summary.totalDistance}
              fuelPrice={fuelPrice}
              setFuelPrice={setFuelPrice}
              currency={currency}
              setCurrency={setCurrency}
              currencyRate={currencyRate}
              setCurrencyRate={setCurrencyRate}
            />
          } />
          <Route path="summary" element={
            <Summary
              origin={origin?.title}
              destination={destination?.title}
              routeData={routeData}
              fuelPrice={fuelPrice}
              currency={currency}
              currencyRate={currencyRate}
            />
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
