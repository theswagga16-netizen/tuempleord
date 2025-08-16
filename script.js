// script.js

// Cargar ofertas guardadas al iniciar
window.addEventListener('DOMContentLoaded', () => {
  const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
  savedJobs.forEach(job => renderJob(job));
});

// Función para mostrar una oferta en pantalla
function renderJob(job) {
  const jobSection = document.getElementById('job-listings');

  const jobDiv = document.createElement('div');
  jobDiv.classList.add('job');
  jobDiv.innerHTML = `
    <h3>${job.title}</h3>
    <h4>${job.company}</h4>
    <p>${job.description}</p>
  `;

  jobSection.appendChild(jobDiv);
}

// Manejar el formulario
document.getElementById('job-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const company = document.getElementById('company').value;
  const description = document.getElementById('description').value;

  const newJob = { title, company, description };

  // Mostrar en pantalla
  renderJob(newJob);

  // Guardar en localStorage
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  jobs.push(newJob);
  localStorage.setItem('jobs', JSON.stringify(jobs));

  // Limpiar formulario
  document.getElementById('job-form').reset();
});

function renderJob(job, index) {
  const jobSection = document.getElementById('job-listings');

  const jobDiv = document.createElement('div');
  jobDiv.classList.add('job');
  jobDiv.innerHTML = `
    <h3>${job.title}</h3>
    <h4>${job.company}</h4>
    <p>${job.description}</p>
    <button class="delete-btn">Eliminar</button>
  `;

  // Botón de eliminar
  jobDiv.querySelector('.delete-btn').addEventListener('click', () => {
    deleteJob(index);
  });

  jobSection.appendChild(jobDiv);
}
function renderJob(job, index) {
  const jobSection = document.getElementById('job-listings');

  const jobDiv = document.createElement('div');
  jobDiv.classList.add('job');
  jobDiv.innerHTML = `
    <h3>${job.title}</h3>
    <h4>${job.company}</h4>
    <p>${job.description}</p>
    <button class="delete-btn">Eliminar</button>
  `;

  // Botón de eliminar
  jobDiv.querySelector('.delete-btn').addEventListener('click', () => {
    deleteJob(index);
  });

  jobSection.appendChild(jobDiv);
}
function deleteJob(index) {
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  jobs.splice(index, 1); // Elimina la oferta en esa posición
  localStorage.setItem('jobs', JSON.stringify(jobs));

  // Limpiar y volver a renderizar
  document.getElementById('job-listings').innerHTML = '';
  jobs.forEach((job, i) => renderJob(job, i));
}
window.addEventListener('DOMContentLoaded', () => {
  const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
  savedJobs.forEach((job, index) => renderJob(job, index));
});
const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
jobs.push(newJob);
localStorage.setItem('jobs', JSON.stringify(jobs));
renderJob(newJob, jobs.length - 1);
function filterJobs(query) {
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(query) ||
    job.company.toLowerCase().includes(query) ||
    job.description.toLowerCase().includes(query)
  );

  // Limpiar y mostrar solo los filtrados
  const jobSection = document.getElementById('job-listings');
  jobSection.innerHTML = '';
  filtered.forEach((job, index) => renderJob(job, index));
}
document.getElementById('search-input').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  filterJobs(query);
});
const form = document.getElementById('vacante-form');
const listado = document.getElementById('vacantes-publicadas');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const empresa = document.getElementById('empresa').value;
  const descripcion = document.getElementById('descripcion').value;
  const link = document.getElementById('link').value;

  const vacanteHTML = `
    <div class="job fade-in">
      <h3>${titulo.toUpperCase()}</h3>
      <h4>${empresa}</h4>
      <p>${descripcion}</p>
      <a href="${link}" class="btn-link" target="_blank">Aplicar Ahora</a>
    </div>
  `;

  listado.innerHTML += vacanteHTML;
  form.reset();
});
