export function read (inputElement, cb) {
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

  if (result !== null) {
    cb(result, null)
  } else {
    cb(result, new Error('Could not read clipboard'))
  }
}

export function write (inputElement, data, cb) {
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

  if (flag) {
    cb(null)
  } else {
    cb(new Error('Could not write to clipboard'))
  }
}
