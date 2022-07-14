import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TrendingPosts from '../data/trending.json'

export default function Trending() {
    const [trendingPosts, setTrendingPosts] = useState(null)

    const getTrendingPosts = () => {
        // * ambil data dari file posts.json
        setTrendingPosts(TrendingPosts)
    }

    useEffect(() => {
        getTrendingPosts()
    }, [])
    return (
        <section className="border-b border-slate-200">
            <div className="main-container py-10">
                <div>
                    <div className="flex items-center gap-x-1 mb-4">
                        <Image
                            unoptimized
                            src="/icons/trending.svg"
                            alt="Tranding Icons"
                            width='28px'
                            height='28px'
                            layout='fixed'
                        />
                        <h2 className="uppercase font-bold text-sm tracking-wider">TRANDING ON MEDIUM</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trendingPosts && trendingPosts.map((trending, index) => {
                            const trendingIndex = `0${index + 1}`
                            const minReadText = `${trending.min_read} min read`
                            return (
                                <div key={trending.id} className="flex gap-x-4" >
                                    <p className="font-extrabold text-4xl text-slate-300">{trendingIndex}</p>
                                    <div>
                                        <div className="flex items-center gap-x-2 mb-4">
                                            <Image className="rounded-full"
                                                unoptimized
                                                src={trending.avatar}
                                                width='20px'
                                                height='20px'
                                                alt={trending.username}
                                                layout="fixed"
                                            />
                                            <h4 className="text-sm">
                                                <span>
                                                    <Link href='#' passHref>
                                                        <a>{trending.username}</a>
                                                    </Link>
                                                </span>
                                                {trending.group_name && (
                                                    <>
                                                        <span className="mx-1 text-slate-400">in</span>
                                                        <span>
                                                            <Link href='#' passHref>
                                                                <a>{trending.group_name}</a>
                                                            </Link>
                                                        </span>
                                                    </>
                                                )}
                                            </h4>
                                        </div>
                                        <h3 className="font-bold mb-2 line-clamp-2">{trending.title}</h3>
                                        <div className="flex items-center gap-x-1">
                                            <p className="text-slate-500 text-sm">{trending.date}</p>
                                            <span className="text-slate-500 text-sm -mt-2">.</span>
                                            <p className="text-slate-500 text-sm">{minReadText}</p>
                                            {trending.star && (
                                                <Image src='/icons/star.svg'
                                                    unoptimized
                                                    width='15px'
                                                    height='15px'
                                                    alt='Start Icon'
                                                    layout="fixed"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}