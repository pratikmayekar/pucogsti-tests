import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusDiv = styled.div`
  font-size: 50px;
`;

function Plus() {
  return (
    <Container>
      <PlusDiv>+</PlusDiv>
    </Container>
  );
}

export default Plus;
