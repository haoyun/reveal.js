var x = $('.theorem');
x.each(function(i){
    var credit = $(this).attr("data-credit");
    if (credit === undefined) {
        $(this).prepend("<h4>定理</h4>");
    } else {
        $(this).prepend("<h1>定理 （" + credit + "）</h1>");
    };
});

var y = $('.corollary');
y.each(function(i){
    var credit = $(this).attr("data-credit");
    if (credit === undefined) {
        $(this).prepend("<h4>推论</h4>");
    } else {
        $(this).prepend("<h4>推论 （" + credit + "）</h4>");
    };
});