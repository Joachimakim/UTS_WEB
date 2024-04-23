 
      var text = "Hi there... my name is Joachim Kalangi. Right now i'm a second-year student in the computer engineering program in Sam Ratulangi University I love to sing in choirs, right now im part of the Sam Ratulangi Univeristy Choir as Bass. I also love watching films like Pirates of the Caribbean and Star Wars";
      var speed = 100; // milliseconds per character

      function typeWriter() {
        if (text.length > 0) {
          document.getElementById("typewriter").innerHTML += text.charAt(0);
          text = text.substring(1);
          setTimeout(typeWriter, speed);
        }
      }

      typeWriter();
   