const host = 'http://localhost:8000';

const postWrapper = (url, body) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body),
}).then(response => response.json())
  .catch((error) => {
    throw error;
  });

const getWrapper = url => fetch(url).then(response => response.json());


const apiClient = {
  getUser: id => getWrapper(`${host}/api/user/${id}`),
  createUser: id => postWrapper(`${host}/api/user`, { id }),
  updateUser: user => postWrapper(`${host}/api/user/update`, user)
};

export default apiClient;
