/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
});


// Get button, form, and confirmation message elements
   const scheduleButton = document.getElementById('scheduleButton');
   const appointmentForm = document.getElementById('appointmentForm');
   const confirmationMessage = document.getElementById('confirmationMessage');

   // Show the form when the "Schedule Appointment" button is clicked
   scheduleButton.addEventListener('click', function () {
       appointmentForm.style.display = 'block'; // Show the form
       scheduleButton.style.display = 'none'; // Hide the "Schedule Appointment" button
   });

   // Handle form submission
   appointmentForm.addEventListener('submit', function (e) {
       e.preventDefault(); // Prevent form submission (default behavior)
       
       // Get the values from the date and time fields
       const date = document.getElementById('date').value;
       const time = document.getElementById('time').value;

       // Display confirmation message
       if (date && time) {
           confirmationMessage.style.display = 'block';
           confirmationMessage.textContent = `Your appointment is scheduled for ${date} at ${time}.`;
       }
   });

   window.addEventListener('load', function () {
    document.getElementById('appointmentForm').reset();
});

   const appointmentForm = document.getElementById('appointmentForm');
   const confirmationMessage = document.getElementById('confirmationMessage');

   appointmentForm.addEventListener('submit', function (e) {
       e.preventDefault(); // Prevent form submission
       
       const date = document.getElementById('date').value;
       const time = document.getElementById('time').value;

       if (date && time) {
           confirmationMessage.style.display = 'block';
           confirmationMessage.textContent = `Your appointment is scheduled for ${date} at ${time}.`;
           appointmentForm.reset(); // Clear the form
       }
   });

   // Clear the form on page refresh
   window.addEventListener('load', function () {
       appointmentForm.reset();
   });