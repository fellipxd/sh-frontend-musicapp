import { useContext } from "react";
import { Button } from "./ButtonElement";
import AppContext from "../state/context";

const Upload = ({ toggleUpload }) => {
  const { isOpen } = useContext(AppContext);

  return (
    <div className={isOpen ? "upload-container" : "hidden"}>
      <form className="form">
        <div>
          <label htmlFor="artist_name">Artist name:</label>
          <input type="text" placeholder="Artist name" id="artist_name" />
        </div>
        <div>
          <label htmlFor="music">Music:</label>
          <input type="file" id="music" />
        </div>
        <div>
          <label htmlFor="music_title">Music title:</label>
          <input type="text" placeholder="Music title" id="music_title" />
        </div>
        <div>
          <label htmlFor="artist_label">Artist Label:</label>
          <input type="text" placeholder="Artist label" id="artist_label" />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input type="text" placeholder="Genre" id="genre" />
        </div>
        <div>
          <label htmlFor="album">Album:</label>
          <input type="text" placeholder="Album" id="album" />
        </div>
        <div>
          <label htmlFor="cover_picture">Cover Picture:</label>
          <input type="file" id="cover_picture" />
        </div>
        <div>
          <label htmlFor="release_date">Release Date:</label>
          <input type="date" id="release_date" />
        </div>
        <Button
          primary="true"
          light="true"
          fontBig="true"
          big="true"
          widthBig="true"
          onClick={toggleUpload}
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default Upload;
