
$(document).ready(function () {
    const $pageViews = $('#pageviews'),
    $valueMonth = $('.pricing__p--value'),
    $barPricing = $('.pricing__bar'),
    $checkPricing = $('.pricing__check');

    let pageViews = ['10K','50K','100K','500K','1M'],
        valueMonth = [8,12,16,24,36],
        isYeary = false;

    $barPricing.on('input', function () {
        uptadePricing();
    });    

    $checkPricing.on('change', function () {
        (!isYeary) ? isYeary = true : isYeary = false
        uptadePricing();
    });

    function uptadePricing(){
        (isYeary) 
            ? $valueMonth.text(`$${valueMonth[$barPricing.val()-1] * .75}.00`)
            : $valueMonth.text(`$${valueMonth[$barPricing.val()-1]}.00`);
         
        $pageViews.text(pageViews[$barPricing.val()-1]);
        
        let styleValue = ($barPricing.val()-1) * 25;

        $barPricing.css('background', `linear-gradient(to right, hsl(174, 77%, 80%) ${styleValue}% , hsl(224, 65%, 95%) 0%`);
        
    }

});

