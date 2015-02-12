Ext.define('SpendyTouch.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [{
                xclass: 'SpendyTouch.view.Expenses'
            }, {
                title: 'Search',
                iconCls: 'search',
                items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Search'
                    }
                ]
            }, {
                title: 'Categories',
                iconCls: 'compose',
                items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Categories'
                    }
                ]
            }, {
                title: 'Stats',
                iconCls: 'info',
                items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Stats'
                    }
                ]
            }, {
                title: 'Logout',
                iconCls: 'action',
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Stats'
                }
                ]
            }
        ]
    }
});
