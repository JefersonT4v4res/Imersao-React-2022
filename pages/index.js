import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Following from "../src/components/Following/Following";

function HomePage() {
  config.playlists;

  return (
    <div>
      <>
      <CSSReset />
        <Menu></Menu>
        <Header></Header>
        <TimeLine playlists={config.playlists} />
        <Following />
      </>
    </div>
  );
}

export default HomePage;


const StyledHeader = styled.div`
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px 32px;
    margin-top: 1rem;
    gap: 16px;
  }
`

const StyledBanner = styled.div`
  background-image: url(${ ( { bg } ) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 18.25rem;
  width: 100vw;
`

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.background} />
      <section className="user-info">
        <img src={`https://github.com/${config.gihub}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
          <p>Github: <a href="https://github.com/JefersonT4v4res" target="_blank">{config.gihub}</a></p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine(props) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div className="videos-Container">
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}