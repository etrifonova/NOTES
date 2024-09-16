// Get the <ul> element
const paginationList = document.getElementById('paginationList');
const pageNumbers = document.querySelector(".pageNumbers")
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const questions = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
  { id: 21 },
  { id: 22 },
  { id: 23 },
  { id: 24 },
  { id: 25 },
  { id: 26 },
  { id: 27 },
  { id: 28 },
  { id: 29 },
  { id: 30 }
];

let listItems = [];
// Generate list items from 1 to 30
for (let i = 1; i <= questions.length; i++) {
    // Create a new <li> element
    const listItem = document.createElement('li');
    listItems.push(listItem);

    // Set the text content to the current number
    listItem.textContent = i;

    // Append the <li> element to the <ul> element
    paginationList.appendChild(listItem);
}


const contentLimit = 7;
const pageCount = Math.ceil(listItems.length / contentLimit);
let currentPage = 1;

const displayPageNumbers = (index) => {
  const pageNumber = document.createElement("a");
  pageNumber.innerText = index;
  pageNumber.setAttribute("href", "#");
  pageNumber.setAttribute("index", index);
  pageNumbers.appendChild(pageNumber);
}

const getPageNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    displayPageNumbers(i);
  };
};

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const controlButtonsStatus = () => {
  if(currentPage == 1) {
    disableButton(prevButton);
  }
  else {
    enableButton(prevButton);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
  }
  else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll("a").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("index"));

    if (pageIndex == currentPage) {
      button.classList.add("active")
    }
  })
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  controlButtonsStatus();

  const prevRange = (pageNum - 1) * contentLimit;
  const currRange = pageNum * contentLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPageNumbers();
  setCurrentPage();

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll("a").forEach((button) => {
    const pageIndex = Number(button.getAttribute("index"));

    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      })
    };

  });
});

