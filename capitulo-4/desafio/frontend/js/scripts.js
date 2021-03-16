function start_old() {
  console.log(1);
  fetch("http://localhost:3001/users").then(function (resource) {
    console.log(2);
    resource.json().then(function (users) {
      console.log(3);

      console.log(users);
      renderUsers(users);
    });
    console.log(4);
  });
  console.log(5);
}

async function start() {
    var resource = await fetch('http://localhost:3001/users');
    var users = await resource.json()
    renderUsers(users)
}

function renderUsers(users) {
  console.log(users);
}

start();
