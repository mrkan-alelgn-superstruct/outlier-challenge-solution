/* eslint-disable */
import getScores from './getScores'

test('Gets scores', () => {
  expect(getScores(20, 0, 0)).toStrictEqual({
    score: 0,
    minScore: 0,
    maxScore: 100
  })
  expect(getScores(20, 3, 10)).toStrictEqual({
    score: 30,
    minScore: 15,
    maxScore: 65
  })
  expect(getScores(20, 11, 20)).toStrictEqual({
    score: 55,
    minScore: 55,
    maxScore: 55
  })
})
