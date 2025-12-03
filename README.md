# js-core-projects

All the core JavaScript projects I have done to learn the language.

- [Password Visibility Toggle](#password-visibility-toggle)

## Password Visibility Toggle

A simple interactive feature that allows users to toggle password visibility while changing the icon color dynamically. Useful for learning DOM manipulation, events, and conditional logic.

### Key Features

- Show/hide password input
- Toggle eye icon between open and closed
- Change icon color dynamically using CSS filters
- Click-based interactive behavior

### What I learned

#### DOM Manipulation

```javascript
const eyeicon = document.getElementById("eye-close");
const input = document.getElementById("input");

input.type = "text"; // Change input type dynamically
eyeicon.src = "eye-icons/eye-open.png"; // Change image source
eyeicon.style.filter = "..."; // Change image color
```

#### Event Handling

```javascript
eyeicon.onclick = onClick;

function onClick() {
  // Executes when eye icon is clicked
}
```

#### Conditional Logic

```javascript
if (input.type == "password") {
  input.type = "text";
  eyeicon.src = "eye-icons/eye-open.png";
  eyeicon.style.filter =
    "invert(17%) sepia(97%) saturate(7494%) hue-rotate(0deg) brightness(95%) contrast(105%)";
} else {
  input.type = "password";
  eyeicon.src = "eye-icons/eye-close.png";
  eyeicon.style.filter =
    "invert(34%) sepia(4%) saturate(1%) hue-rotate(180deg) brightness(89%) contrast(89%)";
}
```

#### CSS Filters for Images

```javascript
// Change PNG icon color dynamically
eyeicon.style.filter =
  "invert(17%) sepia(97%) saturate(7494%) hue-rotate(0deg) brightness(95%) contrast(105%)"; // red
eyeicon.style.filter =
  "invert(34%) sepia(4%) saturate(1%) hue-rotate(180deg) brightness(89%) contrast(89%)"; // gray
```
