export const wait = (timeout: number = 1500) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, timeout)
  })

export const stripHTML = (textHTML: string) => {
  const regex = /(<([^>]+)>)/gi
  return textHTML.replace(regex, '')
}
