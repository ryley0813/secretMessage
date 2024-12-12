function toggleMessage() {
    var heading = document.querySelector('.heading');
    var message = document.querySelector('.message');

    // Toggle visibility of the elements
    if (heading.style.display === 'none' || message.style.display === 'none') {
        heading.style.display = 'block';
        message.style.display = 'block';
    } else {
        heading.style.display = 'none';
        message.style.display = 'none';
    }
}