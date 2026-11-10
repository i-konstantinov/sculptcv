import { Fill } from "./fill.model";
import { CVElement } from "./element.model";

export interface CVPage {
  id: string;

  width: number;
  height: number;

  background: Fill;

  elements: CVElement[];
}