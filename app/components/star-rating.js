import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
    classNames: ['rating-panel'],
    rating: 0,
    maxRating: 5,
    item: null,
    "on-click": null,


    stars: computed('rating', 'maxRating', function() {
        let stars = [];
        for (let i=1; i <= this.maxRating; i++) {
            stars.push({ rating: i, isFull: this.rating >= i });
        }
        return stars;
    }),

    actions: {
        setRating(newRating) {
            this.get('on-click') ({
                item: this.get('item'),
                rating: newRating
            });
        }
    }
});
