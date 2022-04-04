// Slecting all imputs

const inputs = document.querySelectorAll(".controls input");

// Handling update with a functional

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Listening for inputs
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
