export function create (id, title, msg, cb) {
  if (chrome.notifications) {
    chrome.notifications.create(id, {
      type: 'basic',
      title: title,
      message: msg,
      iconUrl: '../images/icon-38.png'
    }, (_) => {
      cb(null)
    })
  } else {
    cb(new Error('Notifications not available'))
  }
}
