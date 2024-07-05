import { Atleta } from "./Atleta";

export interface Corredor extends Atleta {
  trotar(): void;
  correr(): void;
}
