import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F5F2]">
      <div className="mt-10 w-full max-w-[450px] bg-[#FBF9F7] border border-[#E3EAD8] rounded-xl p-6 shadow-sm min-h-[500px]">
        <h1 className="mt-10 text-center text-2xl font-bold text-[#7A8F6A] tracking-tight">
          Realize o seu Cadastro
        </h1>

        <div className="mt-10 w-full">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#7A8C7B]"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Digite o seu nome"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md bg-[#F5F1EA] px-3 py-1.5 text-base text-[#5F5F5F] placeholder:text-[#9CA3AF] focus:outline-2 focus:outline-[#ADC9B0] sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#7A8C7B]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Digite o seu email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-[#F5F1EA] px-3 py-1.5 text-base text-[#5F5F5F] placeholder:text-[#9CA3AF] focus:outline-2 focus:outline-[#ADC9B0] sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#7A8F6A]"
              >
                Senha
              </label>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="block w-full rounded-md bg-[#F5F1EA] px-3 py-1.5 text-base text-[#5F5F5F] placeholder:text-[#9CA3AF] focus:outline-2 focus:outline-[#ADC9B0] sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-10 flex w-full justify-center rounded-md bg-[#C65D4E] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#CF6C5E]"
              >
                Cadastrar
              </button>
            </div>

            <div className="text-sm text-center mt-4">
              <span className="text-gray-600">Já possui conta? </span>
              <Link
                to="/login"
                className="font-semibold text-[#C65D4E] hover:underline"
              >
                Entrar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;