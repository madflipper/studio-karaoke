import { useEffect, useState } from 'react';
import { FaSearch, FaMicrophone, FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';
import { songsData } from '../data/data';

function Home() {
    const [songs, setSongs] = useState(songsData);
    const [search, setSearch] = useState('');
    const itemsPerPage = 40;
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(songs.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(songs.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, songs]);

    console.log('currentItems', currentItems);
    // Invoke when user click to request another page.
    function handlePageClick(event) {
        const newOffset = (event.selected * itemsPerPage) % songs.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    }

    //TODO ADD CLEAR FUNCTION

    useEffect(() => {
        function filterSongs() {
            if (search.length > 1) {
                const result = songsData
                    .filter(
                        (song) =>
                            song.Artist.toLocaleLowerCase().includes(
                                search.toLowerCase()
                            ) ||
                            song.Title.toLocaleLowerCase().includes(
                                search.toLowerCase()
                            )
                    )
                    .map((filteredSong) => {
                        return filteredSong;
                    });

                setSongs(result.slice(0, 50));
            }
        }

        filterSongs();
    }, [search]);

    return (
        <main className="flex flex-col content-center bg-white h-screen">
            <section className="container mx-auto text-center pt-14">
                <h1 className="font-mono font-bold text-gray-900 lg:text-9xl text-6xl mb-10">
                    STUDIO KARAOKE
                </h1>
            </section>
            <section className="flex flex-col  items-center pb-8">
                <h2 className="font-mono text-2xl mb-4">Hur funkar det?</h2>
                <div className="px-2 pb-3 flex flex-col">
                    <div className="flex items-center mb-2">
                        <FaSearch size="17" className="mr-2" />
                        <p className="mr-3 font-mono text-base mt-1">
                            Sök upp låt
                        </p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaPlus size="17" className="mr-2" />
                        <p className="mr-3 font-mono text-base mt-1">
                            Lägg till i kö
                        </p>
                    </div>
                    <div className="flex items-center">
                        <FaMicrophone size="17" className="mr-2" />
                        <p className="font-mono text-base mt-1">Sjung</p>
                    </div>
                </div>
            </section>
            <section className="text-center bg-gray-700 px-2 pt-6">
                <input
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-7 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Sök här..."
                />
                <SongList songs={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </section>
            <footer>
                <p>Copyright @con.johansson</p>
            </footer>
            <ToastContainer theme="dark" />
        </main>
    );
}

function QueueSong(event, name, song) {
    event.preventDefault();
    const data = {
        name: name,
        title: song.Title,
        artist: song.Artist,
    };

    toast.success(`Du la till ${song.Title} i kön`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

function SongList({ songs }) {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            {songs.map((song, i) => {
                return <SongCard song={song} key={i} />;
            })}
        </div>
    );
}

function SongCard({ song }) {
    const [name, SetName] = useState('');
    return (
        <div className="border-r-6 rounded-lg shadow-lg bg-white mb-2 p-4 flex flex-col content-start text-left">
            <div className="flex items-center">
                <h3 className="font-bold mr-2 text-lg">Artist:</h3>
                <p>{song.Artist}</p>
            </div>
            <div className="flex mb-2 items-center">
                <h3 className="font-bold mr-2 text-lg">Sång:</h3>
                <p>{song.Title}</p>
            </div>
            <div>
                <form onSubmit={(e) => [QueueSong(e, name, song), SetName('')]}>
                    <input
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={name}
                        onChange={(e) => SetName(e.target.value)}
                        name="name"
                        placeholder="Ditt namn..."
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Lägg till i kön
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Home;
