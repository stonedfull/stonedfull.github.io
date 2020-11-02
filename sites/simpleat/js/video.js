document.querySelector('#play').addEventListener('click', () => {

    const overlay = document.querySelector('.video-preview');
    const video = document.querySelector('iframe');

    overlay.style.opacity = '0';
    video.style.opacity = '1';
    setTimeout(() => { overlay.style.display = 'none' }, 1000);

    video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

});

for (let btn of document.querySelectorAll('.testimonial .icon-play')) {

    btn.addEventListener('click', e => {

        const target = e.target;
        const videoDiv = target.closest('.testimonial-item').children[0];
        const video = videoDiv.children[0];

        if (video.paused) {
            videoDiv.style.display = 'block';
            videoDiv.style.opacity = '1';
            setTimeout(() => { video.play() }, 250);
        } else {
            video.pause();
            videoDiv.style.opacity = '0';
            setTimeout(() => { videoDiv.style.display = 'none' }, 500);
        }

    })

}