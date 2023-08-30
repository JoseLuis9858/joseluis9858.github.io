let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Por favor ingresa tu nombre.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bienvenido a mi pagina , ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bienvenido a mi pagina, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  function setUserName() {
    const myName = prompt("Por favor ingresa tu nombre.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Bienvenido a mi pagina, ${myName}`;
    }
  }
  