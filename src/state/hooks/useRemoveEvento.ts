import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useRemoveEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    setListaDeEventos((listaAntiga) =>
      listaAntiga.filter((event) => event.id !== evento.id)
    );
  };
};

export default useRemoveEvento;
