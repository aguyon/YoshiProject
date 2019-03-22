// titre meeting //

anime.timeline({loop: true})
  .add({
    targets: '#titremeeting .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 800 * i;
    }
  }).add({
    targets: '#titremeeting',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// button //

$(document).ready(function(){
	$('.ouvrir-modal').click(function(){
    $('#bbModal').modal('show');
  });
    $("#bbModal").on('hidden.bs.modal', function(){
		alert("Merci pour votre participation ! Yoshi a hâte de vous rencontrer !");
	});
});

$('#bbModal').on('shown.bs.modal', function () {
  $('#bbModal').trigger('focus')
})