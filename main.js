  var prevScrollpos = window.scrollY;

  window.addEventListener('scroll', function() {
    var currentScrollPos = window.scrollY;
    var headerElement = document.querySelector('.header');
    
  
    if (prevScrollpos <= currentScrollPos) {
      headerElement.style.backgroundColor = 'transparent';
      headerElement.style.boxShadow="none"; 
      headerElement.style.position='absolute';
      headerElement.style.transition='.4s';
    } else {
      headerElement.style.backgroundColor = '#333333';
      headerElement.style.boxShadow="1px 1px 10px 1px #202020";
      headerElement.style.position='fixed';
      headerElement.style.transition='.4s';
    }
  
    prevScrollpos = currentScrollPos;
  });

/////////////////////////////////////////////////////////////////
  
///////////////////////////////////////////////////////
  // Get all the navigation links
  const navLinks = document.querySelectorAll(".header .main-nav a");

  // Add click event listeners to each link
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Remove the "active" class from all links
      navLinks.forEach(link => {
        link.classList.remove("active");
      });

      // Add the "active" class to the clicked link
      this.classList.add("active");

      // Get the target section ID from the link's href attribute
      const targetSectionId = this.getAttribute("href");

      // Scroll to the target section
      document.querySelector(targetSectionId).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
///////////////////////////////////////////////////////////////////////
// Get all the portfolio category links
const portfolioCategoryLinks = document.querySelectorAll("#portfolio .shuffle li");

// Add click event listeners to each category link
portfolioCategoryLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Remove the "active" class from all links
    portfolioCategoryLinks.forEach(link => {
      link.classList.remove("active");
    });

    // Add the "active" class to the clicked link
    this.classList.add("active");

    // Get the selected category
    const selectedCategory = this.getAttribute("data-category");

    // Filter the portfolio items based on the selected category
    filterPortfolioItems(selectedCategory);
  });
});

// Function to filter portfolio items based on the selected category
function filterPortfolioItems(category) {
  const portfolioItems = document.querySelectorAll("#portfolioItems .box");

  if (category === "all") {
    // Show all portfolio items
    portfolioItems.forEach(item => {
      item.style.display = "block";
    });
  } else {
    // Hide portfolio items that do not belong to the selected category
    portfolioItems.forEach(item => {
      const itemCategory = item.getAttribute("data-category");
      if (itemCategory === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
}


//////////////////////////////////////////
let nums=document.querySelectorAll(".stats .box div");
let section=document.querySelector(".stats");
let started=false;


window.onscroll=function(){
  if(window.scrollY>=section.offsetTop){
    if(!started){
    nums.forEach((num)=>{
      startCount(num);
    })
  }
  }
}

function startCount(el) {
  let goal = parseInt(el.dataset.goal);
  let currentCount = 0;
  let increment = Math.ceil(goal / 100); // Adjust the increment based on the goal value

  let count = setInterval(() => {
    currentCount += increment;
    el.textContent = currentCount;

    if (currentCount >= goal) {
      el.textContent = goal; // Set the final count to the goal value
      clearInterval(count);
      started = true;
    }
  }, 10);
}

////////////////////////////////////////////////////////
