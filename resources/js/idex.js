let audio=document.querySelector('.Circles');
let toggleBtn=document.querySelector('.toggle');
let speaker=document.querySelector('.speaker');


[toggleBtn,speaker].forEach(element=>{  
         element.addEventListener('click',function(){
              let isMuted=element.classList.contains('toggle-off') || element.classList.contains('mute')
              if(isMuted){
                  toggleBtn.classList.remove('toggle-off')
                  toggleBtn.classList.add('toggle-on')
                  speaker.classList.remove('mute')
                  speaker.classList.add('unmute')
                  audio.play()
                  
              }else{
                toggleBtn.classList.remove('toggle-on')
                toggleBtn.classList.add('toggle-off')
                speaker.classList.remove('unmute')
                speaker.classList.add('mute')
                audio.pause()
 

              }
          })

       
})







