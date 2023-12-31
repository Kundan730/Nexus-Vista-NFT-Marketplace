'use client';

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';

import '@fontsource/work-sans';
import classNames from 'classnames';
import img from 'next/image';
import { useState } from 'react';
const discover = [
  {
    digit: '240k+',
    field: 'Total Sale',
  },
  {
    digit: '100k+',
    field: 'Auctions',
  },
  {
    digit: '240k+',
    field: 'Artists',
  },
];
const trending = [
  {
    img1: '/assets/nft/animal1.png',
    img2: '/assets/nft/animal2.png',
    img3: '/assets/nft/animal3.png',
    img4: '/assets/nft/animal4.png',
    title1: 'DSGN Animals',
    title2: 'MrFox',
  },
  {
    img1: '/assets/nft/mushroom1.png',
    img2: '/assets/nft/mushroom2.png',
    img3: '/assets/nft/mushroom3.png',
    img4: '/assets/nft/mushroom4.png',
    title1: 'Magic Mushrooms',
    title2: 'Shroomie',
  },
  {
    img1: '/assets/nft/machine1.png',
    img2: '/assets/nft/machine2.png',
    img3: '/assets/nft/machine3.png',
    img4: '/assets/nft/machine4.png',
    title1: 'Disco Machines',
    title2: 'BeKind2Robots',
  },
];
const creator = [
  {
    id: 1,
    img: '/assets/nft/creator1.png',
    name: 'Keepitreal',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator2.png',
    name: 'DigiLab',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator3.png',
    name: 'GravityOne',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator4.png',
    name: 'Juanie',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator5.png',
    name: 'BlueWhale',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator6.png',
    name: 'mr fox',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator7.png',
    name: 'Shroomie',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator8.png',
    name: 'robotica',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator9.png',
    name: 'RustyRobot',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator10.png',
    name: 'animakid',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator11.png',
    name: 'Dotgu',
    sale: '34.53 ETH',
  },
  {
    id: 1,
    img: '/assets/nft/creator12.png',
    name: 'Ghiblier',
    sale: '34.53 ETH',
  },
];
const nftdata = [
  {
    img: '/assets/nft/nft1.png',
    img1: '/assets/nft/NftAvatar1.png',
    title1: 'Distant Galaxy',
    title2: 'MoonDancer',
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    img: '/assets/nft/nft2.png',
    img1: '/assets/nft/NftAvatar2.png',
    title1: 'Life On Edena',
    title2: 'NebulaKid',
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    img: '/assets/nft/nft3.png',
    img1: '/assets/nft/NftAvatar3.png',
    title1: 'AstroFiction',
    title2: 'Spaceone',
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
];
const browse = [
  {
    img: '/assets/nft/browse1.png',
    title: 'Art',
    icon: '/assets/nft/brush.svg',
  },
  {
    img: '/assets/nft/browse2.png',
    title: 'Collectibles',
    icon: '/assets/nft/swatches.svg',
  },
  {
    img: '/assets/nft/browse3.png',
    title: 'Music',
    icon: '/assets/nft/music.svg',
  },
  {
    img: '/assets/nft/browse4.png',
    title: 'Photography',
    icon: '/assets/nft/photography.svg',
  },
  {
    img: '/assets/nft/browse5.png',
    title: 'Video',
    icon: '/assets/nft/video.svg',
  },
  {
    img: '/assets/nft/browse6.png',
    title: 'Utility',
    icon: '/assets/nft/utility.svg',
  },
  {
    img: '/assets/nft/browse7.png',
    title: 'Sport',
    icon: '/assets/nft/sport.svg',
  },
  {
    img: '/assets/nft/browse8.png',
    title: 'Virtual Worlds',
    icon: '/assets/nft/world.svg',
  },
];
const howwoks = [
  {
    img: '/assets/nft/workicon1.png',
    title: 'Setup Your wallet',
    desc: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
  },
  {
    img: '/assets/nft/workicon2.png',
    title: 'Create Collection',
    desc: 'Upload your work and setup your collection. Add a description, social links and floor price.',
  },
  {
    img: '/assets/nft/workicon3.png',
    title: 'Start Earning',
    desc: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
  },
];
const Navitem = ['Marketplace', 'Rankings', 'Connect a wallet'];
const socialicon = [
  {
    icon: '/assets/nft/discord.svg',
    link: '#_',
    alt: 'discord',
  },
  {
    icon: '/assets/nft/youtube.svg',
    link: '#_',
    alt: 'youtube',
  },
  {
    icon: '/assets/nft/twitter.svg',
    link: '#_',
    alt: 'twitter',
  },
  {
    icon: '/assets/nft/instagram.svg',
    link: '#_',
    alt: 'instagram',
  },
];

const Crypto = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#2B2B2B] font-worksans lg:gap-20">
      <nav className="min-h-full bg-gray-800 min-w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="logo flash (1)_prev_ui.png"
                  alt="test"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a
                    href="/dashboard"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#trends"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Discover Trends
                  </a>
                  <a
                    href="#discover"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    NFTS
                  </a>
                  <a
                    href="#creator"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Create
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Connect to Wallet
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
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
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <div>
                    <UserButton />
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/* Menu open: "hidden", Menu closed: "block" */}
                <svg
                  className="block h-6 w-6"
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
                {/* Menu open: "block", Menu closed: "hidden" */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="md:hidden" id="mobile-menu">
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
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
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Settings
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center gap-10 px-[15px] capitalize sm:max-w-[590px] md:max-w-[690px] md:gap-20 md:px-0 lg:max-w-[900px] lg:gap-[100px] xl:max-w-[1050px]">
        <div className=" flex w-full flex-col justify-between gap-[30px] sm:flex-row">
          <div className="flex flex-col gap-5 text-start text-white md:max-w-[330px] md:gap-[30px] lg:max-w-[510px]">
            <div className=" text-start text-[28px] font-semibold capitalize leading-[39px] md:text-[38px] md:leading-[45px] lg:text-[67px] lg:leading-[73px]">
              Unlock the World of <br></br>Digital Art & Collect NFTs
            </div>
            <div className="-mt-[10px] text-start text-base font-normal leading-[22px] md:text-base md:leading-[22px]">
              Welcome to our NFT Marketplace UI, powered by Anima for Figma.
              Dive into a vibrant ecosystem where you can collect, buy, and sell
              art from over many talented NFT artists.
            </div>
            <div className="hidden gap-[30px] sm:flex sm:flex-col">
              {/* <div className="flex w-full justify-between gap-[30px]">
                {discover.map((data, index) => {
                  return (
                    <div key={index} className="w-full max-w-[150px]">
                      <div className="!font-spacemono text-[22px] font-bold md:text-[22px] md:leading-[35px] lg:leading-[39px]">
                        {data.digit}
                      </div>
                      <div className="text-base font-normal leading-[38px] md:text-base lg:text-[24px]">
                        {data.field}
                      </div>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
          <div className="max-h-[540px] w-full rounded-[20px] text-white md:max-w-[330px] lg:max-w-[510px]">
            <a href="https://mumbai.polygonscan.com/address/0x7771eEa8c6f49bE7999e9F31D7D4fAE7c708Afbe">
              <img src={'/image 2.png'} alt="test" className="w-full" />
            </a>
            <div className="flex h-[109px] flex-col justify-start gap-2.5 rounded-b-[20px] bg-[#3B3B3B] px-5 py-[22px]">
              <div className="flex text-[22px] font-semibold leading-[30px]">
                Horse Riding
              </div>
              <div className="flex items-center gap-3">
                <img src={'/assets/nft/man.svg'} alt="ani" />
                <div className="text-base font-normal leading-[22px]">
                  Testnet
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-w-full flex-col gap-[30px] rounded-[20px] text-white sm:hidden">
            <a
              href="#_"
              className=" flex max-w-full items-center justify-center gap-[15px] whitespace-nowrap rounded-[20px] bg-[#A259FF] py-[15px] lg:py-[19px]"
            >
              <img src={'/assets/nft/rocket.svg'} alt="rocket" />
              <button className="text-base font-semibold leading-[22px]">
                Get Started
              </button>
            </a>
            <div className="xs:px-[5%] flex justify-between">
              {discover.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="text-[22px] font-bold md:text-[22px] md:leading-[35px] lg:leading-[39px]">
                      {data.digit}
                    </div>
                    <div className="text-base font-normal leading-[38px] md:text-base lg:text-[24px]">
                      {data.field}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id='trends' className="flex w-full flex-col gap-10 text-white md:px-0 lg:gap-[60px]">
          <div className="flex flex-col items-start justify-start gap-2.5 text-start">
            <div className="text-[28px] font-semibold leading-[39px] lg:text-[38px] lg:leading-[45px]">
              Trending Collection
            </div>
            <div className="flex justify-between">
              <div className="text-base font-normal md:text-[22px] md:leading-[22px] lg:leading-[35px]">
                Checkout our vast NFT collection.
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-[30px]">
            {trending.map((data, i) => {
              return (
                <div
                  key={i}
                  className={` flex w-full flex-col gap-[15px] px-[7%] sm:px-0 md:max-w-[330px] ${
                    i === 1 && 'hidden sm:flex'
                  } ${i === 2 && 'hidden md:flex'} `}
                >
                  <div>
                    <img src={data.img1} alt="img1" className="w-full" />
                  </div>
                  <div className="flex w-full justify-between gap-[15px] sm:flex-row">
                    <div>
                      <img src={data.img2} alt="img2" className="w-full" />
                    </div>
                    <div>
                      <img src={data.img3} alt="img3" />
                    </div>
                    <div className="flex max-h-[100px] w-full max-w-[100px] items-center justify-center rounded-[20px] bg-[#A259FF] text-base font-bold leading-[35px] lg:text-[22px]">
                      1025+
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 text-start">
                    <div className="flex text-[22px] font-semibold leading-[30px]">
                      {data.title1}
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={data.img4} alt="img4" />
                      <div className="text-base font-normal leading-[22px]">
                        {data.title2}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Creator */}
        <div id='creator' className="flex w-full max-w-[690px] flex-col justify-center gap-10 text-white sm:mt-0 sm:gap-[60px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1050px]">
          <div className="flex justify-between text-start sm:px-0">
            <div className="flex flex-col gap-2.5 sm:max-w-[343px] lg:max-w-full">
              <div className="text-[28px] font-semibold leading-[39px] lg:text-[38px] lg:leading-[45px]">
                Top creators
              </div>
              <div className="text-base font-normal leading-[22px] lg:text-[22px] lg:leading-[35px]">
                Checkout Top Rated Creators on the NFT Marketplace
              </div>
            </div>
            <div className="hidden items-end justify-between sm:flex"></div>
          </div>
          <div className="flex w-full flex-wrap justify-center gap-5 sm:gap-[30px]">
            {creator.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`relative flex h-[100px] w-full items-center justify-center gap-5 rounded-[20px] bg-[#3B3B3B] md:max-w-[330px] lg:h-[239px] lg:max-w-[200px] lg:flex-col xl:max-w-[240px] ${
                    i > 5 && 'hidden lg:flex'
                  }`}
                >
                  <div className="absolute left-[20px] top-[18px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#2B2B2B] text-center text-[#858584]">
                    {i + 1}
                  </div>
                  <div className="flex max-w-[200px] justify-start">
                    <div className="w-[60px] rounded-full bg-white lg:h-[120px] lg:w-[120px]">
                      <img src={data.img} alt="img" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="text-start text-[22px] font-semibold leading-[30px] lg:text-center">
                      {data.name}
                    </div>
                    <div className="text-base font-normal leading-[22px]">
                      <span className="text-[#858584]">Total Sales:</span> 34.53
                      ETH
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex w-full items-end justify-between px-[10%] sm:hidden">
              <div className="flex w-full max-w-full items-center justify-center gap-[15px] rounded-[20px] border-2 border-[#A259FF] px-[30px] py-[13px] lg:px-[50px]">
                <img src={'/assets/nft/rocket.svg'} alt="ranking" />
                <button className="text-base font-semibold leading-[22px]">
                  View Rankings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NFT */}
        <div id='discover' className="mt-10 flex w-full flex-col justify-center gap-10 text-white sm:mt-0 lg:gap-[60px]">
          <div className=" flex justify-between text-start">
            <div className="flex flex-col gap-2.5">
              <div className="text-[28px] font-semibold leading-[39px] lg:text-[38px] lg:leading-[45px]">
                Discover More NFTs
              </div>
              <div className="text-base font-normal leading-[22px] lg:text-[22px] lg:leading-[35px]">
                Explore new trending NFTs
              </div>
            </div>
            <div className="hidden items-end justify-end sm:flex"></div>
          </div>
          <div className="flex w-full max-w-[1050px] flex-col items-center justify-between gap-[30px] rounded-[20px] sm:flex-row">
            {nftdata.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`h-[469px] w-full max-w-[330px] lg:max-w-[330px] ${
                    i === 2 && 'sm:hidden lg:block'
                  }`}
                >
                  <div className="rounded-t-[20px]">
                    <img src={data.img} alt="img" className="w-full" />
                  </div>
                  <div className="h-[173px] rounded-b-[20px] bg-[#3B3B3B] py-5">
                    <div className="flex flex-col items-center justify-center gap-[25px]">
                      <div className="flex w-full max-w-[270px] flex-col gap-2.5 text-start">
                        <div className="flex text-[22px] font-semibold leading-[30px]">
                          {data.title1}
                        </div>
                        <div className="flex items-center gap-3">
                          <img src={data.img1} alt="img1" />
                          <div className="!font-spacemono text-base font-normal leading-[22px]">
                            {data.title2}
                          </div>
                        </div>
                      </div>
                      <div className="!font-spacemono flex w-full max-w-[270px] justify-between">
                        <div className="flex flex-col gap-2">
                          <div className="text-start text-xs font-normal leading-[13px] text-[#858584]">
                            Price
                          </div>
                          <div className="text-base font-normal leading-[21px] text-white">
                            1.63 ETH
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-xs font-normal leading-[13px] text-[#858584]">
                            Highest Bid
                          </div>
                          <div className="text-base font-normal leading-[21px] text-white">
                            0.33 wETH
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-10 capitalize sm:max-w-[590px] md:max-w-[690px] md:gap-20 lg:max-w-[900px] lg:gap-[100px] xl:max-w-[1050px]">
        <div className="flex w-full flex-col justify-center gap-10 px-[15px] text-white md:px-0 lg:gap-[60px]">
          <div className=" flex flex-col justify-start text-start sm:pl-0 lg:gap-2.5">
            <div className="text-[28px] font-semibold leading-[39px] lg:text-[38px] lg:leading-[45px]">
              How it works
            </div>
            <div className="text-base font-normal leading-[35px] lg:text-[22px]">
              Find out how to get started
            </div>
          </div>
          <div className="flex w-full max-w-[1050px] flex-col items-center justify-center gap-[30px] sm:flex-row">
            {howwoks.map((data, index) => {
              return (
                <div
                  key={index}
                  className=" flex max-h-fit w-full items-center gap-5 rounded-[20px] bg-[#3B3B3B] p-5 sm:h-[337px] sm:flex-col sm:justify-center sm:p-0 md:max-w-[330px] lg:h-[439px]"
                >
                  <div>
                    <img
                      src={data.img}
                      alt="img"
                      className="h-[100px] min-w-[100px] sm:h-[150px] lg:h-auto"
                    />
                  </div>
                  <div className="flex w-full max-w-[155px] flex-col gap-2.5 text-start sm:text-center md:max-w-[170px] lg:max-w-[270px]">
                    <div className="text-base font-semibold leading-[30px] lg:text-[22px]">
                      {data.title}
                    </div>
                    <div className="text-xs font-normal normal-case leading-4 lg:text-base lg:leading-[22px]">
                      {data.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Crypto;
