// script.js

// Example: Function to toggle a dark mode
function toggleDarkMode() {
 document.body.classList.toggle('dark-mode');
}

// Example: Function to handle form submission
function handleSubmit(event) {
 event.preventDefault();
 var inputValue = document.getElementById('searchInput').value.toLowerCase();
 var listItems = document.querySelectorAll('#file-system ul li');
 
 listItems.forEach(function(item) {
     var text = item.textContent.toLowerCase();
     if (text.includes(inputValue)) {
         item.style.display = 'block';
     } else {
         item.style.display = 'none';
     }
 });
}
