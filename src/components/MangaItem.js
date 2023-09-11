
import MangaBody from "./MangaBody";

function MangaItem({ mangaDetail }) {
    const bookmarkedStyle = { border: "1px solid green" };
    return (
        <div class="col-md-4 mb-3">
            <div class="card manga-item" style={mangaDetail.bookmarked ? bookmarkedStyle : {}}>
                <MangaBody mangaDetail={mangaDetail} />
            </div>
        </div>
    );
}

export default MangaItem;