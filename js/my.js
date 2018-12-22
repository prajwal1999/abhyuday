contentArray =  [
    document.getElementById('home'),
    document.getElementById('about'),
    document.getElementById('events'),
    document.getElementById('competitions'),
    document.getElementById('workshops'),
    document.getElementById('delegate'),
    document.getElementById('sponsors'),
    document.getElementById('faqs'),
    document.getElementById('contact'),
    document.getElementById('register')
]

function show(e) {
    can =  e.id
    can = parseInt(can)
    for (x in contentArray){
        contentArray[x].style.display = "none"
    }
    contentArray[can-1].style.display = "table"
    $('body').removeClass('info-is-visible');
}

$(document).ready(function(){
  $(".eventContent").click(function(){
    $(".eventDes").show();
  });
});



// -----------------FAQS START------------------------
function showFaq(e) {
    $(e).toggleClass('faq-contentShow');
}
// -----------------FAQS ENDS-------------------------