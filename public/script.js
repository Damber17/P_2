document.addEventListener("DOMContentLoaded", function () {
    // ================== Lightbox ==================
    let currentImageIndex = 0;
    const galleryImages = document.querySelectorAll('.gallery-container img');
    const lightboxContainer = document.getElementById('lightbox');
    const lightboxImageElement = document.getElementById('lightbox-image');

    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImageElement.src = galleryImages[index].src;
        lightboxContainer.style.display = 'flex';
    }

    function closeLightbox() {
        lightboxContainer.style.display = 'none';
    }

    function changeImage(direction) {
        currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
        lightboxImageElement.src = galleryImages[currentImageIndex].src;
    }

    window.addEventListener('keydown', function (e) {
        if (e.key === "ArrowRight") changeImage(1);
        else if (e.key === "ArrowLeft") changeImage(-1);
        else if (e.key === "Escape") closeLightbox();
    });

    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;

    // ================== Toggle Reviews ==================
    const viewMoreBtn = document.getElementById("view-more-btn");
    viewMoreBtn?.addEventListener('click', function () {
        const reviews = document.getElementById("additional-reviews");
        const hiddenEvents = document.getElementById("hidden-events");

        if (reviews && (reviews.style.display === "none" || reviews.style.display === "")) {
            reviews.style.display = "block";
            this.textContent = "View Less Comments";
        } else if (reviews) {
            reviews.style.display = "none";
            this.textContent = "View Previous Comments";
        }

        if (hiddenEvents) {
            hiddenEvents.style.display = "block";
            this.style.display = "none";
        }
    });

    // ================== Responsive Menu Toggle ==================
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const menuIcon = menuToggle?.querySelector("i");

    menuToggle?.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars");
            menuIcon.classList.toggle("fa-times");
        }
    });

    // ================== Nav Link Highlight ==================
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // ================== Booking Form Auto-fill ==================
    const checkAvailabilityButton = document.querySelector('.booking form button');
    const checkFormSection = document.querySelector('.booking');
    const bookFormSection = document.querySelector('.booking-form');

    checkAvailabilityButton?.addEventListener('click', function (event) {
        event.preventDefault();
        autoFillBookingForm();
        checkFormSection.style.display = 'none';
        bookFormSection.style.display = 'block';
    });

    function autoFillBookingForm() {
        const checkForm = document.querySelector('.booking form');
        const bookForm = document.querySelector('.booking-form');

        const checkInDate = checkForm.querySelector('input[type="date"]');
        const travellers = checkForm.querySelectorAll('select')[0];
        const rooms = checkForm.querySelectorAll('select')[1];

        const roomDate = bookForm.querySelector('#room-date');
        const roomGuests = bookForm.querySelector('#room-guests');
        const roomType = bookForm.querySelector('#room-type');

        const checkIn = checkInDate.value;
        const numberOfGuests = travellers.selectedIndex + 1;
        const numberOfRooms = rooms.selectedIndex + 1;

        roomDate.value = checkIn;
        roomGuests.value = numberOfGuests;

        roomType.value = numberOfRooms === 1 ? 'Single Room' :
                         numberOfRooms === 2 ? 'Double Room' : 'Suite';
    }

    // ================== Booking Form Submit ==================
    const bookingForm = document.querySelector('.booking-form');
    bookingForm?.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Your booking has been submitted!');
    });

    // ================== Feedback Submission ==================
    const feedbackForm = document.getElementById("feedback-form");
    const reviewsList = document.getElementById("reviews-list");
    const successMessage = document.getElementById("success-message");

    feedbackForm?.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value.trim();

        if (!name || !rating || !comment) {
            alert("Please fill out all fields.");
            return;
        }

        const date = new Date().toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
        });

        const ratingLabel = getRatingLabel(parseInt(rating));

        const reviewHTML = `
            <div class="card mb-3 review-card">
                <div class="card-body">
                    <h5 class="card-title">${rating}/5 ${ratingLabel}</h5>
                    <p class="card-text">${comment}</p>
                    <p class="card-subtitle text-muted">– ${name} | ${date}</p>
                </div>
            </div>
        `;

        reviewsList.insertAdjacentHTML("afterbegin", reviewHTML);
        feedbackForm.reset();
        successMessage.style.display = "inline";
        setTimeout(() => successMessage.style.display = "none", 3000);
    });

    function getRatingLabel(score) {
        switch (score) {
            case 5: return "Excellent";
            case 4: return "Good";
            case 3: return "Fair";
            case 2: return "Poor";
            case 1: return "Terrible";
            default: return "";
        }
    }

    // ================== Room Type Prefill from Click ==================
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const roomType = this.getAttribute('data-room-type');
            localStorage.setItem('selectedRoomType', roomType);
            window.location.href = 'booknow.html';
        });
    });

    const selectedRoomType = localStorage.getItem('selectedRoomType');
    const roomSelect = document.getElementById('room-type');
    if (selectedRoomType && roomSelect) {
        let found = false;
        for (let i = 0; i < roomSelect.options.length; i++) {
            if (roomSelect.options[i].value === selectedRoomType) {
                roomSelect.selectedIndex = i;
                found = true;
                break;
            }
        }
        if (!found) {
            const newOption = new Option(selectedRoomType, selectedRoomType);
            roomSelect.add(newOption);
            roomSelect.value = selectedRoomType;
        }
    }

    // ================== Dining Reservation Forward ==================
    const reservationForm = document.querySelector(".reservation-form");
    reservationForm?.addEventListener("submit", function (e) {
        e.preventDefault();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;
        const specialRequests = document.getElementById("special-requests").value;

        localStorage.setItem("diningDate", date);
        localStorage.setItem("diningTime", time);
        localStorage.setItem("diningGuests", guests);
        localStorage.setItem("diningRequests", specialRequests);

        window.location.href = "booknow.html";
    });

    // Prefill dining reservation if available
    const diningDate = localStorage.getItem("diningDate");
    const diningTime = localStorage.getItem("diningTime");
    const diningGuests = localStorage.getItem("diningGuests");
    const diningRequests = localStorage.getItem("diningRequests");

    if (diningDate && diningTime && diningGuests) {
        const dateInput = document.getElementById("dining-date");
        const timeInput = document.getElementById("dining-time");
        const guestInput = document.getElementById("dining-guests");
        const requestInput = document.querySelector("#dining-guests + input[type='text']");

        if (dateInput) dateInput.value = diningDate;
        if (timeInput) timeInput.value = diningTime;
        if (guestInput) guestInput.value = diningGuests;
        if (requestInput) requestInput.value = diningRequests || '';
    }
});
