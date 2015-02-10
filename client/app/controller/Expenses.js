Ext.define('SendyTouch.controller.Expenses', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            expensesContainer: 'expenses'
        },
        control: {
            expensesContainer: {
                show: function() {
                    alert('show');
                }
            }
        }
    }
});
