//========================= DARK THEME ===========================
const themeButton = document.getElementById("theme-button")
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVIOUS SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sub'

//We need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add':'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'uil-moon'? 'add':'remove'](darkTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //ADD or remove the dark/light item 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

console.log("THEME SETTING IS WORKING!")

//========================= MANU SHOW Y HIDDEN  ===========================
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

//========================= MENU SHOW ==================================== 
// Validate if the cvonstant exists 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//========================= MENU HIDE ==================================== 
// Validate if the cvonstant exists 
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
console.log("MENU Y SETTING IS WORKING!")

//========================= REMOVE MENU PROFILE  ===========================
const navLink = document.querySelectorAll('.nav_links')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when we click on nav_links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

console.log("Remove menu profile is working")


//========================= Typewriter effect  ===========================


new Typewriter('#typewriter', {
  strings: ['GyuJin Lee', 'Front-end Developer', 'Back-end Developer', 'Software Engineer'],
  autoStart: true,
  loop: true,
  cursor: "|",
});

console.log("Typewriter effect is working!")

//========================= Portfolio Swiper ===========================

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
console.log("Portfolio Swiper is working!")


//===================================== SCROLL UP =========================
function scrollUp(){
  const scrollup = document.getElementById('scroll-up');
  // When the scroll higher than 560 viewpoint /height , then the scroll up icon showld appear and on clicking should reach top of the page
  if(this.scrollY >= 560) {
      scrollup.classList.add('show-scroll');
  }
  else {
      scrollup.classList.remove('show-scroll')
  }
  console.log("Scroll up being called and working!")
}
window.addEventListener('scroll', scrollUp)

//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =========================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
      }else{
          document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
  })


  console.log("Section highlight working!")
}
window.addEventListener('scroll', scrollActive)