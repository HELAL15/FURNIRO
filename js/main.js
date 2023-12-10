

let shopping_cart = document.querySelector('.shopping-cart');
let fav_cart = document.querySelector('.fav-cart');
let cart1 = document.querySelector('.fa-basket-shopping.cart');
let cart2 = document.querySelector('.fa-heart.cart');
let close = document.querySelectorAll('.close')
let rem_class = document.querySelectorAll('.nav-icon');



cart1.onclick=()=>{
  shopping_cart.classList.add('active');
}

cart2.onclick=()=>{
  fav_cart.classList.add('active');
}

close.forEach(one=>{
  one.onclick=()=>{
    if(shopping_cart.classList.contains('active')){
      shopping_cart.classList.remove('active');
    }
    if(fav_cart.classList.contains('active')){
      fav_cart.classList.remove('active');
    }
    rem_class.forEach(icon=>{
      icon.classList.remove('active')
    })
  }
})




let nav_icons = document.querySelectorAll('.nav-icon');

nav_icons.forEach(icon=>{
  icon.onclick=()=>{
    nav_icons.forEach(icon=>{
      icon.classList.remove('active')
    })
    icon.classList.add('active')
  }
});

let likes = document.querySelectorAll('.like');

likes.forEach(like=>{
  like.onclick=()=>{
    like.classList.toggle('active')
    }
})

let shares = document.querySelectorAll('.share');

shares.forEach(share=>{
  share.onclick=()=>{
    share.classList.toggle('active')
    }
})


let compares = document.querySelectorAll('.compare');

compares.forEach(compare=>{
  compare.onclick=()=>{
    compare.classList.toggle('active')
    }
})


$('.owl-carousel').owlCarousel({
  items:3,
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})