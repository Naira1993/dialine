
$(function () {
    let count = 60;
    // window.localStorage.clear()
    if (window.localStorage.length) {
        count = JSON.parse(window.localStorage.getItem('count'))     
    }
    console.log(count);
    $('.lastpack').html(count)
    let timer = setInterval(() => {
        count -= 1;
        $('.lastpack').html(count)
        window.localStorage.setItem('count', count)
        if (count === 50) {
            clearInterval(timer);
            window.localStorage.clear()
        }
    }, 10000);
}
)