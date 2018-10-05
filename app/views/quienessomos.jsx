import React, { Component } from 'react';
import $ from 'jQuery';

export default class Quienes extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="quienesomos" className="about">
                    <div className="banner">
						<img className="image" src="images/bannPrices.jpg" />
						<div className="title">
							<p className="up" >¿Quienes somos?</p>

						</div>
					</div>
					<div className="texto">
					<p className="generalText">Empresa dedicada al reciclaje electrónico y eléctrico; ofreciendo un servicio integral para la industria, mediante un análisis riguroso de recuperación de materias primas del desecho industrial.

El desperdicio electrónico y eléctrico incorrectamente desechado es altamente nocivo para la salud y el Medio ambiente.

Por su Toxicidad NO puede ser eliminada como basura ya que contiene Plomo, Mercurio, Litio, Cadmio

Tenemos una solución para los desechos u obsoletos Electrónicos y Eléctricos de la Industria cuidando el Medio Ambiente.</p>
					</div>

			</div>
		)
	}
}
