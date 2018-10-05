import React, { Component } from 'react';
import $ from 'jQuery';

export default class Programa extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="programa" className="programa">
				<div className="container">
                   <div className="titleH">Programa del proceso de reciclaje</div>
				   <div className="titleH">&nbsp;</div>
				</div>
				<div className="image">
					<img src="images/programaREciclaje.png" />
				</div>
				
			</div>
		)
	}
}
