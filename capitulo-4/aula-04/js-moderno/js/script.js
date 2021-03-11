let globalNames = ["um", "dois", "tres", "quatro", "cinco"];
let inputName = null;
let currentIndex = null;
let isEditing = false;

window.addEventListener("load", () => {
  inputName = document.querySelector("#inputName");

  preventFormSubmit();
  activateInput();
  render();
});

const preventFormSubmit = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  var form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
}

const activateInput = () => {
  const insetName = (newName) => {
    //globalNames.push(newName);
    globalNames = [...globalNames, newName]
  }

  const updateName = (newName) => {
    console.log(newName);
    globalNames[currentIndex] = newName;
  }

  const handleTyping = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        console.log("inserting....");
        insetName(event.target.value);
      }
      render();
      isEditing = false;
      clearInput();
    }
  }
  inputName.focus();
  inputName.addEventListener("keyup", handleTyping);
}

const render = () => {
  const createDeleteButton = (index) => {
    const deleteName = () => {
      //globalNames.splice(index, 1);

      globalNames = globalNames.filter((_, i) => {
        if(i === index){
          return false;
        } else {
          return true;
        }

        //return i !== index;

      })

      // globalNames = globalNames.filter((name, i) => i !== index)

      render();
    }
    var button = document.createElement("button");
    button.classList.add("deleteButton");
    button.textContent = "x";
    button.addEventListener("click", deleteName);
    return button;
  }

  const createSpan = (name, index) => {
    const editItem = () => {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }

    var span = document.createElement("span");
    span.classList.add("clickable");
    span.textContent = name;
    span.addEventListener("click", editItem);

    return span;
  }

  var divNames = document.querySelector("#names");
  divNames.innerHTML = "";

  var ul = document.createElement("ul");

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement("li");
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

// function clearInput() {
//   inputName.value = "";
//   inputName.focus();
// }

const clearInput = () => {
  inputName.value = '';
  inputName.focus();
}
