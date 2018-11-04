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

export const get = commentId =>
  fetch(`${API}/comments/${commentId}`, { headers }).then(res => res.json());

export const add = comment =>
  fetch(`${API}/comments/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment),
  }).then(res => res.json());

export const update = post =>
  fetch(`${API}/comments/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(post),
  }).then(res => res.json());

export const vote = (commentId, option) =>
  fetch(`${API}/comments/${commentId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option }),
  }).then(res => res.json());

export const remove = commentId =>
  fetch(`${API}/comments/${commentId}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json());
