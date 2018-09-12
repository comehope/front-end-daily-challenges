let elements = '.container div span';
let animation = new TimelineMax({repeat: -1, repeatDelay: 1});

animation.from(elements, 1, {scale: 0})
    .to(elements, 1, {y: '-100px', scaleX: 0.25})
    .to(elements, 1, {scaleY: 0.25, rotation: 180})
    .to(elements, 1, {scaleX: 1})
    .to(elements, 1, {y: '-60px', scaleY: 0.1})
    .to(elements, 1, {x: '-30px'})
    .to(elements, 1, {x: '30px'})
    .to(elements, 1, {x: '0', scaleX: 0.1, scaleY: 1})
    .to(elements, 1, {scaleX: 0.5, scaleY: 0.1})
    .to(elements, 1, {y: '-80px', scaleY: 0.5, borderRadius: '50%'})
    .to(elements, 2, {y: '-10px', scaleX: 0.1, scaleY: 0.5, borderRadius: '0%', rotation: 0})
    .to(elements, 1, {y: '-300px', delay: 0.5})
    .timeScale(2);
