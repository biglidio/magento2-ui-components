define([
    'uiComponent'
], function(
    Component
){
    'use strict';

    return Component.extend({
        defaults: {
            //Example of dynamic properties
            '${ $.name }ShippingAddressProvider': '${ $.name }AddressProvider',
            tracks: {
                countryId: true
            },
            listens: {
                '${ $.shippingAddressProvider }.country_id': 'countryId',
                '${ $.shippingAddressProvider }.region_id': 'handleRegionChange'
            }
        },
        initialize: function() {
            this._super();
            console.log(this.name + ' is initialized.');
        },
        showMessage: function() {
            return this.countryId === 'US';
        },
        handleRegionChange: function(newRegionId) {
            // console.log('New Region ID ' + newRegionId);
        }
    });
});