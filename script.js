// script.js
document.getElementById('callButton').addEventListener('click', function() {
    // Replace '1234567890' with the phone number you want to call
    var phoneNumber = '1234567890';
  
    // Use the tel: URI scheme to open the phone dialer
    window.location.href = 'tel:' + phoneNumber;
  });
  