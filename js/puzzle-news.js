// News Page Manager
class NewsPageManager {
  constructor() {
    this.updatesContainer = document.getElementById("updates-container");
    this.diariesContainer = document.getElementById("diaries-container");
    this.init();
  }

  async init() {
    await this.loadUpdates();
    await this.loadDiaries();
  }

  async loadUpdates() {
    try {
      const response = await fetch("./data/updates.json");
      const updates = await response.json();
      this.renderUpdates(updates);
    } catch (error) {
      console.error("Error loading updates:", error);
      this.renderDefaultUpdates();
    }
  }

  async loadDiaries() {
    try {
      const response = await fetch("./data/diaries.json");
      const diaries = await response.json();
      this.renderDiaries(diaries);
    } catch (error) {
      console.error("Error loading diaries:", error);
      this.renderDefaultDiaries();
    }
  }

  renderUpdates(updates) {
    if (!this.updatesContainer) return;

    const updatesHTML = updates
      .map(
        (update, index) => `
            <div class="news-card">
                <div class="news-content">
                    <div class="news-date">${update.date}</div>
                    <h3 class="news-title">${update.title}</h3>
                    <p class="news-excerpt">${update.excerpt}</p>
                    <div class="news-full" id="update-full-${index}">
                        ${update.fullText}
                    </div>
                    <button class="read-more-btn" onclick="toggleReadMore('update-full-${index}', this)">
                        Read more
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    this.updatesContainer.innerHTML = updatesHTML;
  }

  renderDiaries(diaries) {
    if (!this.diariesContainer) return;

    const diariesHTML = diaries
      .map(
        (diary, index) => `
            <div class="news-card">
                <div class="news-content">
                    <div class="news-date">${diary.date}</div>
                    <h3 class="news-title">${diary.title}</h3>
                    <p class="news-excerpt">${diary.excerpt}</p>
                    <div class="news-full" id="diary-full-${index}">
                        ${diary.fullText}
                    </div>
                    <button class="read-more-btn" onclick="toggleReadMore('diary-full-${index}', this)">
                        Read more
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    this.diariesContainer.innerHTML = diariesHTML;
  }

  renderDefaultUpdates() {
    if (!this.updatesContainer) return;

    const defaultUpdates = [
      {
        title: "New 3D Puzzle Collection Released!",
        date: "January 15, 2025",
        excerpt:
          "We're excited to announce our biggest update yet - the Nature Collection! Players can now solve stunning 3D puzzles featuring beautiful landscapes and wildlife scenes.",
        fullText:
          "The Nature Collection introduces 20 brand new 3D puzzles featuring breathtaking landscapes, majestic wildlife, and serene natural scenes. Each puzzle is carefully crafted with realistic 3D graphics that bring the beauty of nature to life. The new collection includes puzzles ranging from beginner-friendly 50-piece challenges to complex 500-piece masterpieces. We've also added new puzzle-solving tools and hints system to help players of all skill levels. The collection celebrates the diversity of our planet's ecosystems, from lush rainforests to arid deserts. Early feedback from our community has been overwhelmingly positive, with players praising the stunning visuals and engaging gameplay mechanics.",
        image: "Puzzle-card1.jpg",
      },
      {
        title: "Enhanced 3D Graphics Engine",
        date: "January 10, 2025",
        excerpt:
          "Our development team has completely overhauled the 3D graphics engine, delivering even more realistic and immersive puzzle-solving experiences.",
        fullText:
          "The new 3D graphics engine brings unprecedented realism to our puzzle game. Every piece now features detailed textures, realistic lighting, and smooth animations. The enhanced engine supports dynamic lighting that changes based on the time of day, creating a more immersive experience. We've also improved the piece-fitting mechanics, making assembly feel more natural and satisfying. The new engine is optimized for both desktop and mobile devices, ensuring smooth performance across all platforms. Players will notice improved visual quality, faster loading times, and more responsive controls. This update represents our commitment to providing the best possible puzzle-solving experience.",
        image: "Puzzle-card2.jpg",
      },
      {
        title: "Educational Puzzle Mode Launched",
        date: "January 5, 2025",
        excerpt:
          "Introducing our new Educational Mode, designed specifically for schools and families to promote cognitive development and problem-solving skills.",
        fullText:
          "The Educational Mode features specially designed puzzles that focus on developing spatial reasoning, pattern recognition, and logical thinking skills. Each puzzle includes educational content about the subject matter, from historical landmarks to scientific concepts. The mode includes progress tracking, difficulty adjustment, and detailed feedback on solving strategies. We've partnered with educational experts to ensure the content is both engaging and beneficial for cognitive development. The mode is perfect for classroom use, homeschooling, or family learning activities. Teachers can create custom puzzle sets and track student progress through our new dashboard feature.",
        image: "Puzzle-card3.jpg",
      },
    ];

    this.renderUpdates(defaultUpdates);
  }

  renderDefaultDiaries() {
    if (!this.diariesContainer) return;

    const defaultDiaries = [
      {
        title: "Community Spotlight: Puzzle Master Sarah",
        date: "January 12, 2025",
        excerpt:
          "Meet Sarah, a retired teacher who has completed over 200 puzzles and inspired countless others to discover the joy of 3D puzzle solving.",
        fullText:
          "Sarah discovered our 3D Jigsaw Puzzle game during the pandemic and quickly became one of our most dedicated players. As a former teacher, she recognized the educational value of puzzle-solving and began using our game to help her grandchildren develop problem-solving skills. Sarah has completed every puzzle in our collection, often multiple times, and has become a mentor to new players in our community. She regularly shares solving strategies and encourages others to persevere through challenging puzzles. 'The 3D aspect makes it feel like you're really building something,' Sarah says. 'It's incredibly satisfying when all the pieces come together.' Her story inspires us to continue creating engaging and educational puzzle experiences.",
        image: "Puzzle-card4.jpg",
      },
      {
        title: "Behind the Scenes: Creating the Perfect Puzzle",
        date: "January 8, 2025",
        excerpt:
          "Ever wondered how we design our 3D puzzles? Our development team shares insights into the creative process behind our most popular puzzles.",
        fullText:
          "Creating a 3D puzzle is a complex process that begins with careful planning and research. Our team starts by selecting subjects that will be both visually appealing and educationally valuable. We then create detailed 3D models, ensuring each piece fits perfectly with its neighbors while maintaining the overall image integrity. The cutting pattern is crucial - it must provide enough challenge without being frustrating. We test each puzzle extensively with players of different skill levels to ensure the perfect balance of difficulty and enjoyment. The final step involves adding realistic textures and lighting to bring the puzzle to life. This process can take weeks or even months for complex puzzles, but the result is worth every minute of effort.",
        image: "Puzzle-card1.jpg",
      },
      {
        title: "Puzzle Therapy: The Mental Health Benefits",
        date: "January 3, 2025",
        excerpt:
          "Discover how our 3D puzzles are helping players reduce stress, improve focus, and enhance their mental well-being through mindful puzzle-solving.",
        fullText:
          "Recent studies have shown that puzzle-solving can have significant mental health benefits, including stress reduction and improved cognitive function. Our 3D puzzles take these benefits to the next level by providing an immersive, tactile-like experience. Players report feeling a sense of accomplishment and calm while working on our puzzles. The 3D nature of our puzzles requires focused attention, which can help players practice mindfulness and reduce anxiety. Many players use our game as a form of digital therapy, finding solace in the methodical process of piece assembly. We're proud to contribute to mental wellness through our carefully crafted puzzle experiences.",
        image: "Puzzle-card2.jpg",
      },
    ];

    this.renderDiaries(defaultDiaries);
  }
}

// Modal functionality
function showModal(content, title, image = null) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            ${
              image
                ? `<img src="./pict/${image}" alt="${title}" class="modal-image">`
                : ""
            }
            <h2>${title}</h2>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector(".close");
  closeBtn.onclick = function () {
    closeModal();
  };

  modal.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  function closeModal() {
    document.body.removeChild(modal);
  }
}

// Toggle read more functionality
function toggleReadMore(elementId, button) {
  const element = document.getElementById(elementId);
  const card = element.closest(".news-card");
  const title = card.querySelector(".news-title").textContent;
  const content = element.innerHTML;

  // Get image based on title
  let image = null;
  if (title.includes("New 3D Puzzle Collection")) {
    image = "Puzzle-card1.jpg";
  } else if (title.includes("Enhanced 3D Graphics")) {
    image = "Puzzle-card2.jpg";
  } else if (title.includes("Educational Puzzle Mode")) {
    image = "Puzzle-card3.jpg";
  } else if (title.includes("Community Spotlight")) {
    image = "Puzzle-card4.jpg";
  }

  showModal(content, title, image);
}

// Initialize news page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new NewsPageManager();
});
