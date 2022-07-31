const init = () => {
  const inputForm = document.querySelector('form'); //allows us to access our form
  inputForm.addEventListener('submit', (event) => { //adds event listener to form
    event.preventDefault(); //stops page from refreshing when form is submitted
    // console.log(event);
    const input = document.querySelector('input#searchByID') //grabs input box of form
    // console.log(input.value) // input.value grabs the value put in the input box
    // console.log(event.target.children[1].value);
    fetch(`http://localhost:3000/movies/${input.value}`) //gets our data from movies
    .then(response => response.json()) //turns it into json
    .then(data => {
        // console.log(data);
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        title.innerText = data.title;
        summary.innerText = data.summary;
    })
  });
}

document.addEventListener('DOMContentLoaded', init);