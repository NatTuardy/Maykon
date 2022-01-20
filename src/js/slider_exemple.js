// $(document).ready(function () {
//     var pos = 0,
//         slides = $('.slide'),
//         numOfSlides = slides.length;
//         console.log(`numOfSlides`, slides)

//     function nextSlide() {
//         console.log('next')
//         // `[]` returns a vanilla DOM object from a jQuery object/collection
//         // stopCurrentVideo()
//         slides[pos].video.stopVideo()
//         // slides[pos].video.stopCurrentVideo()
//         slides.eq(pos).animate({ left: '-100%' }, 500);
//         pos = (pos >= numOfSlides - 1 ? 0 : ++pos);
//         slides.eq(pos).css({ left: '100%' }).animate({ left: 0 }, 500);
//     }

//     function previousSlide() {
//         console.log('previos')
//         // slides[pos].video.stopVideo()
//         slides[pos].video.pauseVideo()
//         // slides[pos].video.stopCurrentVideo()
//         // stopCurrentVideo()
//         slides.eq(pos).animate({ left: '100%' }, 500);
//         pos = (pos == 0 ? numOfSlides - 1 : --pos);
//         slides.eq(pos).css({ left: '-100%' }).animate({ left: 0 }, 500);
//     }

//     $('.left').click(previousSlide);
//     $('.right').click(nextSlide);
// })

// function onYouTubeIframeAPIReady() {
//     $('.slide').each(function (index, slide) {
//         // Get the `.video` element inside each `.slide`
//         var iframe = $(slide).find('.video')[0]
//         // Create a new YT.Player from the iFrame, and store it on the `.slide` DOM object
//         slide.video = new YT.Player(iframe)
//     })
// }

// console.log('wooouuu')

// $('.play-button').on('click', function () {
//     $(this).hide();
//     $(this).parent().fadeOut();
//     $(this).parent().siblings('.slider-video')[0].play();
// });

// $('.slider-video').on('play', function () {
//     $(this).attr('controls', '1');
// });

// // Additionnal code for the slider
// var pos = 0,
//     slides = $('.slide'),
//     numOfSlides = slides.length;

// function nextSlide(){
//     stopCurrentVideo();
//     slides.eq(pos).animate({left:'-100%'},500);
//     pos = pos >= numOfSlides-1 ? 0 : ++pos;
//     slides.eq(pos).css({left:'100%'}).animate({left:0},500);
// }

// function previousSlide(){
//     stopCurrentVideo();
//     slides.eq(pos).animate({left:'100%'},500);
//     pos = pos == 0 ? numOfSlides-1 : --pos;
//     slides.eq(pos).css({left:'-100%'}).animate({left:0},500);
// }

// Задано
// const array = ["test1", "test2", "test3"];

// Результат
// output = {
//   0: "test1",
//   1: "test2",
//   2: "test3",
// };

// const newArr = array.reduce((acc, item, idx)=> {
//   acc[idx] = item
//   return acc

// }, {})

// console.log('newArr', newArr)

$('.play-button').on('click', function () {
    $(this).hide();
    $(this).parent().fadeOut();
    $(this).parent().siblings('.slider-video')[0].play();
});

$('.slider-video').on('play', function () {
    $(this).attr('controls', '1');
});

// Additionnal code for the slider
var pos = 0,
    slides = $('.slide'),
    numOfSlides = slides.length;

function nextSlide(){
    stopCurrentVideo();
    slides.eq(pos).animate({left:'-100%'},500);
    pos = pos >= numOfSlides-1 ? 0 : ++pos;
    slides.eq(pos).css({left:'100%'}).animate({left:0},500);
}

function previousSlide(){
    stopCurrentVideo();
    slides.eq(pos).animate({left:'100%'},500);
    pos = pos == 0 ? numOfSlides-1 : --pos;
    slides.eq(pos).css({left:'-100%'}).animate({left:0},500);
}

function stopCurrentVideo(){
    $('.slider-video:eq('+pos+')').load().removeAttr('controls')
    .siblings('.overlay-content').show().find('.play-button').show();
}

$('.left').click(previousSlide);
$('.right').click(nextSlide);
