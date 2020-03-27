$(function () {
    let url = new URL(window.location.href);
    params = url.search
    params = params.slice(1);
    let index = params.indexOf('callback');
    if (index !== -1) {
        const arr = params.split('=')
        setTimeout(()=> {
            alert(`Есть параметр callback, со значением: ${arr[1]}`)
        }, 2000)
    }
  })
