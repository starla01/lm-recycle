import React, { Component } from 'react';
import $ from 'jQuery';

export default class Certificaciones extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="certificaciones" className="certificaciones">
					<div className="banner">
						<img className="image" src="images/bannPrices.jpg" />
						<div className="title">
							<p className="up" >Permisos</p>
						</div>
					</div>
					<div className="certs">
						<div className="estatal left f">
							<p className="titleH">Permiso estatal</p>
							<p className="generalText">Contamos con permiso Estatal.
														Número de registro ambiental 0000<br />
														No Autorización 0000 <br />
														</p>
						</div>
						<div className="CDMX right f">
							<p className="titleH">Permiso CDMX</p>
							<p className="generalText">Contamos con el permiso de la Ciudad de México
							Numero de registro ambiental GDF-SEDEMA-0000000000
							SECRETARÍA DE ECOLOGÍA Y GESTIÓN AMBIENTAL</p>
						</div>
					</div>
					

			</div>
		)
	}
}
