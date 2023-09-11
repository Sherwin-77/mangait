import { Fragment } from "react";
import { Link } from "react-router-dom";

import defaultCover from '../assets/no-cover.jpg'


function MangaBody({ mangaDetail }) {
    return (
        <Fragment>
            <div class="card-img-top">
                <img src={mangaDetail.cover?.url ?? defaultCover} alt="thumbnail" class="img-thumbnail" />
            </div>
            <div class="card-body">
                <h5 class="manga-title card-title">{mangaDetail.title}</h5>
                <p class="manga-synopsis card-text">{mangaDetail.synopsis}</p>
                <Link to={encodeURI(`../manga/${mangaDetail.id}/${mangaDetail.title.split(',')[0].split(' ').slice(0, 3).join('-')}`)}
                    class="read btn btn-secondary">Read now</Link>
            </div>
        </Fragment>
    );
}

export default MangaBody;