// Share and Maps section
const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");
const mapsBtn = document.querySelector(".maps-btn");

function init() {
  const img = document.querySelector(".img");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI(document.getElementById("title").textContent);
  let postImg = encodeURI(img.src);
  let location = encodeURI(document.getElementById("location").textContent);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  pinterestBtn.setAttribute(
    "href",
    `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
  );

  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );

  mapsBtn.setAttribute(
    "href",
    `https://www.google.com/maps?q=${location}&ie=UTF8`
  );
}

init();

//Comment Section

commentInput.addEventListener("keyup", (event) => {if (event.key == "Enter") {addComment();}});

function addComment() {
  const commentInput = document.getElementById("commentInput");
  const commentText = commentInput.value.trim();

  if (commentText !== "") {
      const commentsContainer = document.getElementById("comments");
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
      commentDiv.innerHTML = `
          <div>${commentText}</div>
          <div class="comment-actions">
              <span class="material-symbols-outlined" onclick="deleteComment(this)">delete</span>
          </div>
      `;
      commentsContainer.appendChild(commentDiv);
      commentInput.value = "";
      
      window.scrollTo(0, document.body.scrollHeight);
  }
}

function deleteComment(button) {
  const commentDiv = button.closest(".comment");
  commentDiv.remove();
}
