// Homepage JavaScript
class HomepageManager {
  constructor() {
    this.reviewsContainer = document.getElementById("reviews-container");
    this.init();
  }

  async init() {
    await this.loadReviews();
  }

  async loadReviews() {
    try {
      const response = await fetch("./data/reviews.json");
      const reviews = await response.json();
      this.renderReviews(reviews);
    } catch (error) {
      console.error("Error loading reviews:", error);
      this.renderDefaultReviews();
    }
  }

  renderReviews(reviews) {
    if (!this.reviewsContainer) return;

    const reviewsHTML = reviews
      .map(
        (review) => `
            <div class="review-card">
                <div class="review-author">${review.author}</div>
                <div class="review-text">"${review.text}"</div>
            </div>
        `
      )
      .join("");

    this.reviewsContainer.innerHTML = reviewsHTML;
  }

  renderDefaultReviews() {
    if (!this.reviewsContainer) return;

    const defaultReviews = [
      {
        author: "Alex Chen",
        text: "This 3D puzzle game is absolutely mesmerizing! The graphics are stunning and the 3D assembly feels so natural. I love how each piece fits perfectly into place.",
      },
      {
        author: "Maria Rodriguez",
        text: "Perfect game for improving spatial reasoning and patience. The different difficulty levels keep me challenged, and the beautiful artwork makes every puzzle a joy to complete.",
      },
      {
        author: "David Thompson",
        text: "My family loves playing this together! It's educational and entertaining. The kids learn problem-solving skills while having fun with the colorful 3D puzzles.",
      },
      {
        author: "Sarah Williams",
        text: "Excellent puzzle game with realistic 3D graphics. The variety of puzzle themes keeps things interesting, and the intuitive controls make assembly smooth and enjoyable.",
      },
    ];

    this.renderReviews(defaultReviews);
  }
}

// Scroll to how to play function
function scrollToHowToPlay() {
  const howToPlaySection = document.querySelector(".how-to-play");
  if (howToPlaySection) {
    howToPlaySection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Initialize homepage when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new HomepageManager();
});
