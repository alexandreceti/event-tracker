import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { AsyncEventos } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: AsyncEventos,
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: "filtroDeEventos",
  default: {},
});
