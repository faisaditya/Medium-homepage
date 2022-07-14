import Image from "next/image"
import Link from "next/link"

export default function trendingItems() {
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
}
