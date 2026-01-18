import React, { useState } from 'react'
import appleLogo from '../assets/SVG.svg'
import mbp from '../assets/laptop.jpg'
import mbp2 from '../assets/text.png'
import mbp3 from '../assets/mbp3.jpg'
import mbp4 from '../assets/mbp4.jpg'
import search from '../assets/SVG(1).svg'
import bag from '../assets/SVG(3).svg'
import middle from '../assets/middle.jpg'
import mbp5 from '../assets/mbp5.png'
import mbp6 from '../assets/mbp6.png'
import mbp7 from '../assets/mbp7.png'
import mbp8 from '../assets/mbp8.png'
import mbp9 from '../assets/mbp9.png'
import mbp10 from '../assets/mbp10.png'
import mbp11 from '../assets/mbp11.jpg'
import mac from '../assets/mac.png'
import file from '../assets/file.png'
import airdrop from '../assets/airdrop.png'
import bird from '../assets/bird.jpg'
import sun from '../assets/sun.png'
import battery from '../assets/battery.png'
import vector from '../assets/Vector.svg'
import laptop from '../assets/laptop.png'
import mbp3white from '../assets/mbp3white.png'
const Home = () => {
    const [color, setcolor] = useState('black');
    const [size, setsize] = useState('14"')
    const [img, setImg] = useState('small')
    return (
        <div className='bg-black min-h-screen text-white overflow-hidden pl-10 pr-10'>
            <header className='flex items-center justify-evenly py-3 '>
                <div className='flex items-center'>
                    <img src={appleLogo} alt="apple logo" className='w-10 h-10 hover:scale-120 transition-all duration-500 color-white' />
                </div>
                <nav className='flex items-center'>
                    <ul className='flex gap-6 text-[12px] text-white/80 font-normal'>
                        {['Store', 'Mac', 'iPhone', 'Watch', 'Vision', 'AirPods'].map((item) => (
                            <li key={item} className='hover:text-white cursor-pointer transition-colors'><a href={`#${item.toLowerCase()}`}>{item}</a></li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <button><img src={search} alt="search" className='hover:scale-110 transition-all duration-300 color-white' /></button>
                    <button><img src={bag} alt="bag" className='hover:scale-110 transition-all duration-300 color-white' /></button>
                </div>
            </header>
            <main className='flex flex-col items-center pt-10'>
                <section id='macbook-pro text-center'>
                    <h1 className='text-5xl text-center font-semibold tracking-tight mb-0 mt-20 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]'>
                        MacBook Pro
                    </h1>
                    <div className='relative flex flex-col items-center w-full max-w-4xl'>
                        <img src={mbp2} alt="" className='w-1/2 z-10 -mb-20 md:-mb-40 pointer-events-none' />
                        <img src={mbp} alt="MacBook Pro" className='w-full h-auto z-(-10)' />
                    </div>
                    <div className='text-center'>
                        <button className='bg-blue-600 text-white px-6 py-2 rounded-full font-medium mt-5'>Buy</button>
                    </div>
                    <div className='mt-5 text-center'>
                        <p className='text-[14px] text-white/80 font-normal'>From $1,299 to $999 shop now</p>
                    </div>
                </section>
                <section id='about' className='mt-35'>
                    <h1 className='text-6xl font-semibold tracking-tight mb-0 mt-20 drop-shadow-[2px_1px_2px_rgba(0,0,0,0.5)] text-start'>
                        Take a closer look
                    </h1>
                    <div className='flex items-center gap-6'>
                        <div className='flex flex-col items-center mt-10'>
                            <img src={color === 'black' ? mbp3 : mbp3white} alt="macbook-pro" className={`${img === 'large' ? 'scale-110 transition-all duration-150' : 'scale-100 transition-all duration-150'} && ${color === 'black' ? 'w[600px] transition-all duration-3000 ease-in-out' : 'w-[800px] h-[500px] transition-all duration-3000 ease-in-out'}`} />
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl font-sans text-gray-700 tracking-tight mb-0 mt-10 text-center'>MacBook Pro 16" in Space Black</p>
                        <div>

                            <div className='flex items-center justify-center gap-8 mt-10 bg-zinc-900/50 backdrop-blur-xl rounded-full w-fit px-8 h-16 mx-auto border border-white/5'>
                                <div className='flex items-center gap-4'>
                                    <button
                                        className={`w-6 h-6 rounded-full transition-all duration-300 border border-white/10 ${color === 'black' ? 'bg-black ring-2 ring-white-500 scale-110' : 'bg-zinc-800 hover:scale-105'}`}
                                        onClick={() => setcolor('black')}
                                        aria-label="Space Black"
                                    />
                                    <button
                                        className={`w-6 h-6 rounded-full transition-all duration-300 border border-white/10 ${color === 'white' ? 'bg-[#e3e4e5] ring-2 ring-white-500 scale-110' : 'bg-zinc-400 hover:scale-105'}`}
                                        onClick={() => setcolor('white')}
                                        aria-label="Silver"
                                    />
                                </div>
                                <div className='w-px h-6 bg-white/10' />
                                <div className='flex items-center gap-2'>
                                    <button
                                        className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${size === '14"' ? 'bg-white text-black' : 'bg-zinc-800 text-white'}`}
                                        onClick={() => {
                                            setsize('14"');
                                            setImg('small');
                                        }}
                                    >
                                        14"
                                    </button>
                                    <button
                                        className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${size === '16"' ? 'bg-white text-black' : 'bg-zinc-800 text-white'}`}
                                        onClick={() => {
                                            setsize('16"');
                                            setImg('large');
                                        }}
                                    >
                                        16"
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col items-center mt-20'>
                    <div className='rounded-2xl overflow-hidden'>
                        <img src={mbp4} alt="img" />
                    </div>
                    <div className='flex justify-center mt-24 gap-20 max-w-6xl mx-auto px-4'>
                        <div className="flex flex-col w-1/2">
                            <h2 className='text-5xl font-bold tracking-tight text-white mb-8 drop-shadow-lg'>Rocket Chip.</h2>
                            <p className='text-xl font-medium text-zinc-400 leading-relaxed'>
                                Introducing <span className="font-semibold text-white">M4, the next generation of Apple silicon</span>. M4 powers incredible performance for pro apps and Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, animi tempora, <br className="mt-4" />labore vel ut minus fugit qui natus amet iure, voluptatum officia aspernatur veniam delectus repellat quo obcaecati? Quam alias eveniet rem veritatis natus quae quas dolorum earum. Voluptates, quidem!
                            </p>
                            <div className="mt-10">
                                <a href="#" className="text-blue-600 font-medium mt-2 no-underline hover:underline">Learn more about Apple Intelligence</a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-12'>
                            <div className='flex flex-col'>
                                <p className='text-lg font-medium text-zinc-400'>Up to</p>
                                <h3 className='text-5xl font-bold text-white mt-1'>4x faster</h3>
                                <p className='text-lg font-medium text-zinc-400 mt-2'>pro rendering performance <br /> than M2</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-lg font-medium text-zinc-400'>Up to</p>
                                <h3 className='text-5xl font-bold text-white mt-1'>1.5x faster</h3>
                                <p className='text-lg font-medium text-zinc-400 mt-2'>CPU performance than M2</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col items-center mt-3'>
                    <div className='max-w-4xl pt-10'>
                        <h2 className='text-4xl text-center font-semibold tracking-tight text-white mb-8 drop-shadow-lg leading-tight'>
                            Next-level graphics <br /> performance. Game on.
                        </h2>
                    </div>
                    <div className='relative w-[1200px] h-[600px] overflow-hidden'>
                        <img src={middle} alt="" className='absolute top-1/2 left-1/2 w-[600px] -translate-y-1/2 -translate-x-1/2 z-20' />
                        <img src={mbp5} alt="" className='absolute left-[3%] top-[25%] w-[300px] z-11' />
                        <img src={mbp6} alt="" className='absolute left-[10%] top-[5%] w-[350px] z-10' />
                        <img src={mbp7} alt="" className='absolute left-[70%] top-[5%] w-[370px] z-10' />
                        <img src={mbp8} alt="" className='absolute left-[70%] top-[30%] w-[280px] z-10' />
                        <img src={mbp9} alt="" className='absolute left-[5%] top-[70%] w-[390px] z-10' />
                        <img src={mbp10} alt="" className='absolute left-[70%] top-[70%] w-[330px] z-10' />
                    </div>
                    <div className="flex flex-col items-center mt-10 w-[600px]">
                        <p className="text-[12px] font-medium text-zinc-400">Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images faster,<span className="font-semibold text-white"> so gaming feels more immersive and realistic than ever.</span></p><br />
                        <p className="text-[12px] font-medium text-zinc-400 mt-5">And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.</p>
                    </div>
                </section>
                <section className="flex flex-col items-center mt-20 mb-20">
                    <div>
                        <h2 className="text-5xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">See it in a new light.</h2>
                    </div>
                    <div className='relative w-[1800px] h-[600px] overflow-hidden'>
                        <img src={mbp11} alt="" className='absolute top-1/2 left-1/2 w-[700px] -translate-y-1/2 -translate-x-1/2 z-20' />
                        <div className='absolute top-[10%] left-[20%] w-[200px] z-10'>
                            <img src={mac} alt="" className="w-[50px] hover:scale-110 transition-all duration-300" />
                            <p className="text-[12px] font-medium text-white mt-2"><span className="font-semibold text-white">iPhone Mirroring.</span> See and use what’s on your iPhone from your Mac, without having to reach for it.</p>
                        </div>
                        <div className='absolute top-[40%] left-[70%] w-[200px] z-10'>
                            <img src={file} alt="" className="w-[50px] hover:scale-110 transition-all duration-300" />
                            <p className="text-[12px] font-medium text-white mt-2">Universal Clipboard. Copy text, images, photos, and videos on your iPhone & paste to your Mac.</p>
                        </div>
                        <div className='absolute top-[70%] left-[20%] w-[200px] z-10'>
                            <img src={airdrop} alt="" className="w-[50px] hover:scale-110 transition-all duration-300" />
                            <p className="text-[12px] font-medium text-white mt-2">AirDrop. Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h2 className="text-5xl text-center font-bold tracking-tight text-white mb-8 drop-shadow-lg">There's never been a <br />better time to upgrade.</h2>
                        <p className="text-center text-[12px] font-medium text-white mt-2">Here's what you get in the new Macbook pro.</p>
                    </div>
                    <div className='flex justify-center items-center gap-5 mt-10 w-[1200px]'>
                        <div className='flex flex-col items-center gap-1'>
                            <div className='relative w-[300px] h-[250px] rounded-3xl overflow-hidden border-2 border-white/70 mb-10'>
                                <img src={bird} alt="" className='w-100% h-100% absolute top-0 left-0 z-0' />
                                <div className='absolute bottom-10 left-0 z-10 pl-2'>
                                    <img src={laptop} alt="" className="w-[50px] h-[50px] hover:scale-110 transition-all duration-300" />
                                    <p className="text-[24px] font-semibold text-white mt-2 hover:underline">Fly through demanding tasks up to 9.8x faster</p>
                                </div>
                            </div>
                            <div className='gap-5 w-[300px] h-[100px] rounded-3xl overflow-hidden border-2 border-white/70 mb-10 bg-zinc-800'>
                                <div className=" flex justify-center items-center z-10 gap-5">
                                    <img src={sun} alt="" className="w-[60px] h-[60px] hover:scale-110 transition-all duration-300" />
                                    <p className="text-[15px] font-medium text-white mt-2 hover:underline">A stunning <br /> Liquid Retina XDR <br /> display.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <div className='w-[300px] h-[100px] rounded-3xl overflow-hidden border-2 border-white/70 bg-zinc-800 flex justify-center items-center gap-5 mb-10'>
                                <img src={vector} alt="" className="w-[60px] h-[60px] hover:scale-110 transition-all duration-300" />
                                <p className="text-[15px] font-medium hover:underline bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">Built for Apple intelligence.</p>
                            </div>
                            <div className='relative w-[300px] h-[250px] rounded-3xl overflow-hidden border-2 border-white/70 bg-zinc-800 p-8 flex flex-col justify-end mb-10'>
                                <img src={battery} alt="" className="w-[50px] h-[50px] mb-4 hover:scale-110 transition-all duration-300" />
                                <p className="text-[24px] font-bold text-white leading-tight">Up to <span className="text-green-500 font-bold">14 hours</span> more battery life.<span className="text-zinc-400 text-[16px] font-normal block mt-2">(Up to 20 hours battery life.)</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col items-center">
                <div className="flex justify-between items-center w-[1400px]">
                    <p className="text-[12px] font-medium text-zinc-400">More ways to shop: <a href="#" className="hover:underline text-blue-500">Online</a> or other retailer around you.</p>
                    <img src={appleLogo} alt="" className='w-[30px] h-[30px]' />
                </div>
                <div className="flex justify-between items-center w-[1400px] mt-1 border-t-2 border-white/20">
                    <p className="text-[12px] font-medium text-zinc-400">Copyright © 2025 Apple Inc. All rights reserved.</p>
                    <p className="text-[12px] font-medium text-zinc-400"> Privacy Policy | Terms of Use | Sales policy | Legal | Site Map</p>
                </div>
            </footer>
        </div>
    )
}

export default Home