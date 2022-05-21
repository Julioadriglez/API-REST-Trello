// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

fetch('https://api.trello.com/1/members/me/boards?key=119ab0c01d35f77e9e73e11531be9cea&token=4252131b350daa10b8cfdb6cba6c1e234ad5e11b880a1136532bd635f3647ce2', {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));