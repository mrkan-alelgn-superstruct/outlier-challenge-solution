const getScores = (questions, answered, questionNo) => {
  const score = parseFloat(((answered / questionNo) * 100).toFixed(2)) || 0
  const minScore = parseFloat(((answered / questions) * 100).toFixed(2))
  const maxScore = parseFloat(
    (((answered + (questions - questionNo)) / questions) * 100).toFixed(2)
  )
  return { score, minScore, maxScore }
}
export default getScores
