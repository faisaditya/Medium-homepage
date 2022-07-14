import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='main-container justify-between h-full w-full gap-x-6'>
                <div>
                    <Link href='/' passHref>
                        <a>
                            <Image
                                src='/medium.svg'
                                alt='Medium Logo'
                                height='25px'
                                width='160px'
                            />
                        </a>
                    </Link>
                </div>
                <div>
                    <ul className='flex items-center gap-x-5 justify-between'>
                        <li className='hidden md:list-item text-sm'>
                            <Link href='#' passHref>
                                Our Story
                            </Link>
                        </li>
                        <li className='hidden md:list-item text-sm'>
                            <Link href='#' passHref>
                                Membership
                            </Link>
                        </li>
                        <li className='hidden md:list-item text-sm'>
                            <Link href='#' passHref>
                                Writer
                            </Link>
                        </li>
                        <li className='hidden sm:list-item text-sm'>
                            <Link href='#' passHref>
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link href='#' passHref>
                                <button className='btn-rounded bg-black text-white'>
                                    Get Started
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}