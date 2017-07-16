import defaults from './defaults.json'

export function reset (cb) {
  if (chrome.storage.sync) {
    chrome.storage.sync.clear()
    chrome.storage.sync.set(defaults)
    cb(null)
  } else {
    cb(new Error('Could not reset to default'))
  }
}

export function getSettings (cb) {
  if (chrome.storage.sync) {
    chrome.storage.sync.get('settings', (data) => {
      if (data.settings !== undefined) {
        cb(data.settings, null)
      } else {
        cb(defaults.settings, null)
      }
    })
  } else {
    cb(defaults.settings, new Error('No storage available'))
  }
}

export function setSettings (settings, cb) {
  if (chrome.storage.sync) {
    chrome.storage.sync.set(settings, () => {
      cb(null)
    })
  } else {
    cb(new Error('No storage available'))
  }
}

export function getPalettes (cb) {
  if (chrome.storage.sync) {
    chrome.storage.sync.get('palettes', (data) => {
      if (data.palettes !== undefined) {
        cb(data.palettes, null)
      } else {
        cb(defaults.palettes, null)
      }
    })
  } else {
    cb(defaults.palettes, new Error('No storage available'))
  }
}

export function addPalette (palette, cb) {
  if (chrome.storage.sync) {
    getPalettes((oldList) => {
      let updatedList = oldList.push(palette)

      chrome.storage.sync.set({
        palettes: updatedList
      }, () => {
        cb(null)
      })
    })
  } else {
    cb(new Error('Browser not identified'))
  }
}
