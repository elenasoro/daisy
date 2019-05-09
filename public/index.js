
function submitForm(){
  const name = document.querySelector('input.name').value;
  const email = document.querySelector('input.email').value;
  const submitButton = document.querySelector('button.submit');
  let overlay = document.querySelector('.overlay');

  function request(){
    var xhr = new XMLHttpRequest();

    var body = 'name=' + encodeURIComponent(name) +
    '&email=' + encodeURIComponent(email);
  
    xhr.open("POST", '/submit', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    xhr.onreadystatechange = function() {
      if (this.readyState != 4) return;
    
      alert( this.responseText );
      overlay.setAttribute('style', 'display:none');
    }
  
    xhr.send(body);
    console.log(body);
  }

  submitButton.addEventListener('click', request());
  
  
}


const openVideoPopup = function(){
  const overlay = document.querySelector('.overlay__video');
  overlay.setAttribute('style', 'display:block');
  document.body.style.overflow = "hidden";
}

const closeVideoPopup = function(){
  let buttonClose = document.querySelector('.player__close');
  let overlay = document.querySelector('.overlay__video');

  buttonClose.addEventListener('click', overlay.setAttribute('style', 'display:none'));
  video.pause();
  document.body.style.overflow = "";
}


  const player = document.querySelector('.player');
  const video = player.querySelector('.viewer');
  const progress = player.querySelector('.progress');
  const progressBar = player.querySelector('.progress_filled');
  const toggle = player.querySelector('.toggle');
  const skipButtons = player.querySelectorAll('[data-skip]');
  const ranges = player.querySelectorAll('.player__slider');
  

  function togglePlay(){
    if(video.paused){
      video.play();
    } else {
      video.pause();
    }
      
  }

  function updateButton(){
    var buttonPlay = document.querySelector('.video__play');
    var buttonPause = document.querySelector('.video__pause');

    if(this.paused){
      buttonPlay.style.display = 'block';
      buttonPause.style.display = 'none';
    } else {
      buttonPause.style.display = 'block';
      buttonPlay.style.display = 'none';
    }
  }

  function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
  }

  function rangeUpdate(){
    video[this.name] = this.value;
  }

  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  toggle.addEventListener('click', togglePlay);
  skipButtons.forEach(button => button.addEventListener('click', skip));
  ranges.forEach(range => range.addEventListener('click', rangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));








const openPopup = function(){
  let buttonOpen = document.querySelector('.get-client');
  let overlay = document.querySelector('.overlay');
  
  buttonOpen.addEventListener('click', overlay.setAttribute('style', 'display:block'));
  document.body.style.overflow = "hidden";
  
}


const closePopup = function(){
  let buttonClose = document.querySelector('.js-close');
  let buttonSubmit = document.querySelector('.submit');
  let overlay = document.querySelector('.overlay');
  

  buttonClose.addEventListener('click', overlay.setAttribute('style', 'display:none'));
  buttonSubmit.addEventListener('click', overlay.setAttribute('style', 'display:none'));
  document.body.addEventListener('mouseup', overlay.setAttribute('style', 'display:none'));
  document.body.style.overflow = "";
}

window.onload = function(){
  let divToHide = document.querySelector('.overlay');
  let popup = document.querySelector('.js-popup');
  
  document.onclick = function(e){
    if(e.target.id !== 'get-client' && e.target != popup && e.target.parentNode != popup && e.target.parentNode.parentNode != popup){
      
      divToHide.style.display = 'none';
      document.body.style.overflow = "";
    }
  }
}


