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

export const getAll = () =>
  fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getAllPosts = categoryId =>
  fetch(`${API}/${categoryId}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts);
