const accordianItems = document.querySelectorAll(".accordian-item");
// console.log(accordianItems); -- nodelist

accordianItems.forEach((item) => {
  const header = item.querySelector(".accordian-header");
  const content = item.querySelector(".accordian-content");

  header.addEventListener("click", function () {
    // Toggle the visibility of the content
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // Adjust the button style based on the content visibility
    if (content.style.display === "block") {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }

    // Deactivate all other tabs if one is acive
    accordianItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherHeader = otherItem.querySelector(".accordian-header");
        const otherContent = otherItem.querySelector(".accordian-content");

        otherHeader.classList.remove("active");
        otherContent.style.display = "none";
      }
    });
  });
});
