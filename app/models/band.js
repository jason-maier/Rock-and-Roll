import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
    name: '',
    description: '',

    init: function() {
        this._super(...arguments);
        if (!this.get('songs')) {
            this.set('songs', []);
        }
    },

    slug: computed('name', function() {
        return this.get('name').dasherize();
    })
});