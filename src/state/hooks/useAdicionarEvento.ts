import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { ObterId } from "../../util/Util";
import { listaDeEventosState } from "../atom";

const useAdicionarEvento = () => {
  const novaListaEvento = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    evento.id = ObterId();
    const hoje = new Date();
    if (evento.inicio < hoje || evento.fim < hoje) {
      throw new Error("Eventos não pode ter agendados para datas anteriores");
    }
    novaListaEvento((listaAntiga) => [...listaAntiga, evento]);
  };
};

export default useAdicionarEvento;
