import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import $ from 'jQuery';

export default class Ubicacion extends Component {
	constructor(props) {
		super(props);
	}
    onMapCreated(map) {
        map.setOptions({
          disableDefaultUI: false
        });
    }
     
    onDragEnd(e) {
        console.log('onDragEnd', e);
    }
     
    onCloseClick() {
        console.log('onCloseClick');
    }
     
    onClick(e) {
        console.log('onClick', e);
    }
	render() {

        const params = {v: '3.exp', key: 'AIzaSyCb9ojGNVJI8yqL6YScfr708QsmKrT_qCQ'};
        const coords = {
            lat: '19.488304',
            lng: '-99.199486'
        }
		return (

			<div id="mapa" className="mapaContainer">
                    <div className="mapa">
                    <div 
                        style={
                           {"padding":"30px"}
                        }
                    >
                        <p><b>Dirección</b></p>
                        <p>Lacandones Sur # 22 
                        Col. Tezozomoc
                        Del. Azcapotzalco 
                        Ciudad de México, C.P. 02459<br />
                        Teléfonos. 87174232 ó 87174233</p>
                    </div>
                    <Gmaps
                        width={'100%'}
                        height={'600px'}
                        lat={coords.lat}
                        lng={coords.lng}
                        zoom={19}
                        loadingMessage={'Be happy'}
                        params={params}
                        onMapCreated={this.onMapCreated}>
                        <Marker
                        lat={coords.lat}
                        lng={coords.lng}
                        draggable={false}
                        onDragEnd={this.onDragEnd} />
                        <InfoWindow
                        lat={'19.488414'}
                        lng={'-99.199483'}
                        content={`Lacandones Sur # 22 <br />
                        Col. Tezozomoc<br />
                        Del. Azcapotzalco <br />
                        Ciudad de México <br />
                        C.P. 02459<br />
                        Tel. 87174232 | 87174233`}
                        onCloseClick={this.onCloseClick} />
                    </Gmaps>
					</div>
			</div>
		)
	}
}
