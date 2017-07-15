export function read (inputElement) {
  // Grab the last focused element
  // And restore it after this has executed
  let lastActive = document.activeElement

  let result = ''
  inputElement.focus()

  if (document.execCommand('paste')) {
    result = inputElement.textContent
  }

  lastActive.focus()
  return result
}

export function write (inputElement, data) {
  // Grab the last focused element
  // And restore it after this has executed
  let lastActive = document.activeElement

  let flag = false
  inputElement.focus()

  if (document.execCommand('copy')) {
    flag = true
  }

  lastActive.focus()
  return flag
}
