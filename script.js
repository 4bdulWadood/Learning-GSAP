
/*
  From specifies the starting position, To specifies the ending position, fromTo specifies both starting and ending positions.



*/

const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
  .from('.header', { y: '-100%', ease: 'expo' }, 1)
  .from('.link', { opacity: 0, stagger: .5 },5)
  .from('.right', { x: '-100vw', ease: 'power2.in'})
  .from('.left', { x: '-100%' }, '<.5')
  .to('.footer', {  y: 0, ease: 'elastic' })
  .fromTo('.box', { opacity: 0, scale: 10, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0, ease: 'power2.in' })
  .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })
  .restart()

const button = document.querySelector('.button')
const Restartbutton = document.getElementById('RestartButton')

button.addEventListener('click', () => {
  timeline.timeScale(50)
  timeline.reverse()
})

Restartbutton.addEventListener('click', () => {
  timeline.restart();
})