Ext.define("SendyTouch.store.Expenses", {
    extend: 'Ext.data.Store',
    alias: 'store.Athletes',
    config: {
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'http://www.adaldosso.com/quantospendi/srv/spese-dettagli-demo.php',
            reader: {
                type: 'json'
            }
        },
        model: 'SendyTouch.model.Expenses'
    }
});
