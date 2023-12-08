const loadCategories = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await res.json();
  const categories = data.data;

  categories.forEach((category) => {
    const categorycontainer = document.getElementById("btn-container");
    const categoryBtn = document.createElement("button");
    categoryBtn.innerHTML = `
            <button class="btn btn-active  btn-ghost" onclick="loadCards('${category.category_id}')">${category.category}</button>
            
        `;
    categorycontainer.appendChild(categoryBtn);
  });
};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const loadCards = async (id) => {
  const drawContainer = document.getElementById("drow-container");
  drawContainer.innerHTML = "";
  if (id === "1005") {
    drawContainer.innerHTML = `
      <div class="mx-auto container text-center">
        <div class="flex justify-center items-center">
          <img src="Icon.png" alt="Icon">
        </div>
        <p class="text-2xl">Ops....there is no content pleas try to another button</p>
      </div>
    `;
  }
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  const cards = data.data;

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  function convertTominTosec(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let result = "";
    if (days > 0) {
      result += days + " days, ";
    }
    result += hours + " hours, " + minutes + " minutes";
    if (remainingSeconds > 0) {
      result += " and " + remainingSeconds + " seconds";
    }

    return result;
  }

  cards.forEach((card) => {
    const categoryCard = document.createElement("div");
    categoryCard.classList = `card bg-base-100 shadow-xl`;
    const author = card.authors[0];

    const title = card.title || "";

    const postedDate = card.others?.posted_date || "";

    const views = card.others?.views || "";
    categoryCard.innerHTML = `
      <figure class="flex flex-col ">
          <div class="relative">
              <img class="h-44 w-full" src="${card.thumbnail}" alt="Shoes" />
          </div>
          <div>
              ${
                card?.others?.posted_date > 0
                  ? `<div class="bg-black text-xs text-white absolute  top-[135px] p-1 rounded right-4">${convertTominTosec(
                      card.others.posted_date
                    )}</div>`
                  : ""
              }
          </div>
      </figure>
      
      <div class="flex justify-between items-center gap-6 mt-6 m-2">
          <figure>
              <img
                  class="w-12 h-12 rounded-full"
                  src="${card.authors[0].profile_picture}"
                  alt="Shoes"
              />
          </figure>
          <div class="flex-1">
              <h2 class="card-title">${card?.title}</h2>
              <div class="flex  gap-1">
                  <h2>${card.authors[0].profile_name}</h2>
                  <h2 class="card-title">${
                    card.authors[0].verified
                      ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_11_335)">
                          <path d="M19.375 10C19.375 10.8 18.3922 11.4594 18.1953 12.1969C17.9922 12.9594 18.5063 14.0219 18.1203 14.6891C17.7281 15.3672 16.5484 15.4484 15.9984 15.9984C15.4484 16.5484 15.3672 17.7281 14.6891 18.1203C14.0219 18.5063 12.9594 17.9922 12.1969 18.1953C11.4594 18.3922 10.8 19.375 10 19.375C9.2 19.375 8.54062 18.3922 7.80312 18.1953C7.04062 17.9922 5.97813 18.5063 5.31094 18.1203C4.63281 17.7281 4.55156 16.5484 4.00156 15.9984C3.45156 15.4484 2.27187 15.3672 1.87969 14.6891C1.49375 14.0219 2.00781 12.9594 1.80469 12.1969C1.60781 11.4594 0.625 10.8 0.625 10C0.625 9.2 1.60781 8.54062 1.80469 7.80312C2.00781 7.04062 1.49375 5.97813 1.87969 5.31094C2.27187 4.63281 3.45156 4.55156 4.00156 4.00156C4.55156 3.45156 4.63281 2.27187 5.31094 1.87969C5.97813 1.49375 7.04062 2.00781 7.80312 1.80469C8.54062 1.60781 9.2 0.625 10 0.625C10.8 0.625 11.4594 1.60781 12.1969 1.80469C12.9594 2.00781 14.0219 1.49375 14.6891 1.87969C15.3672 2.27187 15.4484 3.45156 15.9984 4.00156C16.5484 4.55156 17.7281 4.63281 18.1203 5.31094C18.5063 5.97813 17.9922 7.04062 18.1953 7.80312C18.3922 8.54062 19.375 9.2 19.375 10Z" fill="#2568EF"/>
                          <path d="M12.7094 7.20626L9.14062 10.775L7.29062 8.92657C6.88906 8.52501 6.23749 8.52501 5.83593 8.92657C5.43437 9.32814 5.43437 9.9797 5.83593 10.3813L8.43124 12.9766C8.82187 13.3672 9.45624 13.3672 9.84687 12.9766L14.1625 8.66095C14.5641 8.25939 14.5641 7.60782 14.1625 7.20626C13.7609 6.8047 13.1109 6.8047 12.7094 7.20626Z" fill="#FFFCEE"/>
                      </g>
                      <defs>
                          <clipPath id="clip0_11_335">
                              <rect width="20" height="20" fill="white"/>
                          </clipPath>
                      </defs>
                  </svg>`
                      : ""
                  }</h2>
              </div>
              <h2 class="">${card.others.views} views</h2>
          </div>
      </div>
  `;
    cardContainer.appendChild(categoryCard);
  });

  // start
  let isDescendingOrder = true;

  document.getElementById("sort-btn").addEventListener("click", () => {
    isDescendingOrder = !isDescendingOrder;

    cards.sort((a, b) => {
      const numA = parseFloat(a.others.views);
      const numB = parseFloat(b.others.views);
      return isDescendingOrder ? numB - numA : numA - numB;
    });

    const sortBtn = document.getElementById("sort-btn");
    sortBtn.textContent = `SORT BY ${isDescendingOrder ? "ASCENDING" : "DESCENDING"} ORDER`;

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    cards.forEach((card) => {
      const categoryCard = document.createElement("div");
      categoryCard.classList = `card bg-base-100 shadow-xl`;
      const author = card.authors[0];

      const title = card.title || "";

      const postedDate = card.others?.posted_date || "";

      const views = card.others?.views || "";
      categoryCard.innerHTML = `
            <figure class="flex flex-col ">
                <div class="relative">
                    <img class="h-44 w-full" src="${
                      card.thumbnail
                    }" alt="Shoes" />
                </div>
                <div>
                    ${
                      card?.others?.posted_date
                        ? `<div class="bg-black text-white absolute top-[135px] p-1 rounded right-4">${convertTominTosec(
                            card.others.posted_date
                          )}</div>`
                        : ""
                    }
                </div>
            </figure>
            
            <div class="flex justify-between items-center gap-6 mt-6 m-2">
                <figure>
                    <img
                        class="w-12 h-12 rounded-full"
                        src="${card.authors[0].profile_picture}"
                        alt="Shoes"
                    />
                </figure>
                <div class="flex-1">
                    <h2 class="card-title">${card?.title}</h2>
                    <div class="flex  gap-1">
                        <h2>${card.authors[0].profile_name}</h2>
                        <h2 class="card-title">${
                          card.authors[0].verified
                            ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_11_335)">
                            <path d="M19.375 10C19.375 10.8 18.3922 11.4594 18.1953 12.1969C17.9922 12.9594 18.5063 14.0219 18.1203 14.6891C17.7281 15.3672 16.5484 15.4484 15.9984 15.9984C15.4484 16.5484 15.3672 17.7281 14.6891 18.1203C14.0219 18.5063 12.9594 17.9922 12.1969 18.1953C11.4594 18.3922 10.8 19.375 10 19.375C9.2 19.375 8.54062 18.3922 7.80312 18.1953C7.04062 17.9922 5.97813 18.5063 5.31094 18.1203C4.63281 17.7281 4.55156 16.5484 4.00156 15.9984C3.45156 15.4484 2.27187 15.3672 1.87969 14.6891C1.49375 14.0219 2.00781 12.9594 1.80469 12.1969C1.60781 11.4594 0.625 10.8 0.625 10C0.625 9.2 1.60781 8.54062 1.80469 7.80312C2.00781 7.04062 1.49375 5.97813 1.87969 5.31094C2.27187 4.63281 3.45156 4.55156 4.00156 4.00156C4.55156 3.45156 4.63281 2.27187 5.31094 1.87969C5.97813 1.49375 7.04062 2.00781 7.80312 1.80469C8.54062 1.60781 9.2 0.625 10 0.625C10.8 0.625 11.4594 1.60781 12.1969 1.80469C12.9594 2.00781 14.0219 1.49375 14.6891 1.87969C15.3672 2.27187 15.4484 3.45156 15.9984 4.00156C16.5484 4.55156 17.7281 4.63281 18.1203 5.31094C18.5063 5.97813 17.9922 7.04062 18.1953 7.80312C18.3922 8.54062 19.375 9.2 19.375 10Z" fill="#2568EF"/>
                            <path d="M12.7094 7.20626L9.14062 10.775L7.29062 8.92657C6.88906 8.52501 6.23749 8.52501 5.83593 8.92657C5.43437 9.32814 5.43437 9.9797 5.83593 10.3813L8.43124 12.9766C8.82187 13.3672 9.45624 13.3672 9.84687 12.9766L14.1625 8.66095C14.5641 8.25939 14.5641 7.60782 14.1625 7.20626C13.7609 6.8047 13.1109 6.8047 12.7094 7.20626Z" fill="#FFFCEE"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_11_335">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>`
                            : ""
                        }</h2>
                    </div>
                    <h2 class="">${card.others.views} views</h2>
                </div>
            </div>
        `;
      cardContainer.appendChild(categoryCard);
    });
  });

  // end
};

const displayCards = (cards) => {};

loadCards("1000");
loadCategories(); //category

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});
