// sproduct.js
'use strict';

// Chức năng thay đổi hình ảnh chính
var MainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName('small-img');

if (smallImg.length > 0) {
    smallImg[0].onclick = function() {
        MainImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function() {
        MainImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function() {
        MainImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function() {
        MainImg.src = smallImg[3].src;
    }
}

// Chức năng thêm vào giỏ hàng
var addToCartBtn = document.querySelector('.single-pro-details button.normal');
if (addToCartBtn) {
    addToCartBtn.onclick = function() {
        // Lấy thông tin sản phẩm
        var product = {
            img: MainImg ? MainImg.src : '',
            name: document.querySelector('.single-pro-details h4').innerText,
            price: document.querySelector('.single-pro-details h2').innerText,
            quantity: document.querySelector('.single-pro-details input[type="number"]').value
        };

        // Lấy giỏ hàng từ Local Storage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Thêm sản phẩm vào giỏ hàng
        cart.push(product);

        // Lưu giỏ hàng vào Local Storage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Sản phẩm đã được thêm vào giỏ hàng!');
    }
}
