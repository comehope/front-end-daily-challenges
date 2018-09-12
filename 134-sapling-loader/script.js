let $branch = '.branch';
let $leaves = '.leaves span';
let animation = new TimelineMax({repeat: -1, repeatDelay: 0.5});

animation.from($branch, 4, {scaleY: 0, ease: Power1.easeOut}, 'branch')
    .staggerFrom($leaves, 0.5, {scale: 0, ease: Power1.easeOut}, 0.5, 0.5, 'branch')
    .to([$branch, $leaves], 3, {backgroundColor: 'yellow'})
    .to([$branch, $leaves], 1, {autoAlpha: 0});
