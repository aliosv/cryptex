/** @class tabs */
modules.define('tabs', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, /** @lends tabs.prototype */{}, /** @lends tabs */{
        live : function() {
            this.liveBindTo('switch', 'click', function(e) {
                var prevIndex,
                    newIndex;

                if(!this.hasMod(e.currentTarget, 'active')) {
                    prevIndex = this.elem('switch').index(this.elem('switch', 'active', true));
                    newIndex = this.elem('switch').index(e.currentTarget);

                    this.delMod(this.elem('switch', 'active', true), 'active');
                    this.setMod(e.currentTarget, 'active', true);

                    this.delMod(this.elem('tab').eq(prevIndex), 'active');
                    this.setMod(this.elem('tab').eq(newIndex), 'active', true);
                }
            });
        }
    }));
});
