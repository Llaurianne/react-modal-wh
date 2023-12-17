![Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Badge](https://img.shields.io/badge/npm-cb0000?style=for-the-badge&logo=npm&logoColor=white)
![Badge](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Badge](https://img.shields.io/badge/create--react--library-20B2AA?style=for-the-badge)

# Modal library

---

This library is a React component that displays a simple modal with the text of your choice.
The modal can be initially opened or closed, depending on the initial state you define. When open, it can be closed using the button in the top-right corner. The text is defined via a props.

## Prerequisites

You should have **Node.js** and **npm** (or yarn) installed on your machine (check with the command line tool: `node -v` and `npm -v`). If not, you can download Node.js here: https://nodejs.org/ .

Npm is part of the Node.js installation bundle. If `npm -v` return "npm: command not found", reinstall Node.js and check that npm is selected as the default package manager during the installation process.
.

Minimal required versions:  
node: >= 10.24.1  
npm: >=v6.14.12

We advise to use React 18.2.0. in the main app.

## How to use

### Step 1 - Install

Install the plugin with the console in the root folder of your React project.

```
$ npm i react-modal-wh
```

### Step 2 - Import

Import the useState hook of React, the Modal component and his style sheet in your component file.

```javascript
import { useState } from 'react'
import { Modal } from 'modal-plugin-hrnet'
import 'modal-plugin-hrnet/dist/index.css'
```

### Step 3 - Add the state variable

Call the useState hook at the top level of your component to declare the state variable _openModal_ and his set function _setOpenModal_.
Set the initial state to _true_ or _false_ whether you want the modal to be open or closed when your component is mounted.
Declare the _text_ variable and initialize it with a string object.

```javascript
const [openModal, setOpenModal] = useState(false)
const text = 'The modal is open!'
```

### Step 4 - Use the modal component

You can now use the plugin in you component.

```jsx
<Modal openModal={openModal} setOpenModal={setOpenModal} text={text} />
```

## Props

| Props        | Description          | Type     |
| :----------- | :------------------- | :------- |
| openModal    | state variable       | boolean  |
| setOpenModal | set state function   | function |
| text         | text to be displayed | string   |

## Example

```jsx
import { useState } from 'react'
import { Modal } from 'react-modal-wh'
import 'react-modal-wh/dist/index.css'

function Component() {
  const [openModal, setOpenModal] = useState(true)
  const text = 'Welcome on our page!'

  return (
    <div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} text={text} />
    </div>
  )
}

export default Component
```

## License

MIT © [Llaurianne](https://github.com/Llaurianne)
