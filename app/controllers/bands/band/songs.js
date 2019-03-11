import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
    title: '',
    isSongDisabled: computed('title', function() {
        return isEmpty(this.get('title'));
    }),
    songCreationStarted: false,
    canCreateSong: computed('songCreationStarted', 'model.songs.[]', function() {
        return this.get('songCreationStarted') || this.get('model.songs.length');
    }),
    sortBy: 'ratingDesc',
    sortProperties: computed('sortBy', function() {
        var options = {
            'ratingDesc': 'rating:desc,title:asc',
            'ratingAsc': 'rating:asc,title:asc',
            'titleDesc': 'title:desc',
            'titleAsc': 'title:asc',
        };
        return options[this.get('sortBy')].split(',');
    }),
    sortedSongs: sort('model.songs', 'sortProperties'),
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
            },
            setSorting: function(option){
                this.set('sortBy', option);
            }
    }
});
