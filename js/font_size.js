(function(doc, win){
    var docEl = doc.documentElement;
    resizeEvt = 'orientationchange' in window ? 'orientationchange': 'resize',
        recalc = function(){
            var clientWidth = docEl.clientWidth;
            docEl.style.fontSize = (clientWidth < 640 ? clientWidth / 16 : 40) + 'px';
        };
    recalc();
    if (doc.addEventListener){
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    }
})(document, window);