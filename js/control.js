$(".video-play").on('click', function(e) {
    e.preventDefault(); 
    var vidWrap = $(this).parent(),
        iframe = vidWrap.find('.video iframe'),
        iframeSrc = iframe.attr('src'),
        iframePlay = iframeSrc += "?autoplay=1";
    vidWrap.children('.video-thumbnail').fadeOut();
    vidWrap.children('.video-play').fadeOut();
    vidWrap.find('.video iframe').attr('src', iframePlay);


});
