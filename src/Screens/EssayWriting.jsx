import { useEffect, useState } from "react";
import styled from "styled-components";
import { EssayDuration, EssayTopics } from "../common/Config";

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
`;
const TaskContentDiv = styled.div`
  width: 50vw;
  height: 60vh;
`;
const EndButtonDiv = styled.div`
  width: 50vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledEssay = styled.textarea`
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 30px;
  font-size: 14px;
`;

const TaskTitle = "Experiment: Essay Writing";
const Duration = "Duration: 7 mins";
const TaskDesc = "This activity has been designed to activate the language intensive and analytical parts of your brain.";

const Topic = `Topic: ${EssayTopics[Math.floor(Math.random() * EssayTopics.length)]}`;

function EssayWriting({endTask}) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisabled(true);
    }, EssayDuration);
  }, []);
  
  return (
    <Container>
      <TitleDiv>{TaskTitle}</TitleDiv>
      <TaskDescDiv>
        {Duration}
        <br />
        {TaskDesc}
        <br />
        <br />
        <b>{Topic}</b>
      </TaskDescDiv>
      <TaskContentDiv>
        <StyledEssay disabled={disabled}></StyledEssay>
      </TaskContentDiv>
      <EndButtonDiv>
        <button style={{display: disabled ? 'inline-block' : 'none'}} onClick={() => endTask()}>End Experiment</button>
      </EndButtonDiv>
    </Container>
  );
}

export default EssayWriting;
