export interface SolidFill {
  type: 'solid';
  color: string;
}

export interface GradientFill {
  type: 'linear' | 'radial';
  angle?: number;

  stops: {
    offset: number;
    color: string;
  }[];
}

export type Fill = SolidFill | GradientFill;