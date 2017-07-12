export function getSettings () {
  if (chrome.storage.sync) {
    return chrome.storage.sync.get('settings')
  }

  return {}
}

export function setSettings (settings, cb) {
  if (chrome.storage.sync) {
    chrome.storage.sync.set(settings, cb)
  }
}

export function getPalettes () {
  if (chrome.storage.sync) {
    return chrome.storage.sync.get('palettes')
  }

  return []
}

export function addPalette (palette, cb) {
  if (chrome.storage.sync) {
    let data = {
      palettes: getPalettes()
    }
    data.palettes.push(palette)
    chrome.storage.sync.set(data, cb)
  }
}
