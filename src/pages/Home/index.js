import { useContext, useEffect, useState } from "react";
import { Search, Thumbnail } from "../../components";
import { API } from "../../config/api";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [fav, setFav] = useState([]);
  let [search, setSearch] = useState();

  //   FETCH API PHOTOS
  const getPhotos = async () => {
    const photos = await API("/photos");
    setPosts(photos.data);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  //   SEARCH FEATURE
  const handleSearch = (e) => {
    let keyword = e.target.value;

    setSearch((search = keyword));
  };

  //   ADD TO FAVOURITE
  const handleAddToFav = (id) => {
    const itemId = posts.find((item) => item.id == id);
  };

  return (
    <div className="container">
      <h2>Frontend Developer Test - MGIndotech</h2>
      <Search onChange={(e) => handleSearch(e)} />
      <div className="contents">
        {posts
          .filter((item) => {
            if (search == null) {
              return item;
            } else if (
              item.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          })
          .map((post) => (
            <div className="photo-wrapper" key={post.id}>
              <Thumbnail
                addToFav={handleAddToFav(post.id)}
                img={post.thumbnailUrl}
                title={post.title}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
