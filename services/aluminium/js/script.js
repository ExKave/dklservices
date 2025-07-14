// Sample data for aluminium fabricators
const fabricators = [
    {
        name: "Omm sai Aluminium & Hardware",
        images:[ "https://lh3.googleusercontent.com/p/AF1QipP1pW3GHZTprCQg_7kQFstjUy1R58bAhRSpRiyV=w408-h725-k-no"],
        contact: ["+91 9439091323"],
        pricePerDay: "₹---/day",
        mapLink: "https://maps.app.goo.gl/odTotkAs4xpgEkV96"
    },
    {
        name: "Ommkar Decor (Ashish)",
        images:[ "../../assets/images/KanaDada.jpg"],
        contact:[ "+91 7978743191", "+91 9861811498", "+91 8018095295"],
        pricePerDay: "₹600/day",
        mapLink: "https://maps.app.goo.gl/psYaLSfucayX6DZ47?g_st=aw"
    },
    {
        name:"Jagannath Aluminium (Babi)",
        images:[ "../../assets/images/alu_stock_img.jpg"],
        contact: ["+91 6370178770"],
        pricePerDay: "₹750/day",
        mapLink: "https://goo.gl/maps/yourlocation3"
    },
    {
        name:"Behera Doors & Decor (Banamali)",
        images:[ "../../assets/images/BanuDada.jpg"],
        contact: ["+91 7735689919"],
        pricePerDay: "₹600/day",
        mapLink: "https://maps.app.goo.gl/sZTe6Tg8KH92urQN8?g_st=aw"
    },
    {
        name:"Mahalaxmi Doors & Doors (Jitendra)",
        images:[ "../../assets/images/JitanDada.jpg","../../assets/images/JitanDadaVisitingCard.jpg"],
        contact: ["+91 9778069817","+91 8327795001"],
        pricePerDay: "₹600/day",
        mapLink: "https://maps.app.goo.gl/kQeKCMSpHcpXxepr5"
    }
];


// Dynamically render fabricators
const container = document.getElementById("fabricators-list");

let delay = 0;
fabricators.forEach((fabricator, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    delay += 100; // 100ms delay for each
    card.style.animationDelay = `${delay}ms`;

    const contactHTML = fabricator.contact.map(number => {
    return `<p class="mb-1">Contact: <a href="tel:${number}">${number}</a></p>`;
    }).join("");

    const carouselId = `carousel-${index}`; // Unique carousel ID for each card
    const carouselItems = fabricator.images.map((img, idx) => {
        return `
            <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                <img src="${img}" class="d-block w-100" alt="Image ${idx + 1}">
            </div>
        `;
    }).join("");

    // <img src="${fabricator.photo}" class="card-img-top" alt="${fabricator.name}"></img>
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
            <h5 class="card-title">${fabricator.name}</h5>
            ${contactHTML}
            <p class="card-text fw-bold text-success">Price: ${fabricator.pricePerDay}</p>
            <div class="d-flex justify-content-between align-items-center mt-3">
                <a href="${fabricator.mapLink}" class="btn btn-primary btn-sm" target="_blank">View on Google Maps</a>
                <a href="https://wa.me/${fabricator.contact[0].replace(/[^0-9]/g, '')}" 
                   class="btn btn-success btn-sm" target="_blank">
                    <i class="bi bi-whatsapp"></i> WhatsApp
                </a>
            </div>
        </div>
    </div>
`;


    container.appendChild(card);
});
