import bookmarkIcon from '../assets/bookmark.svg';
import bookmarkXIcon from '../assets/bookmarkx.svg';
import defaultCover from '../assets/no-cover.jpg';

import { useParams } from "react-router-dom";

function MangaInfo({bookmarkButton, mangaList}) {
    let {id} = useParams();
    const mangaDetail = mangaList.find(obj => {return obj.id === id});
    if(mangaDetail === undefined) return <h2>404 Not Found :(</h2>
    document.title = `${mangaDetail.title} - Mangait`
    return (
        <main class="container mt-5">
            <div class="row">
                <div class="col-md-3">
                    <div class="container">
                        <img src={mangaDetail.cover?.url ?? defaultCover} alt="cover" class="img-fluid mb-5" />
                        <div class="btn" onClick={() => bookmarkButton(mangaDetail.id)}>
                            <img src={mangaDetail.bookmarked ? bookmarkXIcon : bookmarkIcon} alt="" height="64" />
                            {mangaDetail.bookmarked ? "Remove bookmark" : "Add bookmark"}
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <dl class="row">
                        <dt class="col-sm-2">Title</dt>
                        <dd class="col-sm-10">{mangaDetail.title}</dd>
                        <dt class="col-sm-2">Author</dt> 
                        <dd class="col-sm-10">{mangaDetail.author}</dd>
                        <dt class="col-sm-2">Synopsis</dt>
                        <dd class="col-sm-10">{mangaDetail.synopsis}</dd>
                    </dl>
                </div>
            </div>
        </main>
    );
}

export default MangaInfo