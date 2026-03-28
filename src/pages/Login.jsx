import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F5F2] ">
      <div className="mt-10 w-full max-w-[450px] bg-[#FBF9F7] border border-[#E3EAD8] rounded-xl p-6 shadow-sm min-h-[500px]">
        <h1 className="mt-10 text-center text-2xl/9 font-bold text-[#7A8F6A] tracking-tight">
          Realize o seu Login
        </h1>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-[#7A8C7B]"
              >
                Email
              </label>
              <div>
                <input
                  className="block w-full rounded-md bg-[#F5F1EA] px-3 py-1.5 text-base text-[#5F5F5F] outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#9CA3AF] focus:outline-2 focus:-outline-offset-2 focus:outline-[#ADC9B0] sm:text-sm/6"
                  type="email"
                  placeholder="Digite o seu email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-[#7A8F6A]"
                >
                  Senha
                </label>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#C65D4E] hover:text-[#CF6C5E]"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>

              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="block w-full rounded-md bg-[#F5F1EA] px-3 py-1.5 text-base text-[#5F5F5F] outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#9CA3AF] focus:outline-2 focus:-outline-offset-2 focus:outline-[#ADC9B0] sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className=" mt-10 flex w-full justify-center rounded-md bg-[#C65D4E] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[#CF6C5E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Entrar
              </button>
            </div>
            <div className="text-sm text-center mt-4">
              <span className="text-gray-600">Não possui cadastro? </span>
              <Link
                 to="/cadastro"
                className="font-semibold text-[#C65D4E] hover:underline"
              >
                Cadastre-se
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
