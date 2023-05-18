const tabItems = document.querySelectorAll(".tab-item");

// Select tab content
function selectItem(e) {
  removeBorder();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));