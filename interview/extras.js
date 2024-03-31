// Handle user registration
        // signupForm.addEventListener('submit', function (event) {
        //     event.preventDefault(); // Prevent default form submission

        //     const username = document.getElementById('signupUsername').value;
        //     const email = document.getElementById('signupEmail').value;
        //     const password = document.getElementById('signupPassword').value;

        //     // Get existing users from localStorage or initialize an empty array
        //     const users = JSON.parse(localStorage.getItem('users')) || [];

        //     // Check if the username or email is already registered
        //     const isExistingUser = users.some(user => user.username === username || user.email === email);
        //     if (isExistingUser) {
        //         alert('Username or Email already exists. Please use a different one.');
        //         return;
        //     }

        //     // Create a new user object
        //     const newUser = { username, email, password };

        //     // Add the new user to the list of users
        //     users.push(newUser);

        //     // Save the updated list of users to localStorage
        //     localStorage.setItem('users', JSON.stringify(users));

        //     // Redirect the user to the login page after successful registration
        //     window.location.href = 'login.html';
        // });






        // const loginBtn = document.getElementById('loginBtn');
//         const signupBtn = document.getElementById('signupBtn');
//         const loginForm = document.getElementById('loginForm');
//         const signupForm = document.getElementById('signupForm');
//         const userInfo = document.getElementById('userInfo');

//         loginBtn.addEventListener('click', () => {
//             loginForm.classList.remove('hidden');
//             signupForm.classList.add('hidden');
//             loginBtn.classList.add('bg-blue-500', 'text-white');
//             signupBtn.classList.remove('bg-green-500', 'text-white');
//         });

//         signupBtn.addEventListener('click', () => {
//             signupForm.classList.remove('hidden');
//             loginForm.classList.add('hidden');
//             signupBtn.classList.add('bg-green-500', 'text-white');
//             loginBtn.classList.remove('bg-blue-500', 'text-white');
//         });
        


//         // Check if the user is logged in
//         const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

//         if (loggedInUser) {
//             // Hide login/signup buttons and show user info
//             userInfo.innerText = `Welcome, ${loggedInUser.username}`;
//             userInfo.classList.remove('hidden');
//             loginBtn.classList.add('hidden');
//             signupBtn.classList.add('hidden');
//         } else {
//             // Show login/signup buttons and hide user info
//             userInfo.classList.add('hidden');
//             loginBtn.classList.remove('hidden');
//             signupBtn.classList.remove('hidden');
//         }

//         loginBtn.addEventListener('click', () => {
//             loginForm.classList.remove('hidden');
//             signupForm.classList.add('hidden');
//             loginBtn.classList.add('bg-blue-500', 'text-white');
//             signupBtn.classList.remove('bg-green-500', 'text-white');
//         });

//         signupBtn.addEventListener('click', () => {
//             signupForm.classList.remove('hidden');
//             loginForm.classList.add('hidden');
//             signupBtn.classList.add('bg-green-500', 'text-white');
//             loginBtn.classList.remove('bg-blue-500', 'text-white');
//         });

        
//         // Handle user registration
// signupForm.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent default form submission

//     const username = document.getElementById('signupUsername').value;
//     const email = document.getElementById('signupEmail').value;
//     const password = document.getElementById('signupPassword').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;

//     // Check if password and confirm password match
//     if (password !== confirmPassword) {
//         alert('Password and Confirm Password do not match.');
//         return;
//     }

//     // Get existing users from localStorage or initialize an empty array
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     // Check if the username or email is already registered
//     const isExistingUser = users.some(user => user.username === username || user.email === email);
//     if (isExistingUser) {
//         alert('Username or Email already exists. Please use a different one.');
//         return;
//     }

//     // Create a new user object
//     const newUser = { username, email, password };

//     // Add the new user to the list of users
//     users.push(newUser);

//     // Save the updated list of users to localStorage
//     localStorage.setItem('users', JSON.stringify(users));

//     // Redirect the user to the login page after successful registration
//     window.location.href = 'login.html';
// });


//         // Handle user login
//         loginForm.addEventListener('submit', function (event) {
//             event.preventDefault(); // Prevent default form submission

//             const usernameOrEmail = document.getElementById('loginUsername').value;
//             const password = document.getElementById('loginPassword').value;

//             // Get existing users from localStorage
//             const users = JSON.parse(localStorage.getItem('users')) || [];

//             // Check if the username or email and password match
//             const loggedInUser = users.find(user => (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password);

//             if (loggedInUser) {
//                 // Save logged in user to localStorage
//                 localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

//                 // Show alert for successful login
//                 alert('Login successful');

//                 // Redirect the user to index.html after successful login
//                 window.location.href = 'index.html';
//             } else {
//                 // User is not found or password is incorrect
//                 alert('Invalid username/email or password. Please try again.');
//             }
//         });








  //  function logout() {
        //     // Clear the logged-in user from local storage
        //     localStorage.removeItem('loggedInUser');
            
        //     // Show login/signup buttons and hide user info
        //     const loginBtn = document.getElementById('loginBtn');
        //     const signupBtn = document.getElementById('signupBtn');
        //     const logoutBtn = document.getElementById('logoutBtn');
        //     const userInfo = document.getElementById('userInfo');

        //     userInfo.classList.add('hidden');
        //     loginBtn.style.display = 'inline-block';
        //     signupBtn.style.display = 'inline-block';
        //     logoutBtn.style.display = 'none';
        // }

        // // Check if the user is logged in
        // const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
        // if (loggedInUser) {
        //     // If user is logged in, display welcome message with username and remove login/signup button
        //     const navbarButtons = document.getElementById('navbarButtons');
        //     const welcomeMessage = document.createElement('span');
        //     welcomeMessage.innerText = `Welcome, ${loggedInUser.username}`;
        //     navbarButtons.appendChild(welcomeMessage);
        // } else {
        //     // If user is not logged in, display login/signup button
        //     const navbarButtons = document.getElementById('navbarButtons');
        //     const loginButton = document.createElement('button');
        //     loginButton.innerText = 'Login/Signup';
        //     loginButton.addEventListener('click', () => {
        //         window.location.href = 'login.html';
        //     });
        //     navbarButtons.appendChild(loginButton);
        // }