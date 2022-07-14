/* eslint-disable react/no-unescaped-entities */
export default function Header() {
    return (
        <header className="header">
            <div className="main-container header-bg p-10">
                <div className="w-3/4 md:w-3/6">
                    <h1 className="sm:inline-block hidden font-serif text-6xl lg:text-7xl mb-2">Medium is a place to write, read, and connect</h1>
                    <h1 className="sm:hidden font-serif text-5xl mb-2">write, read, and connect</h1>
                    <h2 className="sm:font-light text-xl">It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
                    <button className="btn-rounded bg-white text-black border border-black mt-5">
                        Start Writing
                    </button>
                </div>
            </div>
        </header>
    )
}