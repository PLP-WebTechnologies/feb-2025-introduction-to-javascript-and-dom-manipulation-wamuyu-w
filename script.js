function changeText() {
    document.getElementById("main-title").textContent = "Text Changed Dynamically!";
  }
  
  function changeStyle() {
    const desc = document.getElementById("description");
    desc.style.color = "#007acc";
    desc.style.backgroundColor = "#f0f8ff";
    desc.style.padding = "10px";
    desc.style.borderRadius = "5px";
  }
  
  function addElement() {
    const dynamicArea = document.getElementById("dynamic-area");
    if (!document.getElementById("new-element")) {
      const newElement = document.createElement("p");
      newElement.id = "new-element";
      newElement.textContent = "🌟 New element added to the DOM!";
      dynamicArea.appendChild(newElement);
    }
  }
  
  function removeElement() {
    const element = document.getElementById("new-element");
    if (element) {
      element.remove();
    }
  }
  