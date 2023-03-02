<template>
    <aside class="cart-container">
        <div class="cart">
            <h1 class="cart-title spread">
            <span>
                Cart
                <i class="bi-cart-fill me-1"></i>
            </span>
            <button class="cart-close">&times;</button>
            </h1>
            <div class="cart-body">
            <table class="cart-table">
                <thead>
                <tr>
                    <th><span class="sr-only">Product Image</span></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th><span class="sr-only">Actions</span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img src="img/100/phone.jpg" alt="..." ></td>
                    <td>Phone</td>
                    <td>$1.00</td>
                    <td class="center">1</td>
                    <td>$1.00</td>
                    <td class="center">
                    <button class="btn btn-light cart-remove">
                        &times;
                    </button>
                    </td>
                </tr>
                <tr>
                    <td><img src="img/100/game.jpg" alt="..." /></td>
                    <td>Game</td>
                    <td>$1.00</td>
                    <td class="center">1</td>
                    <td>$1.00</td>
                    <td class="center">
                        <button class="btn btn-light cart-remove">
                        &times;
                        </button>
                    </td>
                    </tr>
                </tbody>
            </table>
            <p class="center"><em>No items in cart</em></p>
            <div class="spread">
                <span><strong>Total:</strong> $1.00</span>
                <button class="btn btn-light">Checkout</button>
            </div>
            </div>
        </div>
    </aside>
</template>
