document.addEventListener("DOMContentLoaded", initializeAllSliders);

    const toggles = document.querySelectorAll('.theme');
    toggles.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    });

    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    const megaToggles = document.querySelectorAll('.menu-mega-toggle');
    megaToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const dropdown = toggle.nextElementSibling;
            const arrow = toggle.querySelector('.arrow');
            dropdown.classList.toggle('active');
            arrow.classList.toggle('rotated')
        });
    });

    const searchContainer = document.getElementById("search-container");
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("mainSearchInput");
    const clearButton = document.getElementById("clearButton");
    const cancelButton = document.getElementById("cancelButton");

    searchIcon.addEventListener("click", () => {
    searchContainer.classList.toggle("hidden");
    searchInput.focus();
    });

    clearButton.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    });

    cancelButton.addEventListener("click", () => {
    searchContainer.classList.add("hidden");
    searchInput.value = "";
    });

    const searchInput2 = document.getElementById("mainSearchInput");
    const trendingItems = document.querySelectorAll(".trending-list li");

    searchInput2.addEventListener("input", () => {
        const keyword = searchInput2.value.toLowerCase();
        trendingItems.forEach(item => {
            const pair = item.querySelector(".pair").textContent.toLowerCase();
            item.style.display = pair.includes(keyword) ? "flex" : "none";
        });
    });

    const closeBtn = document.querySelector('.close');
    const openBtn = document.querySelector('.button-open');
    const box = document.querySelector('.box');
    const overlay = document.querySelector('.overlay');

    closeBtn.addEventListener('click', () => {
        box.style.display = 'none';
        overlay.style.display = 'none';
    });
    openBtn.addEventListener('click', () => {
        box.style.display = 'flex';
        overlay.style.display = 'block';
    });

let selectedTab = "trending";
let selectedTime = "24H";

document.querySelectorAll(".nft-filter-tab button").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedTab = btn.dataset.tab;
    document.querySelectorAll(".nft-filter-tab button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderNFTList();
  });
});

document.querySelectorAll(".nft-filter-time button").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedTime = btn.dataset.time;
    document.querySelectorAll(".nft-filter-time button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderNFTList();
  });
});
function renderNFTList() {
  const list = nftList[selectedTab];
  const mid = Math.ceil(list.length / 2);
  document.getElementById("left-column").innerHTML = "";
  document.getElementById("right-column").innerHTML = "";
  list.forEach((item, i) => {
    const col = i < mid ? "left-column" : "right-column";
    document.getElementById(col).innerHTML += `
      <div class="nft-row">
        <div class="nft-name">
          <span style="color: orange;">${item.rank}</span>
          <img src="${item.logo}" class="collections-logo" />
          <span>${item.name}</span>
        </div>
        <div class="nft-cell">
          <div>${item.floor[selectedTime]}</div>
          <div class="${item.floorChange[selectedTime].includes('+') ? 'green' : 'red'}">
            ${item.floorChange[selectedTime]}
          </div>
        </div>
        <div class="nft-cell">
          <div>${item.volume[selectedTime]}</div>
          <div class="${item.volumeChange[selectedTime].includes('+') ? 'green' : 'red'}">
            ${item.volumeChange[selectedTime]}
          </div>
        </div>
      </div>
    `;
  });
}

renderNFTList();