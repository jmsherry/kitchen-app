import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default function Calendar() {
  return (
    <header className="page-header">
      <NavLink exact to="/" className="logo">
        Kitchen App
      </NavLink>
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/cupboard">Cupboard</NavLink>
        <NavLink to="/meals">Meals</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
      </nav>
    </header>
  );
}
