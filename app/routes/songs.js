import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    model: function() {
        return this.modelFor('bands.band');
    }
});


