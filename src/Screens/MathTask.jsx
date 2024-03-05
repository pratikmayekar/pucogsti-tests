import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  MathCorrectDuration,
  MathDuration,
  MathHardOperandMin,
  MathOperandMax,
  MathOperandMin,
} from "../common/Config";
import KeyboardReact from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

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
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const KeypadDiv = styled.div`
  width: 40%;
`;
const EndButtonDiv = styled.div`
  width: 60vw;
  height: 10vh;
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
  height: 22px;
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

function MathTask({ endTask }) {
  const [disabled, setDisabled] = useState(false);
  const [answerVal, setAnswerVal] = useState("");
  const [operand1, setOperand1] = useState();
  const [operand2, setOperand2] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [checkVal, setCheckVal] = useState(null);
  const [currOperation, setCurrOperation] = useState(0);
  const keyboard = useRef();

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
    keyboard.current.setInput("");
    let op1, op2, operation;

    let probType = Math.random() < 0.3;

    const randomIntFromInterval = (min, max) => {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    if (probType) {
      op1 = randomIntFromInterval(MathOperandMin, MathOperandMax);
      op2 = randomIntFromInterval(MathOperandMin, MathOperandMax);
      operation = Math.floor(Math.random() * MathOperations.length);
    } else {
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

  const onChangeInput = (event) => {
    const inputVal = event.target.value.replace(/\D/, "");
    setAnswerVal(inputVal);
    setCheckVal(null);
    keyboard.current.setInput(inputVal);
  };
  const onVirtualKeyPress = (button) => {
    switch (button) {
      case "{enter}": {
        checkAnswer();
        break;
      }
      case "{bksp}": {
        const newVal = answerVal.slice(0, -1);
        setAnswerVal(newVal);
        keyboard.current.setInput(newVal);
        break;
      }
    }
    button === "{enter}" && checkAnswer();
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
            onChange={onChangeInput}
            onKeyDown={(event) => {
              event.key === "Enter" && checkAnswer();
            }}
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
        <KeypadDiv style={{ visibility: disabled ? "hidden" : "visible" }}>
          <KeyboardReact
            keyboardRef={(r) => (keyboard.current = r)}
            onChange={(input) => setAnswerVal(input)}
            onKeyPress={(button) => onVirtualKeyPress(button)}
            layout={{
              default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"],
            }}
            display={{
              "{enter}": "enter",
              "{bksp}": "backspace",
            }}
            theme="hg-theme-default hg-layout-numeric numeric-theme"
          />
        </KeypadDiv>
      </TaskContentDiv>
      <EndButtonDiv>
        <button
          style={{ display: disabled ? "inline-block" : "none" }}
          onClick={() => endTask()}
        >
          End Experiment
        </button>
      </EndButtonDiv>
    </Container>
  );
}

export default MathTask;
