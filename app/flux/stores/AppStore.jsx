import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import System from '../constants/System.jsx';
import {
	EventEmitter
}
from 'events';
import assign from 'object-assign';
import $ from 'jquery';
import _ from 'underscore'

let CHANGE_EVENT = 'change';
let date = new Date();
/* ---------------------------
 * CONSTANTS
 *-------------------------- */
const path = "";

/* ---------------------------
 * STORES
 *-------------------------- */

$.ajaxSetup({
	crossDomain: true,
	xhrFields: {
		withCredentials: true
	},
	statusCode: {
		404(msg) {
			console.error(msg.status, msg.statusText, msg.responseJSON.message);
		},
		200(msg) {
			console.info('Success request to Service');
		}
	}
});

// _InitStore
let _InitStore = {
	data: {},
	getData() {
		AppStore.emitChange();
	}
};

/* ---------------------------
 * AppStore
 *-------------------------- */

let AppStore = assign({}, EventEmitter.prototype, {
	/*============= DEFAULT =================*/
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param {function} callback
	 */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
	/*============= DEFAULT =================*/
});

AppStore = assign({}, AppStore, {
	getCart: function() {
		return _InitStore.data;
	}
});

AppDispatcher.register((action) => {
	switch (action.actionType) {
		case System.GET_ALL:
			_InitStore.getAll(action);
			break;
		default:
			// no op
	}
});

module.exports = AppStore;
