// script.js
'use strict';

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Cập nhật giỏ hàng trên trang cart.html
document.addEventListener('DOMContentLoaded', function() {
    var cartTableBody = document.querySelector('#cart tbody');
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Hàm để hiển thị giỏ hàng
    function displayCart() {
        cartTableBody.innerHTML = ''; // Xóa các sản phẩm hiện có
        var subtotal = 0;

        cart.forEach(function(product, index) {
            var productPrice = parseFloat(product.price.replace(/\D/g, ''));
            var productTotal = productPrice * product.quantity;
            subtotal += productTotal;

            var row = document.createElement('tr');

            row.innerHTML = `
                <td><a href="#" class="remove-item" data-index="${index}"><i class="far fa-times-circle"></i></a></td>
                <td><img src="${product.img}" alt=""></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><input type="number" min="0" max="10" value="${product.quantity}" data-index="${index}" class="update-quantity"></td>
                <td>${productTotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
            `;

            cartTableBody.appendChild(row);
        });

        // Cập nhật tổng giá trị giỏ hàng
        document.querySelector('#subtotal tr:nth-child(1) td:nth-child(2)').innerText = subtotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        document.querySelector('#subtotal tr:nth-child(3) td:nth-child(2)').innerText = subtotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

        // Thêm sự kiện click cho nút xóa
        var removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                var index = button.getAttribute('data-index');
                removeFromCart(index);
            });
        });

        // Thêm sự kiện thay đổi số lượng sản phẩm
        var quantityInputs = document.querySelectorAll('.update-quantity');
        quantityInputs.forEach(function(input) {
            input.addEventListener('change', function() {
                var index = input.getAttribute('data-index');
                updateQuantity(index, input.value);
            });
        });
    }

    // Hàm để xóa sản phẩm khỏi giỏ hàng
    function removeFromCart(index) {
        cart.splice(index, 1); // Xóa sản phẩm khỏi mảng cart
        localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật Local Storage
        displayCart(); // Cập nhật lại giao diện giỏ hàng
    }

    // Hàm để cập nhật số lượng sản phẩm trong giỏ hàng
    function updateQuantity(index, quantity) {
        cart[index].quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật Local Storage
        displayCart(); // Cập nhật lại giao diện giỏ hàng
    }

    // Hiển thị giỏ hàng khi trang được tải
    displayCart();
});
