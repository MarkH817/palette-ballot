export function read (inputElement) {
  // Grab the last focused element
  // And restore it after this has executed
  let lastActive = document.activeElement

  let result = null
  inputElement.value = ''
  inputElement.focus()

  if (document.execCommand('paste')) {
    result = inputElement.value
    inputElement.value = ''
  }

  lastActive.focus()
  return result
}

export function write (inputElement, data) {
  // Grab the last focused element
  // And restore it after this has executed
  let lastActive = document.activeElement

  let flag = false
  inputElement.value = data
  inputElement.focus()

  if (document.execCommand('selectAll') && document.execCommand('copy')) {
    flag = true
    inputElement.value = ''
  }

  lastActive.focus()
  return flag
}
