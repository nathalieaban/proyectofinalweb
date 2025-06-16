import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function SobreMe(props) {

  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>

      <div className="perfil-container">
        <img
          className="perfil-imagen"
          src="../public/logo.jpg"
          alt="Perfil"
        />
        <h2 className="perfil-nombre">Academia Sergio el bailador</h2>
      </div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">CULLAHUADA</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>Descripcion</strong>
            La danza de la Kullawada, o Kullawada, es una danza folclórica boliviana que se originó en la ciudad de La Paz y se caracteriza por representar la actividad de los hilanderos y tejedores que trabajaban en los obrajes textiles. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">TAQUIRARI</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>Descripcion</strong>
          La danza del taquirari es un ritmo musical y baile característico de la región oriental de Bolivia, principalmente de Santa Cruz, Beni y Pando. Se cree que el nombre "taquirari" proviene de la palabra moxeña "takiríkire", que significa "flecha", haciendo referencia a una danza ritual relacionada con la caza y el sustento. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">CUECA CHAPACA</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>Descripcion</strong>
            La rueda chapaca se baila en parejas que forman un círculo cerrado, tomadas de las manos. La danza comienza con una “viborita” donde los bailarines en fila avanzan en forma ondulante que luego se transforma en una rueda que gira en sentido horario y antihorario.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">TINKUS</AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>Descripcion</strong>
            La danza del Tinkus, originaria del norte de Potosí en Bolivia, es una representación de un ritual ancestral que se manifiesta en un enfrentamiento físico entre comunidades. La palabra "Tinku" significa "encuentro" en quechua y "ataque físico" en aymara, reflejando la dualidad de la danza. Los bailarines, vestidos con trajes coloridos y máscaras, simulan los movimientos y la energía del ritual, representando la lucha y la fuerza. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">MORENADA</AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>Descripcion</strong>
            La morenada es una danza folklórica boliviana que representa la tristeza y sufrimiento de los esclavos africanos traídos a las minas de Potosí durante la época colonial. Se caracteriza por sus trajes coloridos, máscaras de morenos con rasgos exagerados, y el uso de matracas que simbolizan las cadenas de los esclavos. La danza es una mezcla de elementos indígenas, españoles y africanos, y se considera una expresión cultural importante en Bolivia
          </AccordionBody>
        </AccordionItem>
      </Accordion>

    </div>
    
    
  )
}

export default SobreMe
