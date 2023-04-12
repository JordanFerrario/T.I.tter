const mediaContainer = document.getElementById("media-container");
const imageUrls = [
    
]

for (let i = 0; i < 23; i++) {
  const article = document.createElement("article");
  article.className = "media";
  article.innerHTML = `
    <figure class="media-left">
      <p class="image is-64x64">
        <a href="C:\\Users\\Jordan\\projects\\ti4-senpai\\pages\\factions\\arborec.html">
          <img src="C:\\Users\\Jordan\\projects\\ti4-senpai\\assets\\Arborec.png">
        </a>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Arborec</strong> <small>@plantpeople420</small>
          <br>
          indica or sativa?
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
        </div>
      </nav>
    </div>
  `;
  mediaContainer.appendChild(article);
}
