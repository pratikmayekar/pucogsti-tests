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
const MenuOption = styled.div`
  cursor: pointer;
`;

const TaskTitle = "Main Menu";
const Desc = `Please choose the task you would like to perform:`;
function MainMenu({ startEssay, startVideo, startMath }) {
  return (
    <Container>
      <TitleDiv>{TaskTitle}</TitleDiv>
      <TaskDescDiv>{Desc}</TaskDescDiv>
      <TaskContentDiv>
        <MenuOption onClick={() => startEssay()}>
          Essay Writing Experiment
        </MenuOption>
        <br />
        <MenuOption onClick={() => startMath()}>
          Math Experiment
        </MenuOption>
        <br />
        <MenuOption onClick={() => startVideo()}>
          Music Video Experiment
        </MenuOption>
      </TaskContentDiv>
    </Container>
  );
}

export default MainMenu;
