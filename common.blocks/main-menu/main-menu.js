/** @class main-menu */
modules.define('main-menu', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, /** @lends main-menu.prototype */{}, /** @lends main-menu */{
        live : function() {
            this.liveBindTo('close', 'click', function() {
                this.delMod('opened');
            });

            this.liveBindTo('toggle', 'click', function() {
                this.toggleMod('opened', true, '');
            });
        }
    }));
});
