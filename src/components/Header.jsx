import React from 'react'
import logo from "../assets/logo.png"
import user from "../assets/user.svg"
import car from "../assets/car.svg"

const Header = () => {
  return (
    <div className = "flex items-center justify-between h-25 bg-[#F5F1EA] shadow-md " >
      <img className = "ml-8 mt-5 h-30 w-30" src={logo} alt="Light Soul Logo" />
    <nav>
      <ul className = "flex gap-10 text-lg font-bold text-gray-700 ml-150 mt-1" >
        <li > <a className = "text-[#C65D4E]" href = "#">Home</a></li>
         <li > <a className = "text-[#C65D4E]" href = "#">Produtos</a></li>
          <li > <a className = "text-[#C65D4E]" href = "#">Sobre</a></li>
         <li > <a className = "text-[#C65D4E]" href = "#">Contato</a></li>
      </ul>
      </nav>

      <div className="flex gap-8 mr-20 mt-3 ">
      <button className="cursor-pointer">
        <img src = {car}/>
        </button>
        <button className="cursor-pointer">
        <img src={user} alt="Usuário" />
      </button>
        
      </div>
    </div>
  )
}

export default Header;