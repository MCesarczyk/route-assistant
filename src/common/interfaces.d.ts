export interface Position {
  lat: number,
  lng: number
}

export interface Location {
  position: Position,
  title: string
}

export interface RouteProps {
  origin: Position | undefined,
  destination: Position | undefined
}