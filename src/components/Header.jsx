import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div>
      <img className = "h-30 w-30" src={logo} alt="Light Soul Logo" />

      <ul>
        <li href = "#">Home</li>
        <li href = "#">Produtos</li>
        <li href = "#">Sobre</li>
        <li href = "#">Contato</li>
      </ul>

      <div className="flex gap-4">
        <span>🛒</span>
        <span>👤</span>
      </div>
    </div>
  )
}

export default Header