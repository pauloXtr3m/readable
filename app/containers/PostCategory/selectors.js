import { createSelector } from 'reselect';

/**
 * Direct selector to the postCategory state domain
 */

const selectGlobal = globalState => globalState.get('global');

const makeSelectPostCategory = category =>
  createSelector(selectGlobal, substate => {
    const posts = substate.get('posts');
    const arrayPosts = [];
    let retorno = {};
    if (posts && posts.size !== 0) {
      Object.keys(posts).forEach(id => {
        if (posts[id].category === category) {
          arrayPosts.push(posts[id]);
        }
      });

      retorno = arrayPosts.reduce(
        (map, obj) => ({ ...map, [obj.id]: obj }),
        {},
      );
    }

    return retorno;
  });

export default makeSelectPostCategory;