const readMore = function(num) {
  let text = document.querySelectorAll('span.works__text')[num];
  let button = document.querySelectorAll('.works__button')[num];

  text.classList.toggle('work__text_read-less-state');
  if(button.innerHTML !== 'Hide'){
    button.innerHTML = 'Hide';
  } else{
    button.innerHTML = 'More Details';
  }
  
  console.log(text);
}

 
  const scrollDown = function(elemId){
    let elemClassY = document.querySelector(`#${elemId}`);

    function getCoords(elem) { 
      var box = elem.getBoundingClientRect();
    
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }
    
    let elemY = getCoords(elemClassY).top;
    console.log(elemY);
    
    window.scrollTo({
      top: elemY,
      behavior: 'smooth',
    });
  }



  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.querySelector(".button_top").style.display = "block";
    } else {
      document.querySelector(".button_top").style.display = "none";
    }
  }

  window.onscroll = function() {scrollFunction()};

  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  

  const validate = function(){
    let userName = document.querySelector('#user_name');
    let email = document.querySelector('#email');
    let phoneNumber = document.querySelector('#phone');
    let phoneRegx = /[^0-9]/;
    let emailRegx = /.+@.+\..+/i;

    function showError(elem, errorMessage) {
      
      var msgElem = document.createElement('span');
      msgElem.className = "error_message";
      msgElem.innerHTML = errorMessage;
      elem.after(msgElem);
      
    }

    function resetError(field) {
      field.style.border = '';
      if (field.nextElementSibling.className == "error_message") {
        field.parentNode.removeChild(document.querySelector('.error_message'));
      }
    }


    resetError(userName);
    if (!userName.value) {
      userName.style.border = '2px solid red';
      showError(userName, 'Enter your name');
      return false;
    }

    resetError(email);
    if (!email.value) {
      email.style.border = '2px solid red';
      showError(email, 'Enter your email');
      return false;
    } else if(email.value.match(emailRegx) == null){
      console.log(email.value.match(emailRegx));
      email.style.border = '2px solid red';
      showError(email, 'Invalid format. Shoud contain @ and .');
      return false;
    }
    

    resetError(phoneNumber);
    if (!phoneNumber.value) {
      phoneNumber.style.border = '2px solid red';
      showError(phoneNumber, 'Enter your phone');
      return false;
    } else if(phoneNumber.value.match(phoneRegx) != null){
      
      phoneNumber.style.border = '2px solid red';
      showError(phoneNumber, 'Should be a number');
      return false;
    }

    return true;
  }


  const applyFilter = function(filter){
    
    let itemsToDisplay = document.querySelectorAll(`.portfolio__${filter}`);
    let allItems = document.querySelectorAll('.portfolio__all');

    allItems.forEach(function(e){
      e.style.display = 'none';
    });

    itemsToDisplay.forEach(function(e){
      e.style.display = 'block';
    });

  }


  const changeColorWhenSelected = function(){
    let itemsFilter = document.querySelectorAll('.portfolio__list li');
    itemsFilter.forEach(function(e){
      e.addEventListener('click', function(){
        itemsFilter.forEach(function(e){
          e.classList.remove('active');
        });
        e.classList.add('active');
      })
    })
  }
  changeColorWhenSelected();


  (function(){

    var index = 1;
    
    var Slider = function(){
      this.box = document.querySelector('.testimonials__carousel-container');
      this.slidesBox = document.querySelector('.testimonials__carousel-slides');
      this.slides = document.querySelectorAll('.testimonials__item');
      this.btns = document.querySelectorAll('.testimonials__button');
      this.size = this.box.clientWidth;

      this.position();
      this.carousel();
    };

    Slider.prototype.position = function(){
      var size = this.size;
      this.slidesBox.style.transform = 'translateX('+(-index*size)+'px)';
    }

    Slider.prototype.carousel = function(){
      let i, max = this.btns.length, that = this;

      for(i = 0; i < max; i++){
        that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
      }
    }

    Slider.prev = function(box){
      box.slidesBox.style.transition = 'transform .3s ease-in-out'; 
      var size = box.size;
      index<= 0 ? false : index--;
      box.slidesBox.style.transform = 'translateX('+(-index*size)+'px)';
    };


    Slider.next = function(box){
      box.slidesBox.style.transition = 'transform .3s ease-in-out';
      var max = box.slides.length;
      var size = box.size;
      index>=max-1? false : index++;
      box.slidesBox.style.transform = 'translateX('+(-index*size)+'px)';
    };

    new Slider();
  })();













