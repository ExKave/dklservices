const milkSuppliers = [
  {
    name: "Basudev Wiring",
    address: "Nuagan, Dhenkanal",
    images: [
      "../../assets/images/wiring1.webp"
    ],
    contact: ["+91 9040160416"]
  },
  {
    name: "Pratap Wiring",
    address: "Trilochanpur, Khamar, Dhenkanal",
    images: [
      "../../assets/images/wiring2.jpeg"
    ],
    contact: ["+91 7894700574"]
  },
  {
    name: "Anil Swain Wiring",
    address: "Balava, Dhenkanal",
    images: [
      "../../assets/images/wiring3.jpeg"
    ],
    contact: ["+91 9583442749"]
  },
  {
    name: "Bichi Barala Wiring",
    address: "Derasingh, Dhenkanal",
    images: [
      "../../assets/electrician.webp"
    ],
    contact: ["+91 9937237753"]
  }
];

const container = document.getElementById("milk-suppliers-list");

let delay=0;
milkSuppliers.forEach((supplier, index) => {
  const contactHTML = supplier.contact.map(number => {
    return `<p class="mb-1">Contact: <a href="tel:${number}">${number}</a></p>`;
  }).join("");

  const carouselId = `carousel-${index}`;
  const carouselItems = supplier.images.map((img, idx) => {
    return `
      <div class="carousel-item ${idx === 0 ? 'active' : ''}">
        <img src="${img}" class="d-block w-100" alt="Image ${idx + 1}">
      </div>
    `;
  }).join("");

  const card = document.createElement("div");

  delay += 100; // 100ms delay for each
  card.style.animationDelay = `${delay}ms`;

  card.className = "col-md-4 mb-4";
  card.innerHTML = `
    <div class="card h-100 shadow-sm" data-aos="fade-up">
      <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${carouselItems}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="card-body">
        <h5 class="card-title">${supplier.name}</h5>
        <p class="text-muted">${supplier.address}</p>
        ${contactHTML}
        <div class="d-flex justify-content-end mt-3">
          <a href="https://wa.me/${supplier.contact[0].replace(/[^0-9]/g, '')}" 
             class="btn btn-success btn-sm" target="_blank">
            <i class="bi bi-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;
  container.appendChild(card);
});

  window.addEventListener('load', function() {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    });
  });
  