import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="header" className={'header ' + this.props.props.size}  >
				<div className="logotipo" >
						<Link to="/">
							<img src="images/logomaster.png" />
						</Link>
				</div>

				<div className="register">
					<Link to="/ubicacion">
						<div className="button r">
						<span className="icon lm-location"></span>
							<span>Ubicación</span>
						</div>
					</Link>
					<Link to="/objetivo">
						<div className="button r">
						<span className="icon lm-flag"></span>
							<span>Objetivo</span>
						</div>
					</Link>
					<Link to="/quienes-somos">
						<div className="button r">
						<span className="icon lm-sphere"></span>
							<span>¿Quienes somos?</span>
						</div>
					</Link>
					<Link to="/servicios">
						<div className="button r">
						<span className="icon lm-cogs"></span>
							<span>Servicios</span>
						</div>
					</Link>
					<Link to="/">
						<div className="button r">
							<span className="icon lm-home"></span>
							<span>Inicio</span>
						</div>
					</Link>

				</div>

			</div>
		)
	}
}
