$(document).ready(function () {
    var n = "#nav",
        no = "nav-open";
    $(".nav-menu").click(function () {
        if ($(n).hasClass(no)) {
            //$(n).removeClass(no);
            $(n).animate({ height: 0 }, 300);
            setTimeout(function () {
                $(n)
                    .removeClass(no)
                    .removeAttr("style");
            }, 320);
        } else {
            var newH = $(n)
                .css("height", "auto")
                .height();
            $(n)
                .height(0)
                .animate({ height: newH }, 300);
            setTimeout(function () {
                $(n)
                    .addClass(no)
                    .removeAttr("style");
            }, 320);
        }
    });
});

var words = ['UX Designer', 'Web Designer', 'Graduate!', 'UI Designer', 'Star!', 'Creative Problem Solver', 'Forever Learner'];
setInterval(function () {
    var randomIndex = Math.floor(Math.random() * words.length);
    var randomElement = words[randomIndex];
    $('.type-it').typeIt({
        content: randomElement
    });
}, 4000);
