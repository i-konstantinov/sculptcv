import { Geometry } from "./geometry.model";
import { Fill } from "./fill.model";

export type CVElementType =
  | 'rectangle'
  | 'circle'
  | 'line'
  | 'text'
  | 'image';

export interface BaseElement {
  id: string;
  type: CVElementType;

  geometry: Geometry;

  zIndex: number;

  opacity?: number;
  visible?: boolean;
  locked?: boolean;
}


export interface RectangleElement extends BaseElement {
  type: 'rectangle';

  fill?: Fill;

  border?: {
    color: string;
    width: number;
    radius?: number;
  };
}


export interface CircleElement extends BaseElement {
  type: 'circle';

  fill?: Fill;

  border?: {
    color: string;
    width: number;
  };
}


export interface LineElement extends BaseElement {
  type: 'line';

  stroke: string;
  strokeWidth: number;
  dash?: number[];
}


export interface ImageElement extends BaseElement {
  type: 'image';

  src: string;

  fit: 'cover' | 'contain' | 'fill';

  borderRadius?: number;
}


export interface TextElement extends BaseElement {
  type: 'text';

  content: {
    source: string;
    fallback?: string;
  };

  typography: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    color: string;

    lineHeight?: number;
    letterSpacing?: number;

    textAlign?: 'left' | 'center' | 'right';
    verticalAlign?: 'top' | 'middle' | 'bottom';
  };

  textBox: {
    autoFit: boolean;
    overflow: 'visible' | 'hidden' | 'shrink';
    padding: number;
  };
}


export type CVElement =
  | RectangleElement
  | CircleElement
  | LineElement
  | TextElement
  | ImageElement;