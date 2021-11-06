define([
    'uiComponent'
], function(
    Component
){
    'use strict';

    return Component.extend({
        initialize: function() {
            this._super();
            console.log(this.name + ' is initialized.');
        },
        showMessage: function() {
            return this.subtotal > 100;
        }
    });
});