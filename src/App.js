import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Rating from './components/Rating/Rating'
import Button from './components/Button/Button'
import ScoreBar from './components/ScoreBar/ScoreBar'
import questions from './questions.json'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 600px;
    height: 800px;
    background-color: aliceblue;
    padding: 5px;
  }
`

const Main = styled.div`
  height: 100%;
  width: 100%;
  background-color: #eeeeee;
`

const ProgressBar = styled.div`
  height: 20px;
  width: ${(props) => props.width}%;
  background-color: #999999;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 30px 50px;
  height: calc(100% - 50px);

  & > p:nth-of-type(1) {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #333333;
    margin: 0px;
  }
  & > p:nth-of-type(2) {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #888888;
    margin: 0px;
  }
  & > p:nth-of-type(3) {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #222;
    margin: 0px;
    margin-top: 20px;
  }
  & > div:nth-of-type(2) {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    margin-top: 40px;
  }
`
const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & > p {
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    color: #333333;
  }
`

function App () {
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState(null)
  const [question, setQuestion] = useState(null)
  const [questionNo, setQuestionNo] = useState(0)
  const [answers, setAnswers] = useState([])

  const onAnswer = (choice) => {
    setSelected(choice)
    setAnswers((prev) => [...prev, choice === question.answer])
    setQuestionNo(prev => prev + 1)
  }

  useEffect(() => {
    if (questions[active]) {
      let question = {}
      question.question = window.decodeURIComponent(questions[active].question)
      question.choices = [...questions[active].incorrect_answers]
      question.choices.splice(
        Math.floor(Math.random() * 4),
        0,
        questions[active].correct_answer
      )
      question.answer = questions[active].correct_answer
      question.category = window.decodeURIComponent(questions[active].category)
      question.difficulty = questions[active].difficulty
      setQuestion(question)
    }
  }, [active, questions])

  return (
    <Container>
      <div>
        <Main>
          <ProgressBar width={((active + 1) / questions.length) * 100} />
          <Content>
            <p>{`Question ${active + 1} of ${questions.length}`}</p>
            <p>{question && question.category}</p>
            <Rating difficulty={question && question.difficulty} />
            <p>{question && question.question}</p>
            <div>
              {question &&
                question.choices.map((choice, i) => {
                  return (
                    <Button
                      key={i}
                      label={choice}
                      onClick={() => onAnswer(choice)}
                      selected={selected === choice}
                      disabled={selected}
                      fade={
                        selected &&
                        selected !== choice &&
                        question.answer !== choice
                      }
                    />
                  )
                })}
            </div>
            {selected && (
              <Result>
                <p>{selected === question.answer ? 'Correct!' : 'Sorry!'}</p>
                {active + 1 < questions.length ? <Button
                  label='Next Question'
                  onClick={() => {
                    setActive((prev) => prev + 1)
                    setSelected(null)
                  }}
                /> : <p>Quiz completed</p>}
              </Result>
            )}
            <ScoreBar
              questions={questions.length || 0}
              answered={answers.filter((ans) => ans).length || 0}
              questionNo={questionNo}
            />
          </Content>
        </Main>
      </div>
    </Container>
  )
}

export default App
