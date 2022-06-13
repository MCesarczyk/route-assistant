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
  setDistance: (distance: number) => void
  setTime: (time: number) => void
}