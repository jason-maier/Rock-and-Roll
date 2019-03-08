import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    title: '',
    isSongDisabled: computed('title', function() {
        return isEmpty(this.get('title'));
    }),
    songCreationStarted: false,
    canCreateSong: computed('songCreationStarted', 'model.songs.[]', function() {
        return this.get('songCreationStarted') || this.get('model.songs.length');
    }),
    actions: {
            updateRating: function(params) {
                var song = params.item,
                rating = params.rating;

                if (song.get('rating') === rating) {
                    rating = 0;
                }
                
                song.set('rating', rating);
                return song.save();
            },
            enableSongCreation: function() {
                this.set("songCreationStarted", true);
            }
    }
});
