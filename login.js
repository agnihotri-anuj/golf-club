$(document).ready(function() {
  // Validate login form
  $('#loginForm').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      },
      password: {
        required: 'Please enter your password',
        minlength: 'Your password must be at least 6 characters long'
      }
    },
    submitHandler: function(form) {
      // Do something when form is valid
      alert('Login successful!');
    }
  });
});
