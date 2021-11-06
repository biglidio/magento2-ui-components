var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/summary/cart-items': {
                'Biglidio_CheckoutMessages/js/view/summary/cart-items-mixin': true
            }
        }
    },
    map: {
        '*': {
            'Magento_Checkout/template/sidebar': 'Biglidio_CheckoutMessages/template/sidebar'
        }
    }
}