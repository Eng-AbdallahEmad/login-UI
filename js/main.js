// احصل على العناصر
const input = document.querySelector("#password");
const inputFieldText = document.getElementById("email");
const inputIcon = document.querySelector(".ShowPassword");

inputIcon.addEventListener("click", (e) => {
  e.preventDefault();

  inputIcon.setAttribute(
    "src",
    input.getAttribute("type") === "password"
      ? "imgs/eye-off.svg"
      : "imgs/eye.svg"
  );

  input.setAttribute(
    "type",
    input.getAttribute("type") === "password" ? "text" : "password"
  );
});

// أضف مستمع لحدث التركيز على الـ input
input.addEventListener("focus", function () {
  // قم بتغيير رؤية الصورة إلى visible
  inputIcon.style.visibility = "visible";
});

// أضف مستمع لحدث فقدان التركيز عن الـ input
inputFieldText.addEventListener("focus", function () {
  // التحقق من وجود نص في عنصر الإدخال
  if (input.value.trim() === "") {
    // قم بتغيير رؤية الصورة إلى hidden
    inputIcon.style.visibility = "hidden";
  }
});

