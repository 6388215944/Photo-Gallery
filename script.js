// Open / Close lightbox menu function
function btnOpen() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function btnClose() {
    document.getElementById("mySidebar").style.display = "none";
  }
  

  function openLightbox(imageUrl) {

    const lightbox = document.getElementById("lightbox");
  
  
    lightbox.querySelector("#lightbox-img").src = imageUrl;
  
   
    lightbox.classList.add("active");
  }
  
 
  document.addEventListener("click", function(event) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector("#lightbox-img");
  
    if (event.target !== lightboxImage && !lightboxImage.contains(event.target)) {
      lightbox.classList.remove("active");
    }
  });
  