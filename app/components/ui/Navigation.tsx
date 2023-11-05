'use client'

import React from 'react'
import { redirect, useRouter } from 'next/navigation';
import Image from 'next/image';


const Nav = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login');
  };

  return (
    <nav
    className="flex items-center justify-between p-6 lg:px-8"
    aria-label="Global"
  >
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <Image
          className="h-8 w-auto"
          src="/logo flash (1)_prev_ui.png"
          alt=""
        />
      </a>
    </div>
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      <a
        href="#"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Product
      </a>
      <a
        href="#"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Features
      </a>
      <a
        href="#"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Wallet
      </a>
      <a
        href="#"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Marketplace
      </a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <button
      type='button'
      className='text-sm font-semibold leading-6 text-gray-900'
      onClick={handleLogin}
    >
      Log in <span aria-hidden="true">→</span>
    </button>
    </div>
  </nav>
  )
}

export default Nav;