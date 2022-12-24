let shareBtn= document.querySelectorAll('.share');
let divMain= document.getElementsByClassName('a-body');
var href= shareBtn.href;
let topShare= document.getElementsByClassName('main-share')[0];


window.addEventListener('scroll',function(){
    if(window.pageYOffset>200){

        document.querySelector('#upper-name').style.display="block";
    }
    else{
        document.querySelector('#upper-name').style.display="none";

    }
})

const linktree=()=>{
    navigator.share({
        title: 'Madni Linktree',
        text: 'Check out this webpage!',
        url:'https://https://github.com/Madni-Aghadi'
      })

}

topShare.addEventListener('click',linktree);

const hover = () => {
    Array.from(shareBtn).forEach(element => {
      element.classList.add('share-vis');
      element.addEventListener('click', () => {

        navigator.share({
            title: 'Madni Developer',
            text: 'Check out this webpage!',
            url:href,
          })
      });
    });
  }
  
  Array.from(divMain).forEach(element => {
      element.addEventListener('mouseenter', hover);
    });
    
    
    const hoverOff = () => {
        Array.from(shareBtn).forEach(element => {
          element.classList.remove('share-vis');
        });
      }
      
      Array.from(shareBtn).forEach(element => {
        element.addEventListener('mouseout', hoverOff);
      });


