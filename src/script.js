/*************************
 * Inject datas
 */
var Mustache = require('mustache');

let tmplMenu = document.getElementById('tmpl-menu').innerHTML;
let tmplSlides = document.getElementById('tmpl-slides').innerHTML

let view = {
    persons: [
        {
            nickname: 'Xibalba',
            twitch: '/xibalba_n7',
            twitter: '@shupe_tv',
            title_fr: 'No spoiler',
            title_en: 'No spoiler',
            description_fr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
            description_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        }
    ]
};

let menu = Mustache.render(tmplMenu, view);
document.getElementById('menu').innerHTML = menu;
let slides = Mustache.render(tmplSlides, view);
document.getElementById('slides').innerHTML = slides;

/*************************
 * Animations
 */
require('joshjs/css/animate.css');
import Josh from 'joshjs';

//const animations = new Josh({
//    initClass: 'shupetv-animate'
//});

/************************
 * Navigation
 */
import Pageable from 'pageable';

var anchors = document.querySelectorAll('#menu li');
new Pageable('#slides', {
    animation: 500,
    delay: 100,
    onFinish: update,
    events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: false, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
        keydown: false, // enable / disable keyboard navigation
    },
});

function update(data) {
    let that = this;
    anchors.forEach(function (anchor, i) {
        anchor.classList.toggle("active", i === that.index);
    });
}