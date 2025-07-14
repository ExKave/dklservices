const carRenters = [
  {
    name: "Sameer Car Rentals",
    address: "Khalibandha, Tarava, Dhenkanal",
    vehicles: ["Car", "Bolero"],
    images: [
      "../../assets/images/stockbolero1.avif",
      "../../assets/images/stockcar1.avif"
    ],
    contact: ["+91 9937643832"]
  },
  {
    name: "Daitari Auto",
    address: "Raipur, Tarava, Dhenkanal",
    vehicles: ["Auto"],
    images: [
      "../../assets/images/stockauto1.jpg"
    ],
    contact: ["+91 6372285481"]
  },
  {
    name: "Dipak Sahoo Car",
    address: "Kankadapal, Dhenkanal",
    vehicles: ["Bolero","DJR (DZire)"],
    images: [
      "../../assets/images/stockbolero2.avif",
      "../../assets/images/marutiDJRstock1.jpg"
    ],
    contact: ["+91 9040355105"]
  },
  {
    name: "Babu Rental",
    address: "Khamar, Dhenkanal",
    vehicles: ["Maruti Eco"],
    images: [
      "../../assets/images/stockeco1.jpg",
    ],
    contact: ["+91 8327705925"]
  },
  {
    name: "Nanda Auto",
    address: "Nuagan, Dhenkanal",
    vehicles: ["Auto"],
    images: [
      "../../assets/images/stockauto3.avif",
    ],
    contact: ["+91 9777220983"]
  }

];

const container = document.getElementById("car-renter-list");

let delay=0;
carRenters.forEach((renter, index) => {
  const contactHTML = renter.contact.map(number => {
    return `<p class="mb-1">Contact: <a href="tel:${number}">${number}</a></p>`;
  }).join("");

    const vehiclesHTML = renter.vehicles.map(vehicle => {
    return `<span class="badge bg-primary me-1">${vehicle}</span>`;
  }).join("");

  const carouselId = `carousel-${index}`;
  const carouselItems = renter.images.map((img, idx) => {
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
        <h5 class="card-title">${renter.name}</h5>
        <p class="text-muted">${renter.address}</p>
        <div class="mb-2">
          <strong>Available Vehicles:</strong><br/>
          ${vehiclesHTML}
        </div>
        ${contactHTML}
        <div class="d-flex justify-content-end mt-3">
          <a href="https://wa.me/${renter.contact[0].replace(/[^0-9]/g, '')}" 
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

