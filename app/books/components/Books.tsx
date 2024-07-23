import Image from 'next/image'
export default function Books() {
    const bookData = [
        {
            title: "Kokoro",
            imgURI: "/kokoro.png",
            author: "Natsume Sōseki",
            year: 1914,
            desc: "My personal favorite. An absolute must-read that dives into the internal struggle between friendship and egoism."
        },
        {
            title: "Don Quixote",
            imgURI: "/donquixote.jpg",
            author: "Miguel de Cervantes",
            year: 1797,
            desc: "One of those books that teaches how comparison is the thief of joy. I recommend reading the shortened version first."
        },
        {
            title: "The Great Divorce",
            imgURI: "/theGreatDivorce.jpg",
            author: "C.S Lewis",
            year: 1945,
            desc: "The book dives into the concepts of Heaven and Hell, providing a unique perspective and inspiring hope."
        },
        {
            title: "Demian",
            imgURI: "/demian.jpg",
            author: "Hermann Hesse",
            year: 1919,
            desc: "The book is often analyzed as a story of the shedding of innocence and self-acceptance. Contrarily, this book taught me the value of innocence and purity."
        },
        {
            title: "The The Elements of Typographic Style",
            imgURI: "/typography.jpg",
            author: "Robert Bringhurst",
            year: 1992,
            desc: "By far, studying typography has taught me the most about design. This book has been my greatest resource in learning design."
        },
        {
            title: "The Alchemist",
            imgURI: "/alchemist.jpg",
            author: "Paulo Coelho",
            year: 1988,
            desc: "My favorite book growing up. The book explores the importance of the journey over the destination."
        },
    ]
    return (
        <div className="">
            <div className="mb-2 md:mb-5 text-melo-blue font-bold text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                Reading List
            </div>
            <p className="mb-5 md:mb-8 font-normal text-black text-[32px] md:text-[56px] tracking-[0] leading-[35px] md:leading-[55px]">
                A list of my <b>personal</b> favorites.   
            </p>
            <div className="md:w-[646px] w-full lg:w-[800px] lg:h-[7px] md:h-[5px] h-[4px] bg-black mb-7 md:mb-8" />
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-3 ">
                {bookData.map((book, index) => (
                    <div key={index} className="flex lg:flex-col lg:mb-7 gap-4 lg:w-full pb-5 md:pb-7 lg:pb-0 border-b-2 lg:border-b-0 border-black">
                        <Image src={book.imgURI} width="300" height="300" className="self-start w-2/5 lg:w-1/2" alt={book.title} />
                        <div className='lg:border-l-4 lg:border-black lg:pl-3 w-3/5 md:w-full'>
                            <h2 className="text-[20px] md:text-[21px] leading-[20px]">{book.title}</h2>
                            <p className="text-[16px] font-normal mb-1.5">{book.author} | {book.year}</p>
                            <p className="text-[14px] md:text-[17px] md:w-4/5 font-normal ">{book.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}