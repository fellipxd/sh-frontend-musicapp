import { useContext, useState } from "react";
import { Button } from "./ButtonElement";
import AppContext from "../state/context";

const Upload = ({ toggleUpload }) => {
  const {
    isOpen,
    errMessage,
    setErrMessage,
    successMessage,
    setSuccessMessage,
    loading,
    setLoading,
  } = useContext(AppContext);

  const [musicData, setMusicData] = useState({
    artist_name: "",
    music: null,
    music_title: "",
    artist_label: "",
    genre: "",
    album: "",
    cover_picture: null,
    release_date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setMusicData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    setMusicData((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("artist_name", musicData.artist_name);
    formData.append("artist_label", musicData.artist_label);
    formData.append("music", musicData.music);
    formData.append("music_title", musicData.music_title);
    formData.append("cover_picture", musicData.cover_picture);
    formData.append("release_date", musicData.release_date);
    formData.append("genre", musicData.genre);
    formData.append("album", musicData.album);

    console.log(formData, formData.entries);

    try {
      const res = await fetch(
        "https://muzira.shbootcamp.com.ng/uploadsong.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const { status, message } = await res.json();

      if (status === "success") {
        console.log(message);
        setLoading(false);
        setSuccessMessage(message);
        setMusicData({
          artist_name: "",
          music: null,
          music_title: "",
          artist_label: "",
          genre: "",
          album: "",
          cover_picture: null,
          release_date: "",
        })
        setTimeout(() => {
          setSuccessMessage("");
          toggleUpload();
        }, 2000);
      } else {
        console.log(message);
        setErrMessage(message);
        setTimeout(() => {
          setLoading(false);
          setErrMessage("");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setErrMessage(error);
      setTimeout(() => {
        setLoading(false);
        setErrMessage("");
      }, 2000);
    }
  };

  return (
    <div className={isOpen ? "upload-container" : "hidden"}>
      <form className="form">
        <div>
          <label htmlFor="artist_name">Artist name:</label>
          <input
            type="text"
            name="artist_name"
            value={musicData.artist_name}
            onChange={handleInputChange}
            placeholder="Artist name"
            id="artist_name"
          />
        </div>
        <div>
          <label htmlFor="music">Music:</label>
          <input
            type="file"
            name="music"
            // accept="audio/*"
            onChange={handleFileInputChange}
            id="music"
          />
        </div>
        <div>
          <label htmlFor="music_title">Music title:</label>
          <input
            type="text"
            name="music_title"
            value={musicData.music_title}
            onChange={handleInputChange}
            placeholder="Music title"
            id="music_title"
          />
        </div>
        <div>
          <label htmlFor="artist_label">Artist Label:</label>
          <input
            type="text"
            name="artist_label"
            value={musicData.artist_label}
            onChange={handleInputChange}
            placeholder="Artist label"
            id="artist_label"
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            name="genre"
            value={musicData.genre}
            onChange={handleInputChange}
            placeholder="Genre"
            id="genre"
          />
        </div>
        <div>
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            name="album"
            value={musicData.album}
            onChange={handleInputChange}
            placeholder="Album"
            id="album"
          />
        </div>
        <div>
          <label htmlFor="cover_picture">Cover Picture:</label>
          <input
            type="file"
            name="cover_picture"
            onChange={handleFileInputChange}
            id="cover_picture"
          />
        </div>
        <div>
          <label htmlFor="release_date">Release Date:</label>
          <input
            type="date"
            name="release_date"
            value={musicData.release_date}
            onChange={handleInputChange}
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
          {loading ? "Loading..." : "SUBMIT"}
        </Button>
        <div className="text-center text-red-700">{errMessage}</div>
        <div className="text-center text-green-700">{successMessage}</div>
      </form>
    </div>
  );
};

export default Upload;
