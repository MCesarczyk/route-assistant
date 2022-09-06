export interface Position {
  lat: number;
  lng: number;
};

export interface Location {
  position: Position;
  title: string;
};

interface IStep {
  direction: string;
  distance: number;
  exit: undefined;
  index: number;
  mode: string;
  modifier: undefined;
  road: string;
  text: string;
  time: number;
  type: string;
};

export interface IRouteData {
  name: string;
  summary: {
    totalDistance: number;
    totalTime: number;
  };
  instructions: IStep[];
};

export interface RouteProps {
  origin: Position | undefined;
  destination: Position | undefined;
  setRouteData: (summary: IRouteData) => void;
};
