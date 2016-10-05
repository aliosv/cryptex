({
    block : 'page',
    title : 'Cryptex - Trade digital currency exchange',
    head : [
        { elem : 'link', attrs : { href : "https://fonts.googleapis.com/css?family=Open+Sans" } },
        { elem : 'css', url : '_index.css' },
        { elem : 'favicon', url : "i/favicon.ico" }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'section',
            mods : { theme : 'intro' },
            mix : { block : 'intro' },
            content : [
                {
                    block : 'header',
                    content : [
                        {
                            block : 'menu'
                        },
                        {
                            block : 'logo'
                        },
                        {
                            block : 'rates',
                            content : [
                                {
                                    block : 'rate',
                                    content : [
                                        { elem : 'value', content : '604.414 USD' },
                                        { elem : 'name', content : '604.414 USD' }
                                    ]
                                },
                                {
                                    block : 'rate',
                                    content : [
                                        { elem : 'value', content : '592.5 USD' },
                                        { elem : 'name', content : 'Low' }
                                    ]
                                },
                                {
                                    block : 'rate',
                                    content : [
                                        { elem : 'value', content : '592.5 USD' },
                                        { elem : 'name', content : 'High' }
                                    ]
                                },
                                {
                                    block : 'rate',
                                    content : [
                                        { elem : 'value', content : '597,447 BTC' },
                                        { elem : 'name', content : 'Volume' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'auth-form'
                        }
                    ]
                },
                {
                    block : 'intro',
                    elem : 'header',
                    content : 'Trade digital currency exchange',
                    tag : 'h1'
                },
                {
                    block : 'intro',
                    elem : 'buttons',
                    content : [
                        {
                            block : 'button',
                            mods : { size : 'm', theme : 'islands', view : 'pseudo' },
                            text : 'View demo'
                        },
                        {
                            block : 'button',
                            mods : { size : 'm', theme : 'islands', view : 'pseudo' },
                            text : 'Sign up'
                        }
                    ]
                },
                {
                    block : 'intro',
                    elem : 'about',
                    content : [
                        {
                            elem : 'item',
                            content : [
                                {
                                    block : 'icon',
                                    mods : { type : 'licence' },
                                    mix : { block : 'intro', elem : 'icon' }
                                },
                                {
                                    elem : 'caption',
                                    content : 'Licensed exchange'
                                },
                                {
                                    elem : 'description',
                                    content : 'Essential licenses and strong relations with banks'
                                }
                            ]
                        },
                        {
                            elem : 'item',
                            content : [
                                {
                                    block : 'icon',
                                    mods : { type : 'commissions' },
                                    mix : { block : 'intro', elem : 'icon' }
                                },
                                {
                                    elem : 'caption',
                                    content : 'Lowest commissions'
                                },
                                {
                                    elem : 'description',
                                    content : 'We offer the lowest commissions on trades, deposits and withdrawals on the market'
                                }
                            ]
                        },
                        {
                            elem : 'item',
                            content : [
                                {
                                    block : 'icon',
                                    mods : { type : 'interface' },
                                    mix : { block : 'intro', elem : 'icon' }
                                },
                                {
                                    elem : 'caption',
                                    content : 'User-friendly interface'
                                },
                                {
                                    elem : 'description',
                                    content : 'Сonvenient orders management and real-time exchange data'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'section',
            mods : { theme : 'rates' },
            content : [
                {
                    block : 'order-table',
                    name : 'Sell orders',
                    total : 'Total: 10925.44 BTC',
                    colNames : ['PRICE', 'BTC', 'USD'],
                    data : [
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014],
                        ['+400.936', 0.07813600, 31.33370014]
                    ]
                },
                {
                    block : 'order-table',
                    name : 'Buy orders',
                    total : 'Total: 5631905.55 USD',
                    colNames : ['PRICE', 'BTC', 'USD'],
                    data : [
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014],
                        ['-400.936', 0.07813600, 31.33370014]
                    ]
                },
                {
                    block : 'order-table',
                    name : 'Trade history',
                    colNames : ['PRICE', 'BTC', 'USD', 'TIME'],
                    data : [
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['+400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56'],
                        ['-400.936', 0.07813600, 31.33370014, '12:45:56']
                    ]
                }
            ]
        },
        {
            block : 'section',
            mods : { theme : 'security' },
            content : [
                {
                    elem : 'image',
                    elemMods : { screen : true }
                },
                {
                    elem : 'info',
                    content : [
                        {
                            elem : 'header',
                            content : [
                                {
                                    block : 'icon',
                                    mods : { type : 'security' }
                                },
                                'Strong security'
                            ]
                        },
                        {
                            elem : 'description',
                            content : 'You may restrict access to your account by using a white list of IP' +
                            ' addresses, Google Authenticator system and SMS authenticator'
                        }
                    ]
                }
            ]
        },
        {
            block : 'section',
            mods : { theme : 'payment' },
            content : [
                {
                    elem : 'info',
                    content : [
                        {
                            elem : 'header',
                            content : [
                                {
                                    block : 'icon',
                                    mods : { type : 'wallet' }
                                },
                                'Quick deposit and withdrawal'
                            ]
                        },
                        {
                            elem : 'description',
                            content : 'We work with different payment systems, credit cards, bank-wires and e-payments.'
                        }
                    ]
                },
                {
                    block : 'logos-grid',
                    content : [
                        {
                            elem : 'row',
                            content : [
                                {
                                    elem : 'item',
                                    content : {
                                        block : 'icon',
                                        mods : { payment : 'visa' }
                                    }
                                },
                                {
                                    elem : 'item',
                                    content : {
                                        block : 'icon',
                                        mods : { payment : 'wire-transfer' }
                                    }
                                },
                                {
                                    elem : 'item',
                                    content : {
                                        block : 'icon',
                                        mods : { payment : 'ok-pay' }
                                    }
                                },
                                {
                                    elem : 'item',
                                    content : {
                                        block : 'icon',
                                        mods : { payment : 'adv-cash' }
                                    }
                                }
                            ]
                        },
                        {
                            elem : 'row',
                            content : [
                                {
                                    elem : 'item',
                                    content : {
                                        block : 'icon',
                                        mods : { payment : 'master-card' }
                                    }
                                },
                                {
                                    elem : 'item',
                                    content : {
                                        block : 'icon',
                                        mods : { payment : 'perfect-money' }
                                    }
                                },
                                {
                                    elem : 'item',
                                    content : {
                                        block : 'icon',
                                        mods : { payment : 'payeer' }
                                    }
                                },
                                {
                                    elem : 'item',
                                    content : {
                                        block : 'icon',
                                        mods : { payment : 'web-money' }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'section',
            mods : { theme : 'footer' },
            content : [
                {
                    elem : 'image',
                    elemMods : { nexus : true }
                },
                {
                    elem : 'image',
                    elemMods : { iphone : true }
                },
                {
                    block : 'store-links',
                    content : [
                        {
                            block : 'section',
                            elem : 'header',
                            content : [
                                { block : 'icon', mods : { type : 'phone' } },
                                'Available on the'
                            ]
                        },
                        {
                            block : 'store-link',
                            tag : 'a',
                            content : {
                                block : 'icon',
                                mods : { store : 'app-store' }
                            }
                        },
                        {
                            block : 'store-link',
                            tag : 'a',
                            content : {
                                block : 'icon',
                                mods : { store : 'google-play' }
                            }
                        }
                    ]
                },
                {
                    block : 'copyright',
                    content : '© Cryptex, 2016'
                }
            ]
        }
    ]
});
