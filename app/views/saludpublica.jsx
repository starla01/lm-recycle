import React, { Component } from 'react';
import $ from 'jQuery';

export default class SaludPublica extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="saludPublica" className="saludPublica">
                     <div className="banner">
						<img className="image" src="images/bannPrices.jpg" />
						<div className="title">
							<p className="up" >Salud publica</p>

						</div>
					</div>
					<div className="texto">
						<p className="generalText">&nbsp;</p>
						<p className="generalText"><b>Deficiencia en la coordinación Motriz</b></p>
						<p className="generalText"><b>Deficiencia pulmonar</b></p>
						<p className="generalText"><b>Enfermedades renales</b></p>
						<p className="generalText"><b>Daño fetal / Perdida del embarazo</b></p>
						<p className="generalText"><b>Daño al sistema nervioso</b></p>
						<p className="generalText"><b>Selenosis</b></p>
						<p className="generalText"><b>Cáncer</b></p>
						<p className="generalText"><b>Muerte</b></p>
					</div>
					<div className="listado-servicios">
						<div className="service">
							<p className="smallText"><b>Pb, Plomo:</b>Puede causar daño cerebral, al sistema nervioso, al sistema circulatorio, al sistema renal y al sistema reproductivo.</p>
						</div>

						<div className="service">
							<p className="smallText"><b>Ni, Níquel:</b>Causa deficiencias renales en humanos, animales. También causa defectos de nacimiento</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Hg, Mercurio:</b> Puede dañar el sistema nervioso central</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Be, Berilio:</b> Causa daños pulmonares</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Cd, Cadmio:</b> Afecta el sistema renal y óseo.</p>
						</div>

					</div>
			</div>
		)
	}
}
