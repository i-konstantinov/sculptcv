export interface Position {
  x: number;
  y: number;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface Geometry {
  position: Position;
  dimensions: Dimensions;
  rotation?: number;
}