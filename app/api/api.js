const host = 'http://localhost:8000';
/* http://localhost:8000 */

export const getUser = test => fetch(`${host}/test`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ test }),
}).then(response => response.json())
  .catch((error) => {
    throw error;
  });
