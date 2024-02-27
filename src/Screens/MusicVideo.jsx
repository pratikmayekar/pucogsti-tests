import styled from "styled-components";
import { MusicVideoURL } from "../common/Config";

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
  flex-grow: 1;
  width: 60vw;
`;
const StyledEssay = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 30px;
`;

const TaskTitle = "Experiment: Music Video";
const TaskDesc = `
    Let us activate your emotions and intuitions through the power of music. 
    Sit back and enjoy this live orchestra performance of Beethoven's Symphony No. 5.
    `;

function MusicVideo() {
  return (
    <Container>
      <TitleDiv>{TaskTitle}</TitleDiv>
      <TaskDescDiv>{TaskDesc}</TaskDescDiv>
      <TaskContentDiv>
        <StyledEssay>
          <iframe
            width="100%"
            height="100%"
            src={MusicVideoURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </StyledEssay>
      </TaskContentDiv>
    </Container>
  );
}

export default MusicVideo;
