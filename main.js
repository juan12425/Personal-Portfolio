function showPhoto(type, direction) {
    const state = generalCount[type];
    const nextNumber = state.count + direction;
    const currentPhoto = document.getElementById(`${type}-photo-${state.count}`);
    const nextPhoto = document.getElementById(`${type}-photo-${nextNumber}`);

    if (!nextPhoto || !currentPhoto) {
        return;
    }

    currentPhoto.style.display = "none";
    currentPhoto.pause?.();
    nextPhoto.style.display = "block";
    state.count = nextNumber;
    document.getElementById(`back-${type}`).disabled = nextNumber === 1;
    document.getElementById(`forw-${type}`).disabled = nextNumber === state.limit;
}

function showVideo(type, direction) {
    const state = generalCount[type];
    const currentSlide = document.getElementById(`${type}-video-${state.count}`).closest(".mixer-video-slide");
    const nextSlide = document.getElementById(`${type}-video-${state.count + direction}`).closest(".mixer-video-slide");

    if (!currentSlide || !nextSlide) {
        return;
    }

    currentSlide.querySelector("video").pause();
    currentSlide.classList.add("mixer-video-slide-hidden");
    nextSlide.classList.remove("mixer-video-slide-hidden");
    state.count += direction;
    document.getElementById(`back-${type}`).disabled = state.count === 1;
    document.getElementById(`forw-${type}`).disabled = state.count === state.limit;
}

const generalCount = {};

function initializeShowcase(type, limit) {
    const backButton = document.getElementById(`back-${type}`);
    const forwardButton = document.getElementById(`forw-${type}`);

    if (!backButton || !forwardButton) {
        return;
    }

    generalCount[type] = { count: 1, limit };
    backButton.addEventListener("click", () => showPhoto(type, -1));
    forwardButton.addEventListener("click", () => showPhoto(type, 1));
}

function initializeVideoShowcase(type, limit) {
    const backButton = document.getElementById(`back-${type}`);
    const forwardButton = document.getElementById(`forw-${type}`);

    if (!backButton || !forwardButton) {
        return;
    }

    generalCount[type] = { count: 1, limit };
    backButton.addEventListener("click", () => showVideo(type, -1));
    forwardButton.addEventListener("click", () => showVideo(type, 1));
}

initializeShowcase("trattoria", 3);
initializeShowcase("ttb", 2);
initializeShowcase("gofest", 4);
initializeVideoShowcase("mixer", 3);