const jokeContainer = document.querySelector('.joke');
const btn = document.querySelector(".btn");

const url = "https://v2.jokeapi.dev/joke/Programming";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then(response => response.json())
    .then(item => {
      if (item.type === "single") {
        // Single part joke
        jokeContainer.textContent = item.joke;
      } else if (item.type === "twopart") {
        // Two part joke
        jokeContainer.textContent = `${item.setup} - ${item.delivery}`;
      } else {
        jokeContainer.textContent = "No joke found.";
      }
      jokeContainer.classList.add("fade");
      console.log(item.joke || `${item.setup} - ${item.delivery}`);
    })
    .catch(error => {
      console.error('Error fetching the joke:', error);
      jokeContainer.textContent = "Failed to load a joke.";
    });
}

btn.addEventListener("click", getJoke);
getJoke();
