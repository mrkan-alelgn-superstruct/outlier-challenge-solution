import React from 'react'
import styled from 'styled-components'
import getDifficultyRating from '../../utils/getDifficultyRating'

const Container = styled.div`
  display: flex;
  gap: 5px;
`

const Star = styled.span`
  font-size: 12px;
  color: ${(props) => (props.filled ? '111' : '#ccc')};
  margin: 0px;
`

const Rating = ({ difficulty }) => {
  return (
    <Container>
      {[...Array(5)].map((_, index) => {
        return (
          <Star filled={index < getDifficultyRating(difficulty)} key={index}>
            &#9733;
          </Star>
        )
      })}
    </Container>
  )
}

export default Rating
