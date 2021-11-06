define([
    'ko',
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function(
    ko,
    Component,
    customerData
) {
    'use strict';

    return Component.extend({
        defaults: {
            subtotal: 0.00,
            template: "Biglidio_FreeShippingPromo/free-shipping-banner",
            tracks: {
                subtotal: true
            }
        },
        initialize: function() {
            this._super();
            
            var self = this;
            var cart = customerData.get('cart');

            customerData.getInitCustomerData().done(function() {
                self.subtotal = parseFloat(cart().subtotalAmount);
            });
        },
        formatCurrency: function(value) {
            return '$' + value.toFixed(2);
        }
    });
})