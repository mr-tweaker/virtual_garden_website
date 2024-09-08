//Get the button:
floatButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    floatButton.style.display = "block";
    floatButton.style.transform = "translateX(0)";
  } else {
    floatButton.style.transform = "translateX(500%)";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


let Gbtn = document.getElementById("Gbtn");
let Hbtn = document.getElementById("Hbtn");
let Gwrapper = document.getElementById("Gwrapper");
let hotelListing = document.querySelector(".moreHotels");

function morePhotos() {

  Gwrapper.innerHTML += `<div class="new-box">
  <img src="../imgs/gimg21.jpg"
      alt="animal Image" />
</div>
<div class="wide new-box">
  <img src="../imgs/gimg22.jpg"
      alt="animal Image" />
</div>
<div>
  <img src="../imgs/gimg23.jpg"
  alt="animal Image" />
</div>
<div>
  <img src="../imgs/gimg24.jpg"
  alt="animal Image" />
</div>
<div class="tall">
  <img src="../imgs/gimg25.jpg"
  alt="animal Image" />
</div>
<div class="wide">
  <img src="../imgs/gimg26.jpg"
  alt="animal Image" />
</div>
<div>
  <img src="../imgs/gimg5.jpg"
  alt="animal Image" />
</div>
<div class="wide">
  <img src="../imgs/gimg18.jpg"
  alt="animal Image" />
</div>
<div class="tall" new-box>
  <img src="../imgs/gimg29.jpg"
  alt="animal Image" />
</div>`
}

// function moreHotels() {
//   hotelListing.innerHTML += `<div class="Hcard new-box">
//   <!-- card -->

//                 <div class="Hcard">
//                     <div class="Himg">
//                         <img src="../imgs/Aegle marmelos (L.) Corr..png" alt="Manu Mahrani Resort">
//                     </div>
//                     <div class="Hcontent">
//                         <!-- Common Name -->
//                         <h3>Bel</h3>
//                         <label><i class="fa fa-map-marker" aria-hidden="true"></i>Widely distributed across India, especially in North and Central India</label>
//                         <div class="Hdetail">
//                             <h4> Aegle marmelos (L.) Corr</h4>
//                             <span></span>
//                             <ul>
//                                 <li>Digestive disorders</li>
//                                 <li>Diabetes management</li>
//                                 <li>Antipyretic</li>
//                                 <li>Anti-inflammatory</li>
//                                 <li>Antioxidant effects</li>
//                                 <li>Respiratory ailments</li>
//                                 <li>Cardiovascular health</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="Hpricing">

//                     </div>
//                 </div>

//                 <!-- card -->

//                 <div class="Hcard">
//                     <div class="Himg">
//                         <img src="../imgs/Althaea officinalis L..jpg" alt="Manu Mahrani Resort">
//                     </div>
//                     <div class="Hcontent">
//                         <h3> Marsh Mallow (Eng.)</h3>
//                         <label><i class="fa fa-map-marker" aria-hidden="true"></i>Cultivated in some North Indian states</label>
//                         <div class="Hdetail">
//                             <h4>Althaea officinalis L</h4>
//                             <span></span>
//                             <ul>
//                                 <li>Respiratory relief</li>
//                                 <li>Urinary tract support</li>
//                                 <li>Skin conditions</li>
//                                 <li>Anti-inflammatory properties</li>
//                                 <li>Immune system support</li>
//                                 <li>Mild laxative effect</li>
//                                 <li>Pain relief</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="Hpricing">

//                     </div>
//                 </div>

//                 <!-- card -->

//                 <div class="Hcard">
//                     <div class="Himg">
//                         <img src="../imgs/Annona muricata L..webp" alt="Manu Mahrani Resort">
//                     </div>
//                     <div class="Hcontent">
//                         <h3> Mamphal (Mar.)</h3>
//                         <label><i class="fa fa-map-marker" aria-hidden="true"></i>Cultivated in various states, especially in South India</label>
//                         <div class="Hdetail">
//                             <h4> Annona muricata L.</h4>
//                             <span></span>
//                             <ul>
//                                 <li>Anti-cancer properties</li>
//                                 <li>Pain relief</li>
//                                 <li>Antimicrobial activity</li>
//                                 <li>Antihypertensive</li>
//                                 <li>Sedative and anti-anxiety effects</li>
//                                 <li>Anticonvulsant</li>
//                                 <li>Fever reduction</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="Hpricing">

//                     </div>
//                 </div>`
// }

Gbtn?.addEventListener('click', () => {
  morePhotos();
});

Hbtn?.addEventListener('click', () => {
  moreHotels();
});
