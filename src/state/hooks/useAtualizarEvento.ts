import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useAtualizarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    setListaDeEventos((antLista) => {
      const indice = antLista.findIndex((item) => item.id === evento.id);
      return [
        ...antLista.slice(0, indice),
        evento,
        ...antLista.slice(indice + 1),
      ];
    });
  };
};

export default useAtualizarEvento;
