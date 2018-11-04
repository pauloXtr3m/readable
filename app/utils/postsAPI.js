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
  'Content-Type': 'application/json',
};

export const get = postId =>
  fetch(`${API}/posts/${postId}`, { headers }).then(res => res.json());

export const getAll = () =>
  fetch(`${API}/posts`, { headers }).then(res => res.json());

export const update = post =>
  fetch(`${API}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
    },
    body: JSON.stringify(post),
  }).then(res => res.json());

export const vote = (postId, option) =>
  fetch(`${API}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
    },
    body: JSON.stringify({ option }),
  }).then(res => res.json());

export const remove = postId =>
  fetch(`${API}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
    },
  }).then(res => res.json());

export const getAllComments = postId =>
  fetch(`${API}/posts/${postId}/comments`, { headers }).then(res => res.json());
