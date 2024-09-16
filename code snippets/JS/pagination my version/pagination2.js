// Sample questions array
const questions = [
  "Question 1",
  "Question 2",
  "Question 3",
  "Question 4",
  "Question 5",
  "Question 6",
  "Question 7",
  "Question 8",
  "Question 9",
  "Question 10",
  // Add more questions as needed
];

// Number of items to display per page
const itemsPerPage = 1;

// Current page
let currentPage = 1;

// Function to display questions for the current page
function displayQuestions() {
  const questionsContainer = document.getElementById('questions-container');
  questionsContainer.innerHTML = '';

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, questions.length);

  for (let i = startIndex; i < endIndex; i++) {
      questionsContainer.innerHTML += `<p>${questions[i]}</p>`;
  }
}

// Function to generate pagination
function generatePagination() {
  const paginationElement = document.getElementById('pagination');
  paginationElement.innerHTML = '';

  // Calculate number of pages
  const totalPages = Math.ceil(questions.length / itemsPerPage);

  // Calculate start and end page numbers to display
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 5);

  // Adjust startPage and endPage if we're at the beginning or end
  if (endPage - startPage < 5) {
      startPage = Math.max(1, endPage - 5);
  }

  // Previous button
  if (currentPage > 1) {
      paginationElement.innerHTML += `<button onclick="changePage(${currentPage - 1})">Previous</button>`;
  }

  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
      paginationElement.innerHTML += `<button onclick="changePage(${i})">${i}</button>`;
  }

  // Next button
  if (currentPage < totalPages) {
      paginationElement.innerHTML += `<button onclick="changePage(${currentPage + 1})">Next</button>`;
  }
}

// Function to change page
function changePage(page) {
  currentPage = page;
  displayQuestions();
  generatePagination();
}

// Initial display
displayQuestions();
generatePagination();