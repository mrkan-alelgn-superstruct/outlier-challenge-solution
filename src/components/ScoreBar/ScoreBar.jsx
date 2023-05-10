import React from 'react'
import styled from 'styled-components'
import getScores from '../../utils/getScores'

const Container = styled.div`
  margin-top: auto;
  margin-bottom: 30px;
  width: 100%;
  &>div: nth-of-type(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    & > p {
      margin: 0px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #333333;
    }
  }
  &>div: nth-of-type(2) {
    height: 30px;
    border-radius: 8px;
    border: 1px solid #333;
    position: relative;
    overflow: hidden;
    & > div:nth-of-type(1) {
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${(props) => props.minscore}%;
      height: 100%;
      background-color: #222;
      z-index: 30;
    }
    & > div:nth-of-type(2) {
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${(props) => props.score}%;
      height: 100%;
      background-color: #777;
      z-index: 20;
    }
    & > div:nth-of-type(3) {
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${(props) => props.maxscore}%;
      height: 100%;
      background-color: #aaa;
      z-index: 10;
    }
  }
`

const ScoreBar = ({ questions, answered, questionNo }) => {
  return (
    <Container
      minscore={getScores(questions, answered, questionNo).minScore}
      score={getScores(questions, answered, questionNo).score}
      maxscore={getScores(questions, answered, questionNo).maxScore}
    >
      <div>
        <p>{`Score: ${getScores(questions, answered, questionNo).score}%`}</p>
        <p>{`Max Score: ${
          getScores(questions, answered, questionNo).maxScore
        }%`}</p>
      </div>
      <div>
        <div />
        <div />
        <div />
      </div>
    </Container>
  )
}

export default ScoreBar
