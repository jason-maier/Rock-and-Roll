import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /test', async function(assert) {
    await visit('/test');

    assert.equal(currentURL(), '/test');
  });
});
