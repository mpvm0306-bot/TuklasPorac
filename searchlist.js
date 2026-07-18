const searchBar = document.getElementById('searchBar');
const suggestionsBox = document.getElementById('suggestions');

// list of destinations — works the same on every page
const destinations = [
  { name: "Miyamit Falls", url: "miyamit-falls.html" },
  { name: "Puning Hot Spring", url: "puning-hot-spring.html" },
  { name: "Tutulari Falls", url: "tutularifalls.html" },
  { name: "Dara Falls", url: "darafalls.html" },
  { name: "Ana-an Falls", url: "anaanfalls.html" },
  { name: "Sapang Angka Falls", url: "sapangangka.html" },
  { name: "SandBox", url: "sandbox.html" },
  { name: "Baywalk Park", url: "baywalk.html" },
  { name: "Hacienda Antonio of Señura", url: "hacienda.html" },
  { name: "Moontura Heights Resort", url: "moontura.html" },
  { name: "Poracay Resort", url: "poracay.html" },
  { name: "Nature's View Resort", url: "natureview.html" },
  { name: "Blue Hotel & Resort", url: "bluehotel.html" },
  { name: "RL Resort & Leisure Park", url: "rlresort.html" },
  { name: "CJ Resort", url: "cjresort.html" },
  { name: "Bayung Porac Mini Park", url: "bayungporac.html" },
  { name: "Pio Chapel", url: "piochapel.html" },
  { name: "Santa Catalina de Alejandria Parish Church", url: "santacatalina.html" },
  { name: "San Nicolas de Tolentino Chapel", url: "sannicolaschapel.html" }
];

searchBar.addEventListener('input', () => {
  const query = searchBar.value.trim().toLowerCase();
  suggestionsBox.innerHTML = '';

  if (!query) {
    suggestionsBox.classList.add('hidden');
    return;
  }

  const matches = destinations.filter(d => d.name.toLowerCase().includes(query));

  if (matches.length === 0) {
    suggestionsBox.classList.add('hidden');
    return;
  }

  matches.forEach(match => {
    const li = document.createElement('li');
    li.textContent = match.name;
    li.addEventListener('click', () => {
      window.location.href = match.url;
    });
    suggestionsBox.appendChild(li);
  });

  suggestionsBox.classList.remove('hidden');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-bar')) {
    suggestionsBox.classList.add('hidden');
  }
});

// Fade-in on scroll for gallery
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target); 
    }
  });
}, { threshold: 0.2 });

fadeEls.forEach(el => fadeObserver.observe(el));