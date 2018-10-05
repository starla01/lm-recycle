import React, { Component } from 'react';
import $ from 'jQuery';

export default class Servicios extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="servicios" className="servicios">
                    <div className="banner">
						<img className="image" src="images/bannPrices.jpg" />
						<div className="title">
							<p className="up" >Servicios</p>
						</div>
					</div>
					<div className="listado-servicios">
						<p className="titleH">Lista de servicios.</p>
						<div className="service">
							<p className="generalText">Recolección Integral Programada.</p>
						</div>
						<div className="service">
							<p className="generalText">Contenedores <b>In plant.</b></p>
						</div>
						<div className="service">
							<p className="generalText">Registro de Inventarios</p>
						</div>
						<div className="service">
							<p className="generalText">Destrucción, formateo y protección de datos.</p>
						</div>
						<div className="service">
							<p className="generalText">Destrucción de Marca</p>
						</div>
						<div className="service">
							<p className="generalText">Borrado de Información</p>
						</div>
						<div className="service">
							<p className="generalText">Manifiestos de reciclaje</p>
						</div>
						<div className="service">
							<p className="generalText">Certificados de destrucción.</p>
						</div>
						<div className="service">
							<p className="generalText">Certificados de disposición de desechos.</p>
						</div>
						<div className="service">
							<p className="generalText">Proceso 100% ecológico, sin emisiones a la atmósfera</p>
						</div>
						<div className="service">
							<p className="generalText">Programas de reciclaje.</p>
						</div>
						<div className="clear"></div>
						<p className="titleH">Equipo reciclable.</p>
						

						<div className="service">
							<p className="generalText">Computo de escritorio</p>
						</div>
						<div className="service">
							<p className="generalText">Monitor y gabinete</p>
						</div>
						<div className="service">
							<p className="generalText">Laptops y Periféricos</p>
						</div>
						<div className="service">
							<p className="generalText">Cables de todo tipo</p>
						</div>
						<div className="service">
							<p className="generalText">Servidores, Modem, Routeadores y cualquier otro equipo de Red</p>
						</div>
						<div className="service">
							<p className="generalText">Celular</p>
						</div>
						<div className="service">
							<p className="generalText">Aparatos</p>
						</div>
						<div className="service">
							<p className="generalText">Baterías</p>
						</div>
						<div className="service">
							<p className="generalText">Cargadores</p>
						</div>

						<div className="service">
							<p className="generalText">Tarjetas Electrónicas de cualquier componente</p>
						</div>
						<div className="service">
							<p className="generalText">Equipos de Audio y Video</p>
						</div>
						<div className="service">
							<p className="generalText">TV’s, pantallas, proyectores, etc.</p>
						</div>
						<div className="service">
							<p className="generalText">Estéreos, grabadoras, caseteras, etc.</p>
						</div>
						<div className="service">
							<p className="generalText">Diversos equipos eléctricos y electrónicos</p>
						</div>
						<div className="service">
							<p className="generalText">Transformadores</p>
						</div>
						<div className="service">
							<p className="generalText">Interruptores</p>
						</div>

						
					</div>
			</div>
		)
	}
}
