import React, { ReactElement } from "react";
import logo from '../../logoOliva.png'

export default function index(): ReactElement {
  return (
    <footer>
        <div>
        <span>Esta página está auspicida por: </span> 
      <img
        width={100}
        height={66}
        src="https://media0.giphy.com/media/3o6gbbuLW76jkt8vIc/200w.webp?cid=ecf05e47snkg0e8x2jabst7hgo25y1jkk4bkf7o1v0e1c0es&rid=200w.webp&ct=g"
        alt="giphy logo"
      />
      </div>
      <div>
      <sub>Y desarrollada de forma independiente por: </sub>
      <img
        width={150}
        height={66}
        src={logo}
        alt="zitrojjdev logo"
      />
      </div>
    </footer>
  );
}
