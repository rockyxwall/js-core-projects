const btnAdd = document.querySelector(".btn-add");
const inputTitle = document.getElementById("mangaTitle");
const inputChaptersRead = document.getElementById("chaptersRead");

btnAdd.addEventListener("click", () => {
  // IF TITILE IS EMPTY
  if (inputTitle.value.trim() === "") return console.log("no titile");
  //  * Create a div in javascript
  const addMangaItem = document.createElement("div");
  const addMangaInfo = document.createElement("div");
  const addMangaTitle = document.createElement("div");
  const addMangaChapters = document.createElement("div");
  const addMangaActions = document.createElement("div");
  const addBtnEdit = document.createElement("div");
  const addBtnDelete = document.createElement("div");
  //  * Add a class to the created div
  addMangaItem.className = "manga-item";
  addMangaInfo.className = "manga-info";
  addMangaTitle.className = "manga-title";
  addMangaChapters.className = "manga-chapters";
  addMangaActions.className = "manga-actions";
  addBtnEdit.className = "btn-edit";
  addBtnDelete.className = "btn-delete";
  // * Add Typed Inputs to the created dev
  // For title
  addMangaTitle.textContent = inputTitle.value;
  // For Chapter
  addMangaChapters.textContent = "Chapters: " + inputChaptersRead.value;
  // * Inside Action> btns
  addBtnEdit.textContent = "Edit";
  addBtnDelete.textContent = "Delete";
  //  * Add the dev inside antoher dev
  document.getElementById("mangaContainer").appendChild(addMangaItem);
  addMangaItem.appendChild(addMangaInfo);
  addMangaInfo.appendChild(addMangaTitle);
  addMangaInfo.appendChild(addMangaChapters);
  addMangaItem.appendChild(addMangaActions);
  addMangaActions.appendChild(addBtnEdit);
  addMangaActions.appendChild(addBtnDelete);
});
