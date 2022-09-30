(function($) {

	var length = 2,
		current = 1,
		next = 1,
		outClass, inClass, onGoing = false;
		$('#cubeTransition>div:eq(0)').addClass('visible');

	for (i = 0; i < length; i++) {
		var bullet = $("<li></li>");
		if (i == 0) bullet.addClass('active');
		$("#bullets").append(bullet);
	}

	function openIndex(i) {
		if (!onGoing && next != i) {
			onGoing = true;
			next = i
			outClass = current > i ? 'rotateCubeBottomOut' : 'rotateCubeTopOut'
			inClass = current > i ? 'rotateCubeBottomIn' : 'rotateCubeTopIn';
			show()
		}
	}

	function trans(direction) {
		if (!onGoing) {
			if (direction == 'up') {
				next = current > 1 ? current - 1 : length;
				outClass = 'rotateCubeBottomOut';
				inClass = 'rotateCubeBottomIn';
				if (current != 1) {
					if (document.getElementsByClassName('page2')[0].children[0].getBoundingClientRect().top === 0) {
					onGoing = true;
					show();
				}
			}
			} else {
				next = current < length ? current + 1 : 1;
				outClass = 'rotateCubeTopOut';
				inClass = 'rotateCubeTopIn';
				if (current == 1) {
					onGoing = true;
					show();
				}
			}
		}
	}

	function show() {

		document.getElementsByClassName('cube-page')[next - 1].classList.add('visible');
		document.getElementsByClassName('cube-page')[current - 1].classList.add(outClass);
		document.getElementsByClassName('cube-page')[next - 1].classList.add(inClass);
		
		animationOut(current - 1)
			setTimeout(function() {

			document.getElementsByClassName('cube-page')[current - 1].classList.remove('visible');

		}, 500)
		setTimeout(function() {


			document.getElementsByClassName('cube-page')[current - 1].classList.remove(outClass);
			document.getElementsByClassName('cube-page')[next - 1].classList.remove(inClass);

			animationIn(next - 1)
			current = next;
			onGoing = false;
		}, 600)
	}

	$(document).ready(

	function() {
    
//for scroll by mouse or MAC track pad
      var indicator = new WheelIndicator({
      callback: function(e){   
          if (e.direction == 'down') {
            trans('down')
          } else {
            trans('up')
          }
      }
    });
    indicator.getOption('preventMouse'); // true
//update this instead of mousewheel.js
//in issuses#2 a friend want to use this plugin on MAC track pad

		$(document).keydown(function(e) {
			if (e.keyCode == 38 || e && e.keyCode == 37) {
				trans('up')
			}
			if (e.keyCode == 39 || e && e.keyCode == 40) {
				trans('down')
			}

		});

		// $(document).swipe({
		// 	swipe: function(event, direction, distance, duration, fingerCount) {
		// 		if (direction == "up") {
		// 			trans('down')
		// 		} else if (direction == "down") {
		// 			trans('up')
		// 		}
		// 	}
		// });


		$('#bullets>li').on('click', function() {
			openIndex($(this).index() + 1);
		});

	});
})(jQuery);