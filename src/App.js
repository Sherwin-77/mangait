import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import uuidv4 from "./uuid4";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Bookmarks from "./pages/Bookmarks";
import MangaInfo from "./pages/MangaInfo";
import MangaResult from "./pages/MangaResult";


function App({ toggleButton }) {
  const [mangaList, setManga] = useState([
    {
      id: uuidv4(),
      title: "Otonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni Sareteita Ken",
      synopsis: "A HEAVENLY ENCOUNTER!\nMahiru is a beautiful girl whose classmates all call her an “angel.” Not only is she a star athlete with perfect grades—she’s also drop-dead gorgeous. Amane‚ an average guy and self-admitted slob‚ has never thought much of the divine beauty‚ despite attending the same school. Everything changes‚ however‚ when he happens to see Mahiru sitting alone in a park during a rainstorm. Thus begins the strange relationship between this incredibly unlikely pair!",
      author: "Saeki-san, Wan Shibata",
      cover: {
        data: null,
        url: require('./assets/cover1.jpg')
      },
      bookmarked: false
    },
    {
      id: uuidv4(),
      title: "Shiro Seijo to Kuro Bokushi",
      synopsis: "With the cute and able-bodied saint, along with the overprotective yet dense pastor, the \"natural love comedy\" unfolds!!",
      author: "Kazutake Hazano",
      cover: {
        data: null,
        url: require('./assets/cover2.jpg')
      },
      bookmarked: false
    },
    {
      id: uuidv4(),
      title: "Akuyaku Reijou no Shitsuji-sama: Hametsu Flag wa Ore ga Tsubusasete Itadakimasu",
      synopsis:"Regaining the memories of his previous life, Cyril realised that he was an otome game's character, the villainous daughter– Sophia’s valet. At the rate things were going, Sophia would eventually have the prince stolen away from her by the heroine, fall into darkness, and be executed.\n\nWanting to save the villainous daughter he was so fond of, Cyril moved to eliminate all the factors that would cause her to fall into darkness, raising her up to be a talented and beautiful girl who could win the prince's love, however…\n\nA reincarnation story with a twist! I, Cyril, have been reborn in a new world and pledged myself to save Lady Sophia, the villainess of an otome game, from the many horrible fates that await her! I've raised her to be a proper young lady, keeping her from turning to the dark side... but apparently, she's developed feelings for me. And now the game's heroine has appeared, putting all I've accomplished at risk. Still, as her all-knowing butler, I will defy fate and ensure milady's happiness!",
      author: "Hiiro no Ame, Shoubu",
      cover: {
        data: null,
        url: require('./assets/cover3.jpg')
      },
      bookmarked: false
    },
    {
      id: uuidv4(),
      title: "Bocchi the Rock!",
      synopsis: "Hitori Gotou is a high school girl who's starting to learn to play the guitar because she dreams of being in a band, but she's so shy that she hasn't made a single friend. However, her dream might come true after she meets Nijika Ijichi, a girl who plays drums and is looking for a new guitarist for her band.",
      author: "Hamaji Aki",
      cover: null,
      bookmarked: false
    },
    {
      id: uuidv4(),
      title: "Oshi no Ko",
      synopsis: "The story begins with a beautiful girl, her perfectly fake smile, and the people who love her selfishly for it.\n\nWhat transpires behind the scenes of the glittering showbiz industry? How far would you go for the sake of your beloved idol? What would you do if you found out reincarnation was real? The star of the show is Aquamarine Hoshino and the stage is but a mere facade. Will he manage to reach the climax before the world of glamour swallows him whole?",
      author: "Akasaka Aka",
      cover: null,
      bookmarked: false
    }
  ])
  function switchBookmark(id) {
    setManga((mangaList) => mangaList.map(obj => {
      const temp = Object.assign({}, obj);
      if (temp.id === id) {
        temp.bookmarked = !temp.bookmarked;
      }
      return temp;
    }));
  }
  return (
    <Routes>
      <Route path="/" element={<Header toggleButton={toggleButton} />}>
        <Route index element={<Home mangaList={mangaList} />} />
        <Route path="/upload" element={<Upload setManga={setManga}/>} />
        <Route path="/bookmarks" element={<Bookmarks mangaList={mangaList}/>} />
        <Route path="/manga">
          <Route index element={<MangaResult mangaList={mangaList}/>}/>
          <Route path="/manga/:id" element={<MangaInfo bookmarkButton={switchBookmark} mangaList={mangaList}/>} />
          <Route path="/manga/:id/:title" element={<MangaInfo bookmarkButton={switchBookmark} mangaList={mangaList}/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
