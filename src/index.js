document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const input = document.querySelector("input[name='input']");
  const inputValue = input.value;

  const paragraph = document.createElement("p");
  const textNode = document.createTextNode(inputValue);
  paragraph.appendChild(textNode);

  paragraph.addEventListener("click", () => {
    alert("Paragraph clicked!"); // Event handler for the dynamically created paragraph
  });

  document.body.appendChild(paragraph);

  input.value = "";
});
