Ext.define('SpendyTouch.model.Expenses', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'idSpesa', type: 'int' },
            { name: 'dataSpesa', type: 'date' },
            { name: 'importo', type: 'auto' },
            { name: 'categoria', type: 'auto' },
            { name: 'note', type: 'auto' },
            { name: 'dataSpesaFormatted', type: 'auto' }

        ]
    }
});
