function addItem() {
    var inputValue = document.getElementById("input").value;
    var listItems = document.getElementById("list");
    var errorEl = document.getElementById("error");
  
    if (inputValue.length < 2) {
      errorEl.innerText = "Sizning qiymatingiz harflari 2tadan kop bolishi kerak";
      return;
    }
  
    errorEl.innerText = "";
  
    var itemEl = document.createElement("li");
    itemEl.innerText = inputValue;
    itemEl.classList.add("item", "new-item");
  
    listItems.appendChild(itemEl);
  }
  



