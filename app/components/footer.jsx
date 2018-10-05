import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="footer" className={'footer ' + this.props.props.size}>
				<div className="columns">

					<div className="col" id="col1">
						<p className="title">Compañia</p>
						<ul className="list">
							<li className="option">
								<Link to="/quienes-somos">¿Quienes somos?</Link>
							</li>
							<li className="option">
								<Link to="/objetivo">Objetivo</Link>
							</li>
						</ul>
					</div>
					<div className="col" id="col2">
						<p className="title">Servicios</p>
						<ul className="list">
							<li className="option">
								<Link to="/servicios">Lista de servicios</Link>
							</li>

						</ul>
					</div>

					<div className="col" id="col3">
						<p className="title">Nosotros</p>
						<ul className="list">
							<li className="option">
								<Link to="/permisos">Permisos </Link>
							</li>
							<li className="option">
								<Link to="/ubicacion">Ubicación </Link>
							</li>
						</ul>
					</div>

					<div className="col" id="col4">
						<p className="title">Redes sociales</p>
						<ul className="list">
							<li className="option">
								<a href="https://www.facebook.com/lmrecycle" target="_blank">Facebook </a>
							</li>
							<li className="option">
								<a href="#" target="_blank">Instagram </a>
							</li>
						</ul>
					</div>
				</div>
				<div className="logofooter">
					<img src="" className="nail"  src="/images/una.png" />
				</div>
				<div className="copy">
					<span className="text">Marca Registrada ® 2017 LM Recycle S.A. de C.V. </span>
				</div>
			</div>
		)
	}
}
