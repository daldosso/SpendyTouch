Ext.define('SpendyTouch.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
    config: {
        title: 'SpendyTouch [ Login ]',
        html: '',
        items: [{
                xtype: 'image',
                src: 'resources/images/logo.png',
                style: 'width:150px; height:150px; margin:auto'
            }, {
                xtype: 'label',
                html: 'SpendyTouch',
                style: 'text-align: center; margin: 20px; font-size: 30px; font-weight: bold'
            }, {
                xtype: 'label',
                html: 'Login failed. Please enter the correct credentials.',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            }, {
                xtype: 'fieldset',
                title: 'Login',
                items: [{
                        xtype: 'textfield',
                        placeHolder: 'Username',
                        id: 'user',
                        required: true
                    }, {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        id: 'password',
                        required: true
                    }]
            }, {
                xtype: 'button',
                ui: 'action',
                padding: '10px',
                text: 'Login',
                listeners: {
                    tap: function() {
                        var user = Ext.getCmp('user').getValue();
                        var password = Ext.getCmp('password').getValue();

                        Ext.Ajax.request({
                            url: SpendyTouch.urlLogin,
                            method: 'POST',
                            params: {
                                username: user,
                                password: password
                            },
                            success: function(response) {
                                var resp = Ext.decode(response.responseText);
//                                IziFold.session = {
//                                    utecod: resp.utecod
//                                };
                                if (resp.success === true) {
                                    Ext.data.StoreManager.lookup('Spese').load();
                                    Ext.Viewport.removeAll();
                                    Ext.Viewport.add({xtype: 'main'});
                                } else {
                                    Ext.Msg.alert('Errore', 'Utente non trovato');
                                }
                            },
                            failure: function(response) {
                                Ext.Msg.alert('Errore', 'Utente non trovato');
                            }
                        });
                    }
                }
            }]
    }

});



