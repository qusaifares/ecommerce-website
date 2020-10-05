import React from 'react';
import './Cart.css';

import SectionHeader from '../SectionHeader/SectionHeader';

import { items } from './cartItems';
import { Link } from 'react-router-dom';

import currencyFormat from '../../helpers/currencyFormat';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

interface Props {}

const Cart: React.FC<Props> = () => {
  return (
    <div className="cart">
      <div className="cart__content container page-width">
        <SectionHeader title="Your Cart" />
        <table className="cart__table">
          <thead className="cart__row">
            <tr>
              <th className="text-left">Product</th>
              <th className="text-right">Price</th>
              <th className="text-right small--hide">Quantity</th>
              <th className="text-right small--hide">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr className="cart__row">
                <td className="cart__meta text-left">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="cart__itemImage"
                  />
                  <div className="cart__itemInfo">
                    <Link to="/" className="cart__itemTitle">
                      {item.product.title}
                    </Link>
                    <p className="cart__itemColor">Color: Black</p>
                    <p className="cart__itemRemove">Remove</p>
                  </div>
                </td>
                <td className="cart-price text-right">
                  {currencyFormat(item.product.price)}
                  <div className="cart__itemPriceQty small--block">
                    Qty: {item.quantity}
                  </div>
                </td>
                <td className="cart-quantity text-right small--hide">
                  {item.quantity}
                </td>
                <td className="cart-itemTotal text-right small--hide">
                  {currencyFormat(item.quantity * item.product.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart__footer text-right small--text-center">
          <div className="cart__subtotal">Subtotal: {currencyFormat(550)}</div>
          <div className="cart__totalMessage">
            Taxes and shipping calculated at checkout
          </div>
          <div className="cart__footerActions">
            <PrimaryButton
              className="cart__checkoutBtn"
              style={{ backgroundColor: '#A56600' }}
            >
              Continue Shopping
            </PrimaryButton>
            <PrimaryButton className="cart__checkoutBtn">
              Check Out &#8594;
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
