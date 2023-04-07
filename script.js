// Add event listener to run code when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the heading and paragraph elements
    const heading = document.querySelector('h1');
    const paragraph = document.querySelector('p');
    
    // Update the heading and paragraph text when a button is clicked
    const button = document.querySelector('button');
    button.addEventListener('click', function() {
      heading.textContent = 'New Heading';
      paragraph.textContent = 'This is some new paragraph text.';
    });
  });
  