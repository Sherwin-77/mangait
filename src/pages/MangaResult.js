import { Navigate, useLocation } from "react-router-dom";

import MangaItem from "../components/MangaItem";

function MangaResult({mangaList}) {
    document.title = "Search Result - Mangait"
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search.substring(search.indexOf('?')))
    if (!searchParams.has('q')) return <Navigate to="/" replace />;
    let query = searchParams.get('q');
    const renderManga = mangaList.filter(obj => obj.title.toLowerCase().indexOf(query.toLowerCase()) != -1).map(obj => (<MangaItem mangaDetail={obj} />))
    return (
        <main class="container mt-5">
            <h2>Search Result for "{query}"</h2>
            <div class="my-3 me-5">
                <div class="row">
                    {renderManga.length ? renderManga : "No result found"}
                </div>
            </div>
        </main>
    );
}

export default MangaResult;