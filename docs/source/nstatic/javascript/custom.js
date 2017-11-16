$( document ).ready(function() {

	$(window).on('resize', function() { evalImg() })
	$(window).on('scroll', function() { evalImg() })

	function evalImg(){

		var t1 = $('#sangohan').offset().top - 200
		var t2 = $('#cell').offset().top - 200
		var t3 = $('#majin-vegeta').offset().top - 200

		if ( $(window).width() > 1400 ) {
			
			if ( $(window).scrollTop() < t1 ) {

				$(".stickies").css("display","none")

			} else if ( $(window).scrollTop() > t1 && $(window).scrollTop() < t2 ) {

				$("#sangohan-img").css("display","block")
				$("#cell-img").css("display","none")
				$("#majin-vegeta-img").css("display","none")

			} else if ( $(window).scrollTop() > t2 && $(window).scrollTop() < t3 ) {

				$("#sangohan-img").css("display","none")
				$("#cell-img").css("display","block")
				$("#majin-vegeta-img").css("display","none")

			} else if ( $(window).scrollTop() > t3 ) {

				$("#sangohan-img").css("display","none")
				$("#cell-img").css("display","none")
				$("#majin-vegeta-img").css("display","block")

			} else {

				$(".stickies").css("display","none")

			}

		} else {
			$(".stickies").css("display","block")
		}
	}

});