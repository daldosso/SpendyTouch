Ext.define('SpendyTouch.view.Expenses', {
    extend: 'Ext.NavigationView',
    xtype: 'expenses',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        title: 'Expenses',
        iconCls: 'bookmarks',
        layout: {
            type: 'card'
        },
        items: [{
                xtype: 'list',
                title: 'Expenses',
                id: 'expensesList',
                flex: 1,
                store: 'Expenses',
                itemTpl: [
                    '<table style=""><tr><td style="text-align: right; padding-right: 10px">',
                    'Date: </td><td>{dataSpesaFormatted}</td></tr><tr><td style="text-align: right; padding-right: 10px">',
                    'Amount: </td><td>{importo}</td></tr></table>'
                ]
            }]
    }
});