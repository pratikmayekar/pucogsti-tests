import styled from "styled-components";
import { MusicVideoURL, VideoDuration } from "../common/Config";
import { useEffect, useState } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleDiv = styled.h2`
  margin-top: 20px;
`;
const TaskDescDiv = styled.div`
  white-space: pre-warp;
  margin-top: 20px;
  text-align: center;
  vertical-align: middle;
  width: 60vw;
`;
const TaskContentDiv = styled.div`
  width: 60vw;
  height: 60vh;
`;
const EndButtonDiv = styled.div`
  width: 50vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideoDiv = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 30px;
`;

const TaskTitle = "Experiment: Music Video";
const TaskDesc = `
    Let us activate your emotions and intuitions through the power of music. 
    Sit back and enjoy this live orchestra performance of Beethoven's Symphony No. 5.
    `;

function MusicVideo({endTask}) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisabled(true);
    }, VideoDuration);
  }, []);
  
  return (
    <Container>
      <TitleDiv>{TaskTitle}</TitleDiv>
      <TaskDescDiv>{TaskDesc}</TaskDescDiv>
      <TaskContentDiv>
        <VideoDiv>
          <iframe
            width="100%"
            height="100%"
            src={MusicVideoURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoDiv>
      </TaskContentDiv>
      <EndButtonDiv>
        <button style={{display: disabled ? 'inline-block' : 'none'}} onClick={() => endTask()}>End Experiment</button>
      </EndButtonDiv>
    </Container>
  );
}

export default MusicVideo;
