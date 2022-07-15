export const catOne = 'student-permit'
export const catFour = 'others'

function Capitalize(x) {
  return x.charAt(0).toUpperCase() + x.slice(1)
}

export function TitleExtractor(slug) {
  let title = ''

  const arr = slug.split("-")
  const newArr = arr.map(x => Capitalize(x))
  title = newArr.join(" ")

  return title;
}
