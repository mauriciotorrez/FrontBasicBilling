import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper cyan darken-1 px1">
      <NavLink to="/" className="brand-logo">
      Basic Services Payment
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li cy-data="home-nav-link">
          <NavLink to="/">History of Payments</NavLink>
        </li>
        <li>
          <NavLink to="/pendingbills">Pending Bills</NavLink>
        </li>
        <li>
          <NavLink to="/billpayment">Create a Bill</NavLink>
        </li>
        <li>
          <NavLink to="/paybill">Pay a Bill</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
