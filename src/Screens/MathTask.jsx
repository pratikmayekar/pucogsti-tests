import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  MathCorrectDuration,
  MathDuration,
  MathHardOperandMin,
  MathOperandMax,
  MathOperandMin,
} from "../common/Config";

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
  width: 60vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MathDiv = styled.div`
  margin-top: 30px;
  font-size: 50px;
`;
const AnswerInput = styled.input`
  font-size: 50px;
  width: 100px;
`;
const CheckDiv = styled.div`
  width: 70px;
  margin-left: 10px;
`;
const CorrectSpan = styled.span`
  color: green;
`;
const WrongSpan = styled.span`
  color: red;
`;

const TaskTitle = "Experiment: Math";
const Duration = "Duration: 7 mins";
const TaskDesc =
  "This activity has been designed to activate the numerical/logical reasoning parts of your brain.";
const MathOperations = ["+", "*", "-"];

function MathTask() {
  const [disabled, setDisabled] = useState(false);
  const [answerVal, setAnswerVal] = useState("");
  const [operand1, setOperand1] = useState();
  const [operand2, setOperand2] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [checkVal, setCheckVal] = useState(null);
  const [currOperation, setCurrOperation] = useState(0);

  useEffect(() => {
    setNewProblem();
    setTimeout(() => {
      setDisabled(true);
    }, MathDuration);
  }, []);

  const checkAnswer = () => {
    if (parseInt(answerVal) === correctAnswer) {
      setCheckVal("correct");
      setTimeout(() => {
        setNewProblem();
      }, MathCorrectDuration);
    } else setCheckVal("wrong");
  };

  const setNewProblem = () => {
    setCheckVal(null);
    setAnswerVal("");
    let op1, op2, operation;

    let probType = Math.random() < 0.3;
    
    const randomIntFromInterval = (min, max) => { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }    

    if(probType) {
      op1 = randomIntFromInterval(MathOperandMin, MathOperandMax);
      op2 = randomIntFromInterval(MathOperandMin, MathOperandMax);
      operation = Math.floor(Math.random() * MathOperations.length);
    }
    else {
      op1 = randomIntFromInterval(MathHardOperandMin, MathOperandMax);
      op2 = randomIntFromInterval(MathHardOperandMin, MathOperandMax);
      operation = Math.floor(Math.random() * (MathOperations.length - 1)); // exclude subtraction
    }

    setCurrOperation(operation);
    switch (operation) {
      case 0:
        setOperand1(op1);
        setOperand2(op2);
        setCorrectAnswer(op1 + op2);
        break;
      case 1:
        setOperand1(op1);
        setOperand2(op2);
        setCorrectAnswer(op1 * op2);
        break;
      case 2:
        if (op1 >= op2) {
          setOperand1(op1);
          setOperand2(op2);
          setCorrectAnswer(op1 - op2);
        } else {
          setOperand1(op2);
          setOperand2(op1);
          setCorrectAnswer(op2 - op1);
        }
        break;
    }
  };

  return (
    <Container>
      <TitleDiv>{TaskTitle}</TitleDiv>
      <TaskDescDiv>
        {Duration}
        <br />
        {TaskDesc}
        <br />
      </TaskDescDiv>
      <TaskContentDiv>
        <MathDiv>
          <span>{operand1}</span> {MathOperations[currOperation]}{" "}
          <span>{operand2}</span> ={" "}
          <AnswerInput
            type="text"
            value={answerVal}
            onChange={(event) => {
              setAnswerVal(event.target.value.replace(/\D/, ""));
              setCheckVal(null);
            }}
            onKeyDown={(event) =>
              event.key === "Enter" ? checkAnswer() : true
            }
            disabled={disabled}
            autoFocus
          />
        </MathDiv>
        <CheckDiv>
          {checkVal === "correct" ? (
            <CorrectSpan>Correct</CorrectSpan>
          ) : checkVal === "wrong" ? (
            <WrongSpan>Wrong</WrongSpan>
          ) : (
            <></>
          )}
        </CheckDiv>
      </TaskContentDiv>
    </Container>
  );
}

export default MathTask;
