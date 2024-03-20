$(document).ready(function() {
  // Validate signup form
  $('#signupForm').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      },
      confirmPassword: {
        required: true,
        equalTo: '#password'
      }
    },
    messages: {
      name: {
        required: 'Please enter your name'
      },
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      },
      password: {
        required: 'Please enter your password',
        minlength: 'Your password must be at least 6 characters long'
      },
      confirmPassword: {
        required: 'Please confirm your password',
        equalTo: 'Your passwords do not match'
      }
    },
    submitHandler: function(form) {
      // Do something when form is valid
      alert('Signup successful!');
    }
  });
});
