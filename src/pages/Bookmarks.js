import MangaItem from "../components/MangaItem";


function Bookmarks({ mangaList }) {
    document.title = "Bookmarks - Mangait"
    const renderManga = mangaList.filter(obj => obj.bookmarked).map(obj => (<MangaItem mangaDetail={obj} />))
    return (
        <main class="container mt-5">
            <h2>Bookmarked Manga</h2>
            <div class="my-3 me-5">
                <div class="row">
                    {renderManga.length ? renderManga : "No manga :c how about bookmark one"}
                </div>
            </div>
        </main>
    );
}

export default Bookmarks;