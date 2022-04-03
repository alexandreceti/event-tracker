import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: "eventoFiltradoState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosEventos = get(listaDeEventosState);

    const eventos = todosEventos.filter((item) => {
      if (!filtro.data) {
        return true;
      }
      const ehIgual =
        item.inicio.toISOString().slice(0, 10) ===
        filtro.data?.toISOString().slice(0, 10);
      return ehIgual;
    });
    return eventos;
  },
});

export const AsyncEventos = selector({
  key: "asyncEventos",
  get: async () => {
    const response = await fetch("./db.json");
    // console.log(await response.json());
    const temp = await response.json();
    console.log(temp?.eventos);
    const jsonEventos: IEvento[] = temp?.eventos;
    // const jsonEventos: IEvento[] = await response.json();
    const eventos = jsonEventos.map((evento) => {
      const item = {
        ...evento,
        inicio: new Date(evento.inicio),
        fim: new Date(evento.fim),
      };
      return item;
    });

    return eventos;
  },
});
