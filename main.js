const form = document.querySelector(".right-col");
const inputs = document.querySelectorAll(".right-col form input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
      if (input.type == "email") {
        if (checkmail(input.value)) {
          input.parentElement.classList.remove("error");
        } else {
          input.parentElement.classList.add("error");
        }
      }
    }
  });
});

function checkmail($value) {
  $value = trim($value);
  if (
    stristr($value, "@") &&
    stristr($value, ".") &&
    strrpos($value, ".") - stripos($value, "@") > 2 &&
    stripos($value, "@") > 1 &&
    strlen($value) - strrpos($value, ".") < 6 &&
    strlen($value) - strrpos($value, ".") > 2 &&
    $value == preg_replace("/[ ]/", "", $value) &&
    $value == preg_replace("/[^A-Za-z0-9-_.@!*]/", "", $value)
  ) {
  } else {
    return "Invalid Mail-Id";
  }
}
