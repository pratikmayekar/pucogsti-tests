import styled from "styled-components";
import { CommonInstructions } from "../common/Config";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleDiv = styled.h2`
  margin-top: 20px;
`;
const TaskDescDiv = styled.span`
  white-space: pre-line;
  margin-top: 20px;
`;
const TaskContentDiv = styled.div`
  margin-top: 20px;
`;

const TaskTitle = "Instructions";
function StartPage({ startTask }) {
  return (
    <Container>
      <TitleDiv>{TaskTitle}</TitleDiv>
      <TaskDescDiv>{CommonInstructions}</TaskDescDiv>
      <TaskContentDiv>
        <button onClick={() => startTask()}>Start Experiment</button>
      </TaskContentDiv>
    </Container>
  );
}

export default StartPage;
