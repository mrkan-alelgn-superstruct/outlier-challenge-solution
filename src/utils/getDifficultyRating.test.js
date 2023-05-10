/* eslint-disable */
import getDifficultyRating from './getDifficultyRating'

test('Gets Difficulty rating', () => {
    expect(getDifficultyRating("hard")).toBe(3)
    expect(getDifficultyRating("medium")).toBe(2)
    expect(getDifficultyRating("easy")).toBe(1)
    expect(getDifficultyRating("unknown")).toBe(0)
})
