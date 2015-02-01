Ext.define('SendyTouch.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Expenses',
                iconCls: 'bookmarks',
                styleHtmlContent: true,
                scrollable: true,
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Spendy'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
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
