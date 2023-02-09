fetch("https://randomuser.me/api/")
.then(Response => Response.json())
.then(data => {
  console.log(data)

  const user = data.results[0];
  const title =user.name.title;
  const name = user.name.first;
  const surname = user.name.last;
  const correo = user.email;
  const perfil = user.picture.large;
  const cell = user.cell;
  const direccion = `${user.location.street.name} ${user.location.street.number}`;
  const ciudad = user.location.city;
  const pais = user.location.country;

  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = `${title}_${name}_${surname}`;

  const first = document.getElementById('first');
  first.innerHTML = `Hello Im ${name}`;

  const location = document.getElementById('contacto');
  location.innerHTML = `<li class="col-md-4">Email: ${correo}</li>
                        <li class="col-md-4">Teléfono: ${cell}</li>
                        <li class="col-md-4">Dirección: ${direccion}, ${ciudad}, ${pais}</li>`;
  
  

  const picture = document.getElementById('perfil');
  picture.innerHTML = ` <img class="img-fluid col-md-6 float-md-3 mb-3 ms-md-3 perfil" style="width:400px" src="${perfil}" alt="perfil-persona"> `
})