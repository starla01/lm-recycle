import React, { Component } from 'react';
import $ from 'jQuery';

export default class Objetivo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="objetivo" className="objetivo">
                     <div className="banner">
						<img className="image" src="images/bannPrices.jpg" />
						<div className="title">
							<p className="up" >Objetivo</p>
						</div>
					</div>
					<div className="texto">
						<p className="generalText">
						Brindar un servicio de recolección del desecho electrónico y eléctrico, con el propósito de reciclar todos los componentes y/o materiales del que se componen. 
						<br />
						Enfocados en buscar mercados secundarios, creativos en el cuidado del ambiente, para la recuperación de las materias primas en el proceso del reciclaje, de esta forma, todo el material recibido de nuestros clientes beneficia directamente a diferentes programas de responsabilidad social y ambiental.
						</p>
					</div>

			</div>
		)
	}
}
