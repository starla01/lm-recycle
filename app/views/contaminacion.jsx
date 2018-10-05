import React, { Component } from 'react';
import $ from 'jQuery';

export default class Contaminacion extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="contaminacion" className="contaminacion">
                     <div className="banner">
						<img className="image" src="images/bannPrices.jpg" />
						<div className="title">
							<p className="up" >Contaminación Ambiental</p>

						</div>
					</div>
					<div className="texto">
					<p className="titleH">Los residuos contienen una gran cantidad de elementos tóxicos que representan grandes riesgos al medio ambiente y a la salud pública.</p>
					<p className="generalText">&nbsp;</p>
					<p className="generalText"><b>Grupos de elementos tóxicos dentro de los Residuos:</b></p>
					<p className="generalText">&nbsp;</p>
					<ul>
						<li>Retardadores de Flama: Éteres Bifenilos Poli clorados y Éteres Bifenilos Policromados</li>
						<li>Metales Pesados: Plomo, Cadmio, Arsénico, Mercurio, Cromo y Selenio</li>
					</ul>
					<p className="generalText">&nbsp;</p>
					<p className="generalText">Empresa dedicada al reciclaje electrónico y eléctrico; ofreciendo un servicio integral para la industria, mediante un análisis riguroso de recuperación de materias primas del desecho industrial.
												El desperdicio electrónico y eléctrico incorrectamente desechado es altamente nocivo para la salud y el Medio ambiente.
												Por su Toxicidad NO puede ser eliminada como basura ya que contiene Plomo, Mercurio, Litio, Cadmio
												Tenemos una solución para los desechos u obsoletos Electrónicos y Eléctricos de la Industria cuidando el Medio Ambiente.</p>
					</div>

			</div>
		)
	}
}
