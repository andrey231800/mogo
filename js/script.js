const background = document.querySelector('.container-fourteen__background');

document.getElementById('burger').onclick = function(){
  addMenu();
};

function addMenu(){
  document.getElementById('menu').classList.toggle('show');
};

setInterval(function(){
  if(document.querySelectorAll('.owl-dot')[0].className === 'owl-dot active'){
      document.querySelector('.container-one').classList.remove('container1_img2');
      document.querySelector('.container-one').classList.remove('container1_img3');
      document.querySelector('.container-one').classList.remove('container1_img4');
      document.querySelector('.container-one').classList.add('container1_img1');
  } else if(document.querySelectorAll('.owl-dot')[1].className === 'owl-dot active'){
    document.querySelector('.container-one').classList.remove('container1_img1');
    document.querySelector('.container-one').classList.remove('container1_img3');
    document.querySelector('.container-one').classList.remove('container1_img4');
    document.querySelector('.container-one').classList.add('container1_img2');
  } else if(document.querySelectorAll('.owl-dot')[2].className === 'owl-dot active'){
    document.querySelector('.container-one').classList.remove('container1_img1');
    document.querySelector('.container-one').classList.remove('container1_img2');
    document.querySelector('.container-one').classList.remove('container1_img4');
    document.querySelector('.container-one').classList.add('container1_img3');
  } else if(document.querySelectorAll('.owl-dot')[3].className === 'owl-dot active'){
    document.querySelector('.container-one').classList.remove('container1_img1');
    document.querySelector('.container-one').classList.remove('container1_img3');
    document.querySelector('.container-one').classList.remove('container1_img2');
    document.querySelector('.container-one').classList.add('container1_img4');
    
  }
}, 10);
setInterval(function(){
  if(document.querySelectorAll('.owl-dot').className === 'owl-dot active'){
    document.querySelector('.owl-dot ative').classList.add('dotGrad');
  }
}, 10);

  new WOW().init();