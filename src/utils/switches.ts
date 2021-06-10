const toTitleCase = (text: string) : string => {
  const words = text.split(' ').map(word => word[0].toUpperCase() + word.slice(1))
  return words.join(' ')
}

const toCamelCase = (text: string) : string => {
  const title = toTitleCase(text).split(' ').join('')
  return title[0].toLowerCase() + title.slice(1)
}

const toPascalCase = (text: string) : string => {
  const title = toTitleCase(text).split(' ').join('')
  return title
}

const toSnakeCase = (text: string) : string => {
  const words = text.split(' ').map(word => word.toLowerCase())
  return words.join('_')
}

const toKebabCase = (text: string) : string => {
  const words = text.split(' ').map(word => word.toLowerCase())
  return words.join('-')
}

const toDotCase = (text: string) : string => {
  const words = text.split(' ').map(word => word.toLowerCase())
  return words.join('.')
}

const toSpaceCase = (text: string) : string => {
  let spaceTing = ''
  text.split('\n').forEach(line => {
    let newLine = ''
    line.split('').forEach(char => { newLine += `${char} ` })
    spaceTing += '\n' + newLine.trim()
  })
  return spaceTing.trim()
}

const toTowerCase = (text: string) : string => {
  let towerTing = ''
  text.toUpperCase().split('\n').forEach(line => {
    let newLine = ''
    line.split('').forEach(char => { newLine += `${char}\n` })
    towerTing += '\n' + newLine.trim()
  })
  return towerTing.trim()
}

const toReverseCase = (text: string) : string => {
  let revTing = ''
  text.split('\n').forEach(line => {
    revTing += '\n' + line.split('').reverse().join('')
  })
  return revTing.trim()
}

const toUglyCase = (text: string) : string => {
  let words = text.split(' ')
  words = words.map(word => {
    let newWord = ''
    let counter = 0
    word.split('').forEach((_value, index) => {
      if (index === 0) {
        newWord = word[index].toLowerCase()
        if (word[index].toUpperCase() === 'L') newWord = word[index].toUpperCase()
        if (word[index].match(/[a-z]/i)) counter++
      } else {
        if (word[index].match(/[a-z]/i)) {
          if (word[index].toLowerCase() === 'i') {
            newWord += word[index].toLowerCase()
          } else if (word[index].toUpperCase() === 'L') {
            newWord += word[index].toUpperCase()
          } else {
            newWord += (counter % 2 === 0) ? word[index].toUpperCase() : word[index].toLowerCase()
            counter++
          }
        } else newWord += word[index]
      }
    })
    return newWord
  })
  return words.join(' ')
}

const toClapCase = (text: string) : string => {
  let clapTing = ''
  text.split('\n').forEach(line => {
    clapTing += '\n👏' + line.split(' ').join('👏') + '👏'
  })
  return clapTing.trim()
}

const toGoneCase = (text: string) : string => {
  const goneMap = new Map([
    ['a', '4'],
    ['b', 'ß'],
    ['c', '¢'],
    ['d', 'D'],
    ['e', '3'],
    ['f', 'ƒ'],
    ['g', 'G'],
    ['h', 'H'],
    ['i', '1'],
    ['j', 'J'],
    ['k', 'к'],
    ['l', 'L'],
    ['m', 'M'],
    ['n', 'И'],
    ['o', '0'],
    ['p', 'ℙ'],
    ['q', 'ℚ'],
    ['r', 'Я'],
    ['s', '$'],
    ['t', 'T'],
    ['u', 'µ'],
    ['v', 'V'],
    ['w', 'Ш'],
    ['x', 'Ж'],
    ['y', '¥'],
    ['z', '2']
  ])

  let goneTing = ''
  text.split('').forEach(char => {
    goneTing += goneMap.has(char.toLowerCase()) ? goneMap.get(char.toLowerCase()) : char.toUpperCase()
  })
  return goneTing
}

export const convertCase = (text: string, n: number) : string => {
  switch (n) {
    case 0:
      return text.toUpperCase()
    case 1:
      return text.toLowerCase()
    case 2:
      return toTitleCase(text)
    case 3:
      return toCamelCase(text)
    case 4:
      return toPascalCase(text)
    case 5:
      return toSnakeCase(text)
    case 6:
      return toKebabCase(text)
    case 7:
      return toDotCase(text)
    case 8:
      return toSpaceCase(text)
    case 9:
      return toTowerCase(text)
    case 10:
      return toReverseCase(text)
    case 11:
      return toUglyCase(text)
    case 12:
      return toGoneCase(text)
    case 13:
      return toClapCase(text)
    default:
      return text
  }
}
