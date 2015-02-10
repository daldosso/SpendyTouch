Ext.define("SendyTouch.store.Expenses", {
    extend: 'Ext.data.Store',
    alias: 'store.Expenses',
    requires: [
        'Ext.data.proxy.JsonP'
    ],
    config: {
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url: 'http://www.adaldosso.com/quantospendi/srv/expenses_list_jsonp.php',
            reader: {
                type: 'json'
            }
        },
        model: 'SendyTouch.model.Expenses'
    }
});
