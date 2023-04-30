import { useContext } from "react";
import { Button } from "./ButtonElement";
import AppContext from "../state/context";

const Upload = ({ toggleUpload }) => {
  const {
    isOpen,
    errMessage,
    setErrMessage,
    successMessage,
    setSuccessMessage,
    artistName,
    setArtistName,
    music,
    setmusic,
    musicTitle,
    setMusicTitle,
    artistLabel,
    setArtistLabel,
    genre,
    setGenre,
    album,
    setAlbum,
    coverPicture,
    setCoverPicture,
    releaseDate,
    setReleaseDate,
  } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = {
      artistName,
      music,
      musicTitle,
      artistLabel,
      genre,
      album,
      coverPicture,
      releaseDate,
    };

    console.log(result);

    fetch("https://muzira.shbootcamp.com.ng/upload_song.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === "error") {
          setErrMessage(data.message);
          setTimeout(() => {
            setErrMessage("");
          }, 3000);
        } else {
          setSuccessMessage(data.message);
          setTimeout(() => {
            toggleUpload();
            setSuccessMessage("");
            setArtistName("");
            setmusic("");
            setMusicTitle("");
            setArtistLabel("");
            setGenre("");
            setAlbum("");
            setCoverPicture("");
            setReleaseDate("");
          }, 3000);
        }
      });
  };

  return (
    <div className={isOpen ? "upload-container" : "hidden"}>
      <form className="form">
        <div>
          <label htmlFor="artist_name">Artist name:</label>
          <input
            type="text"
            value={artistName}
            onChange={(e) => {
              setArtistName(e.target.value);
            }}
            placeholder="Artist name"
            id="artist_name"
          />
        </div>
        <div>
          <label htmlFor="music">Music:</label>
          <input
            type="file"
            value={music}
            onChange={(e) => {
              setmusic(e.target.value);
            }}
            id="music"
          />
        </div>
        <div>
          <label htmlFor="music_title">Music title:</label>
          <input
            type="text"
            value={musicTitle}
            onChange={(e) => {
              setMusicTitle(e.target.value);
            }}
            placeholder="Music title"
            id="music_title"
          />
        </div>
        <div>
          <label htmlFor="artist_label">Artist Label:</label>
          <input
            type="text"
            value={artistLabel}
            onChange={(e) => {
              setArtistLabel(e.target.value);
            }}
            placeholder="Artist label"
            id="artist_label"
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
            }}
            placeholder="Genre"
            id="genre"
          />
        </div>
        <div>
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            value={album}
            onChange={(e) => {
              setAlbum(e.target.value);
            }}
            placeholder="Album"
            id="album"
          />
        </div>
        <div>
          <label htmlFor="cover_picture">Cover Picture:</label>
          <input
            type="file"
            value={coverPicture}
            onChange={(e) => {
              setCoverPicture(e.target.value);
            }}
            id="cover_picture"
          />
        </div>
        <div>
          <label htmlFor="release_date">Release Date:</label>
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => {
              setReleaseDate(e.target.value);
            }}
            id="release_date"
          />
        </div>
        <Button
          primary="true"
          light="true"
          fontBig="true"
          big="true"
          widthBig="true"
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textTransform: "capitalize",
            marginTop: "1rem",
          }}
        >
          <span style={{ color: "red" }}>{errMessage}</span>
          <span style={{ color: "green" }}>{successMessage}</span>
        </div>
      </form>
    </div>
  );
};

export default Upload;
