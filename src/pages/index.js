import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from './components/Navbar'
import HeroSection from './components/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='home h-screen'>
                 <svg class="absolute blur-3xl -right-96 -top-80" fill="none" viewBox="0 0 400 400" height="80%" width="80%" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_10_20)">
                    <g filter="url(#filter0_f_10_20)">
                        <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0"></path>
                        <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8"></path>
                        <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4"></path>
                        <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#6551f3"></path>
                    </g>
                </g>
                <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                        <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
                    </filter>
                </defs>
            </svg>
            <svg class="absolute blur-3xl -bottom-64 left-[-30rem]" fill="none" viewBox="0 0 400 400" height="60%" width="60%" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_10_20)">
                    <g filter="url(#filter0_f_10_20)">
                        <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0"></path>
                        <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8"></path>
                        <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4"></path>
                        <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#6551f3"></path>
                    </g>
                </g>
                <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                        <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
                    </filter>
                </defs>
            </svg>
      <Nav />
      <HeroSection />
    </main>
  )
}
