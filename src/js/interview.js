// Palindrom
const palindrome = str => {
  // turn the string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the comparising
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  )
}

// FizzBuzz
const fizzBuzz = num => {
  for (let i of num) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

// Vowels
const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++
    }
  }
  return count
}

const findVowels = str => {
  const matched = str.match(/[aeiou]/gi)
  return matched ? matches.length : 0
}

// fibonacci
const fibonacci = num => {
  const result = [0, 1]
  for (let i of num) {
    const prevNum1 = result[i - 1]
    const prevNum2 = result[i - 2]
    result.push(prevNum1 + prevNum2)
  }
  return result[num]
}

const fibonacci = num => {
  if (num < 2) {
    return num
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}
