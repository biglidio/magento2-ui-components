define([
    'uiComponent'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        defaults: {
            template: "Biglidio_FreeShippingPromo/free-shipping-banner"
        },
        initialize: function() {
            this._super();

            console.log(this.message);
        }
    });
})