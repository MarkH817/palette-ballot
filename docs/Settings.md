# Settings

Certain portions of the extension will be customizable. This will show how to define and use a setting within the project.

Currently, there are only 3 categories for settings: Palette, Clipboard, and Notifications

## Define a Setting

An object will hold these keys to define an individual setting.
* `label` (String)
* `description` (String)
  * Optional. Use only if a short label cannot describe the setting well enough.
* `type` (String)
  * `dropdown`, `checkbox`
* `values`(Array of Strings/Objects)
  * Required if `type` === `dropdown`
  * Not required for `checkbox`. Uses Boolean only.
* `default` (Boolean/String/Object)

## Examples

Dropdown:
```JavaScript
{
  label: 'Friend Title',
  type: 'dropdown',
  values: [
    'Comrade',
    'Buddy',
    'Friend',
    'Pal'
  ],
  default: 'Friend'
}
```

Checkbox:
```JavaScript
{
  label: 'Allow',
  description: 'What more could I say?',
  type: 'checkbox',
  default: true
}
```
