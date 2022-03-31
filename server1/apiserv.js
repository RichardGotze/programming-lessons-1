const axios = require('axios').default;
axios
    .get('https://jsonplaceholder.typicode.com/todos', {})
    .then(
        response => {
            var a = response.data
        }
    )
    .then(
        response => {
            console.log(response.data)
        }
    )
    .catch(function (error) {
        console.log(error);
    })