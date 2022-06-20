
var imgA = document.querySelectorAll('.detail-product__left-img-mini-wrap');
imgA[0].addEventListener('click', function(e){
    imgA[0].classList.add('detail-product__left-img-mini-wrap--active');
    imgA[1].classList.remove('detail-product__left-img-mini-wrap--active');
    imgA[2].classList.remove('detail-product__left-img-mini-wrap--active');
});
imgA[1].addEventListener('click', function(e){
    imgA[1].classList.add('detail-product__left-img-mini-wrap--active');
    imgA[0].classList.remove('detail-product__left-img-mini-wrap--active');
    imgA[2].classList.remove('detail-product__left-img-mini-wrap--active');
});
imgA[2].addEventListener('click', function(e){
    imgA[2].classList.add('detail-product__left-img-mini-wrap--active');
    imgA[1].classList.remove('detail-product__left-img-mini-wrap--active');
    imgA[0].classList.remove('detail-product__left-img-mini-wrap--active');
});


function changImg (id) {
    var img = document.getElementById(id).getAttribute('src');
    document.getElementById('anh-main').setAttribute('src', img);
    var active = document.getElementById(id);
}