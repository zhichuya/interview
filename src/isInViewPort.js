const isInViewPort = function (el) {
    const viewHeight = window.innerHeight || document.body.clientHeight;
    const viewWidth = window.innerWidth || document.body.clientWidth;

    const {top, right, bottom, left} = el.wx.getBoundingClientRect();

    return top >= 0 && right <= viewWidth && bottom <= viewHeight && left >= 0;
};
