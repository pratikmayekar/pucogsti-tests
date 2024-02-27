import styled from "styled-components";

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
const StyledEssay = styled.textarea`
  width: 100%;
  height: 70%;
  margin-top: 30px;
`;

const TaskTitle = "Instructions";
const Steps = `
    1. Go to the tobii eye tracker and caliberate your eyes to create a new eye profile
    2. Open Logger Station and click on "Start Recording".
    3. Click on the "Start Experiment" button on this page.
    4. A white screen with a plus sign will appear. Keep looking at the + sign.
    5. After the white screen disappears, the actual experiment will start.
    6. The duration of each experiment is roughly 7-8 mins.
    7. After the experiment ends, go to LoggerStation and click on "Stop Recording".
    `;
function StartPage({ startTask }) {
  return (
    <Container>
      <TitleDiv>{TaskTitle}</TitleDiv>
      <TaskDescDiv>{Steps}</TaskDescDiv>
      <TaskContentDiv>
        <button onClick={() => startTask()}>Start Experiment</button>
      </TaskContentDiv>
    </Container>
  );
}

export default StartPage;
