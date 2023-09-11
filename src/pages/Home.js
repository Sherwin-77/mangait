import { useState } from "react";
import MangaBody from "../components/MangaBody";
import MangaItem from "../components/MangaItem";

function Home({ mangaList }) {
    document.title = "Home - Mangait";
    const [randomManga, setRandomManga] = useState(mangaList[Math.floor(Math.random() * mangaList.length)]);
    const renderManga = mangaList.map(obj => (<MangaItem mangaDetail={obj} />))
    window.setInterval(() => setRandomManga(mangaList[Math.floor(Math.random() * mangaList.length)]), 10000);
    return (
        <main class="container mt-5 d-flex">
            <div class="content me-5">
                <div class="row" id="manga-list">
                    {renderManga}
                </div>
            </div>
            <div class="side">
                <div class="card d-none d-md-block my-3">
                    <h4 class="card-header">Latest Upload</h4>
                    <MangaBody mangaDetail={mangaList[mangaList.length - 1]} />
                </div>
                <div class="card d-none d-md-block my-3">
                    <h4 class="card-header">Random Manga</h4>
                    <MangaBody mangaDetail={randomManga} />
                </div>
            </div>
        </main>
    );
}

export default Home;