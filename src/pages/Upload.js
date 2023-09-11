import { useState } from "react";
import uuidv4 from "../uuid4";

function Upload({setManga}) {
    const [title, setTitle] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [file, setFile] = useState();
    const [visible, setVisible] = useState(false);

    document.title = "Upload - Mangait"

    function handleSubmit(e){
        e.preventDefault()
        const newManga = {
            id: uuidv4(),
            title: title, 
            synopsis: synopsis, 
            author: `User-${Date.now().toString(16)}`,
            cover: file ? {data: file, url: URL.createObjectURL(file)}: null,
            bookmarked: false
        };
        window.scrollTo(0, 0);
        setVisible(true);
        console.log(visible ? "true": "false");
        setFile(null);
        setTitle("");
        setSynopsis("");
        setManga((mangaList) => [...mangaList, newManga]);
        window.setTimeout(() => setVisible(false), 3000);
    }
    return (
        <main class="container mt-5">
            {visible ? <div className="alert alert-info">Uploaded! Check out at home</div>: null}  
            <h2>Upload Manga</h2>
            <div class="container bg-body-tertiary border">
                <form class="d-flex flex-column p-3 needs-validation" onSubmit={handleSubmit}>
                    <label for="title-upload" class="form-label">Title</label>
                    <input type="text" class="form-control mb-5" name="title-upload" id="title-upload" required="required" value={title} onInput={e => setTitle(e.target.value)}/>
                    <label for="synopsis-upload" class="form-label">Synopsis</label>
                    <textarea name="synopsis-upload" id="synopsis-upload" rows="3" class="form-control mb-5" required value={synopsis} onInput={e => setSynopsis(e.target.value)}></textarea>
                    <label for="thumb-upload">Upload thumbnail (Optional)</label>
                    <input class="form-control mb-5" style={{width: "25%"}} type="file" name="thumb-upload" id="thumb-upload" accept="image/*" onChange={e => setFile(e.target.files[0])}/>
                    <img src={file ? URL.createObjectURL(file): ""} className="rounded mb-5" style={{height: "128px", width: "128px", display: file? "" : "none"}} alt="preview"/>
                    <button class="btn btn-primary mb-3" type="submit">Upload</button>
                </form>
            </div>
        </main>
    );
}

export default Upload;