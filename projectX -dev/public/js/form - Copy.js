const loader = document.querySelector(".loader");

// select inputs
const submitBtn = document.querySelector(".submit-btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const number = document.querySelector("#number");
const tac = document.querySelector("#terms-and-cond");
const notification = document.querySelector("#notification");

submitBtn.addEventListener("click", () => {
  if (name.value.length < 3) {
    showAlert("name must be 3 letters long");
  } else if (!email.value.length) {
    showAlert("enter your email");
  } else if (password.value.length < 8) {
    showAlert("password should be 8 letters long");
  } else if (!number.value.length) {
    showAlert("enter your phone number");
  } else if (!Number(number.value) || number.value.length < 10) {
    showAlert("invalid number, please enter valid one");
  } else if (!tac.checked) {
    showAlert("you must agree to our terms and conditions");
  } else {
    // submit form
    loader.style.display = "block";
    sendData("/signup", {
      name: name.value,
      email: email.value,
      password: password.value,
      number: number.value,
      tac: tac.checked,
      notification: notification.checked,
      seller: false,
    });
  }
});

/**
 * Sends data to the specified path using POST method and JSON format.
 * @param {string} path - The path where the data should be sent.
 * @param {object} data - The data to be sent.
 */
const sendData = (path, data) => {
  fetch(path, {
    method: "post", // Use POST method
    headers: new Headers({ "Content-Type": "application/json" }), // Set the Content-Type header to indicate JSON format
    body: JSON.stringify(data), // Convert the data to JSON string
  })
    .then((res) => res.json()) // Parse the response as JSON
    .then((response) => {
      processData(response); // Process the response data
    });
};

const processData = (data) => {
  loader.style.display = null;
  if (data.alert) {
    showAlert(data.alert);
  } else if (data.name) {
    console.log(data);
  }
};

// alert function
const showAlert = (msg) => {
  let alertBox = document.querySelector(".alert-box");
  let alertMsg = document.querySelector(".alert-msg");
  alertMsg.innerHTML = msg;
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
};
