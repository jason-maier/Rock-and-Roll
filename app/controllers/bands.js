import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    name: '',
    isAddButtonDisabled: computed('name', function() {
        return isEmpty(this.get('name'));
    })
});
