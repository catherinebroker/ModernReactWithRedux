import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => {
  return function () {
    const promise = jsonPlaceHolder.get('/posts');

    return {
      type: 'FETCH_POSTS',
      payload: promise
    };
  }
};

