import React, { Component } from 'react';
import $ from 'jQuery';

export default class Quienes extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="gracias" className="gracias">
                    <div className="banner">
						<img className="image" src="images/bannPrices.jpg" />
						<div className="title">
							<p className="up" >Gracias por tus comentarios!</p>
                            <p className="text" >En breve nos comunicaremos contigo!</p>
						</div>
					</div>
			</div>
		)
	}
}
