const getDifficultyRating = (difficulty) => {
  if (difficulty === 'hard') {
    return 3
  } else if (difficulty === 'medium') {
    return 2
  } else if (difficulty === 'easy') {
    return 1
  }
  return 0
}
export default getDifficultyRating
