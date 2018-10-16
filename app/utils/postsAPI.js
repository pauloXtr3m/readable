import { API } from './constants';

// Generate a unique token for storing your bookshelf data on the backend server.
if (!localStorage.token) {
  localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

const { token } = localStorage;

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

export const get = postId =>
  fetch(`${API}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data.post);

export const getAll = () =>
  fetch(`${API}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts);

export const update = post =>
  fetch(`${API}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post }),
  }).then(res => res.json());

export const vote = (postId, option) =>
  fetch(`${API}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option }),
  }).then(res => res.json());

export const remove = post =>
  fetch(`${API}/posts/${post.id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());

export const getAllComments = postId =>
  fetch(`${API}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data.comments);
