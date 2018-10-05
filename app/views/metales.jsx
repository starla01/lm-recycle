import React, { Component } from 'react';
import $ from 'jQuery';

export default class Metales extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="metales" className="metales">
                      <div className="banner">
						<img className="image" src="images/bannPrices.jpg" />
						<div className="title">
							<p className="up" >Metales</p>
							<p className="text">Tenemos un listado de servicios que ofrecemos con distintos componentes electrónicos, de manera que podemos hacerte saber que somos la mejor opcion para poder tratar tos componentes electrónicos</p>
						</div>
					</div>
					<div className="listado-servicios">
						<p className="titleH">Los metales de una computadora</p>
						<div className="service">
							<p className="smallText"><b>Plomo:</b> en soldaduras, Monitores CRT, los tubos de rayos catódicos y Baterías lead-acida.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Bromo:</b> en cubiertas policromadas retardantes de flamas para cubiertas, cables y tableros de circuitos.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Cadmio:</b> en tableros de circuitos y semiconductores, baterías recargables de níquel-cadmio.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Selenio:</b> en los tableros de circuitos como rectificador de suministro de energía.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Estaño:</b> soldaduras.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Mercurio:</b> en interruptores y cubiertas, tubos fluorescentes.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Azufre:</b> Baterías Lead-acida.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Arsénico:</b> en tubos de rayo catódico más antiguos.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Antimonio:</b> como tritóxido retardantes de flamabilidad.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Cromo:</b> en el acero como anticorrosivo.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Cobalto:</b> en el acero para estructura y magnetividad.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Cobre:</b> cables de cobre, en circuitos impresos.</p>
						</div>


						<div className="service">
							<p className="smallText"><b>Aluminio:</b> En las carcasas y como disipadores de calor.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Hierro:</b> acero, carcasas.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Silicio:</b> en cristales, transistores, tableros de circuitos impresos</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Níquel:</b> en baterías recargables de níquel-cadmio</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Litio:</b> Baterías de litio</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Zinc:</b> en galvanoplastia de piezas de acero</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Oro:</b> recubriendo conectores.</p>
						</div>
						<div className="service">
							<p className="smallText"><b>Carbono:</b> Acero, plásticos, resistores. En casi todo el equipo electrónico.</p>
						</div>

						
					</div>
			</div>
		)
	}
}
