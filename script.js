const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

//Using async/await
const generatejoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const response = await fetch('https://icanhazdadjoke.com', config)

  const data = await response.json()

  jokeElement.innerHTML = data.joke
}

/*Using .then()

const generatejoke = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', config)
  .then((response) => response.json())
  .then((data) => {
    jokeElement.innerHTML = data.joke
  })
}

*/

generatejoke()

jokeBtn.addEventListener('click', generatejoke)
