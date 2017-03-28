(function(window){
    'use strict';
    function define_caroupage(){
        var Caroupage = {};
        Caroupage.init = function(options){
            this.index = 0
            this.slides = options.slides
            this.prev = options.prev
            this.next = options.next

            var that = this

            document.getElementById(this.prev).onclick = function() {
              that.index--
              that.updateSlide()
            };

            document.getElementById(this.next).onclick = function() {
              that.index++
              that.updateSlide()
            };
        }

        Caroupage.updateSlide = function() {
          this.validateIndexBounds()
          this.updateBackgroundImage()
          this.showHideContent()
        }

        Caroupage.validateIndexBounds = function() {
          if(this.index == this.slides.length) this.index = 0
          if(this.index < 0) this.index = this.slides.length-1
        }

        Caroupage.updateBackgroundImage = function() {
          var body = document.body
          body.style.backgroundImage = 'url(' + this.slides[this.index] + ')'
        }

        Caroupage.showHideContent = function() {
          document.getElementsByClassName('show')[0].classList.remove("show")
          var content_pane = document.getElementById('content_' + this.index)
          content_pane.className += " show"
        }
        return Caroupage;
    }
    if(typeof(Caroupage) === 'undefined'){
        window.Caroupage = define_caroupage();
    }
    else{
        console.log("Caroupage already defined.");
    }
})(window);
