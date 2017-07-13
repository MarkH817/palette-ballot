import defaults from './defaults.json'

export function reset () {
  if (chrome.storage.sync) {
    chrome.storage.sync.clear()
    chrome.storage.sync.set(defaults)
  }

  console.log('Extension has been reset')
}

export function getSettings (cb) {
  if (chrome.storage.sync) {
    chrome.storage.sync.get('settings', (data) => {
      if (data.settings !== undefined) {
        cb(data.settings)
      } else {
        cb(defaults.settings)
      }
    })
  } else {
    cb(defaults.settings)
  }
}

export function setSettings (settings, cb) {
  if (chrome.storage.sync) {
    chrome.storage.sync.set(settings, cb)
  } else {
    console.error(new Error('Browser not identified'))
  }
}

export function getPalettes (cb) {
  if (chrome.storage.sync) {
    chrome.storage.sync.get('palettes', (data) => {
      if (data.palettes !== undefined) {
        cb(data.palettes)
      } else {
        cb(defaults.palettes)
      }
    })
  } else {
    cb(defaults.palettes)
  }
}

export function addPalette (palette, cb) {
  if (chrome.storage.sync) {
    getPalettes((oldPalette) => {
      chrome.storage.sync.set({
        palette: oldPalette.push(palette)
      }, cb)
    })
  } else {
    console.error(new Error('Browser not identified'))
  }
}
