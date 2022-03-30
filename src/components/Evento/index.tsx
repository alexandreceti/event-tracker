import React from 'react';
import { IEvento } from '../../interfaces/IEvento'
import useRemoveEvento from '../../state/hooks/useRemoveEvento';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

const Evento: React.FC<{ evento: IEvento }> = ({ evento }) => {

  const removeEvento = useRemoveEvento()

  const excluirEvento = () => {
    removeEvento(evento);
  }

  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (<div className={estilos.join(' ')}>

    <EventoCheckbox evento={evento} />
    <div className="cards-info">
      <h4 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h4>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={excluirEvento}></i>
  </div>)
}

export default Evento