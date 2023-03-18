const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  //set the inner text of p to a randomly generated UUID
  h1.innerText = crypto.randomUUID();
});

//The randomUUID() method of the Crypto is used to generate v4
//UUID using a cryptographically secure random number generator