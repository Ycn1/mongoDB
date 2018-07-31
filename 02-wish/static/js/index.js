

 (function($){
		 	function getRandom(min,max)  {
			return Math.round(min + (max-min)*Math.random());
		}

 	// var oParent = $('.wish');

	var $pep = $('.pep');

	var $wish = $('.wish');
	function handlepep($elem){
				$(document).ready(function(){
			        $('.pep').pep({  constrainTo: '.wish' });
				 });

				var wishheight = parseInt($wish.css('height'));
				var wishwidth = parseInt($wish.css('width'));
				var pepwidth = parseInt($pep.css('width'));

				var pepheight = parseInt($pep.css('height'));

				$pep.each(function(){
					$(this).css({
						 'transform': 'matrix(1, 0, 0, 1, '+getRandom(0,300)+','+getRandom(0,200)+')'
						// transform: matrix(1,0,0,1,'getRandom(0,( wishwidth - pepwidth))','getRandom(0,(wishheight - pepheight))')
					})
				})

				$pep.hover(function(){
					$(this).css({
						zIndex : 999
					})
				},function(){
					$(this).css({
						zIndex : 0
					})	
				})

	}

 	handlepep();

			$wish.on('click','.close',function(){
					var $this = $(this);
					var this1 = this;
					
					$.ajax({

						url :'/Wish/del/'+ $this.data('id'),
				
						dataType:'json'

					})
					.done(function(data){
						if(data.status == 0) {


							console.log(data);
							$(this1.parentNode).remove();
							console.log("father remove");
						}
					})
				})
	

	$('.content a').on('click',function(){
		let val = $('#content').val();
		$.ajax({
			url :'/Wish/add',

			data:{content:val},
			dataType:'json',
			type:'POST'
		})
		.done(function(data){

			if(status ==0){
				let $dom  = $(`<div class="pep" style="background:${data.data.color}">
							<a href="javascript:;" class="close" data-id = "${data.data._id}"></a>
							${data.data.content}
						</div> `);
				
				 $wish.append($dom);
				
				// handlepep($dom);
				$(document).ready(function(){
			        $('.pep').pep({  constrainTo: '.wish' });
				 });
				$dom.css({
						 transform: 'matrix(1, 0, 0, 1, '+getRandom(0,300)+','+getRandom(0,200)+')'
						
					})
				
				 $('#content').val('');

	

			}



		})
	}) ;



	 }
 )(jQuery)