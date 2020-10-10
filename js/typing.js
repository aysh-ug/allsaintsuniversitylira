/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = theaterJS()

theater
  .on('type:start,  erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  /*
  delay:3000;
.on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  */
  

theater
  .addActor('client', { speed: 1, accuracy: 0.6 })
  .addActor('Aysh',{ speed: 1, accuracy: 0.6 })
  .addActor('chat',{ speed: 1, accuracy: 0.6 })
  .addScene('client:', 1000)
  .addScene('.', 1000)
  .addScene('client:To begin, please login into your university account. ', 5000)
     .addScene('chat:', 2000)
       .addScene('client:', 1000)
  .addScene('client:Thank you ! EXPLORE !', 4000)
   .addScene('client:', 1000)

.addScene(theater.replay.bind(theater))
   