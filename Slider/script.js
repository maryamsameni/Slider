let _background = document.querySelectorAll('.pic>ul>img')
let flag = 0
_background.forEach((item, index) => {
    item.addEventListener('click', () => {
        let _imgCircle = item.getAttribute('src')
        document.getElementsByClassName('back')[0].setAttribute('src', _imgCircle)
        flag = index
        _change()
    })
})
document.getElementsByClassName('right')[0].addEventListener('click', () => {
    if (flag < (_background.length - 1)) {
        flag++
    } else {
        flag = 0
    }
    _srcImg()
    _change()
})
document.getElementsByClassName('left')[0].addEventListener('click', () => {
    if (flag > 0) {
        flag--
    } else {
        flag = (_background.length) - 1
    }
    _srcImg()
    _change()
})

function _srcImg() {
    let _src = document.querySelector('.pic>ul>img:nth-of-type(' + (flag + 1) + ')').getAttribute('src')
    document.getElementsByClassName('back')[0].setAttribute('src', _src)
}

function _change() {
    for (i = 0; i < _background.length; i++) {
        _background[i].classList.remove('change')
        _background[i].style.width = '80px'
        _background[i].style.height = '80px'
    }
    document.querySelector('.pic>ul>img:nth-of-type(' + (flag + 1) + ')').classList.add('change')
    document.querySelector('.pic>ul>img:nth-of-type(' + (flag + 1) + ')').style.width = '90px'
    document.querySelector('.pic>ul>img:nth-of-type(' + (flag + 1) + ')').style.height = '90px'
}