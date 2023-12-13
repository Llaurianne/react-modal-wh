![Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Badge](https://img.shields.io/badge/npm-cb0000?style=for-the-badge&logo=npm&logoColor=white)
![Badge](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Badge](https://img.shields.io/badge/create--react--library-20B2AA?style=for-the-badge)

# Modal plugin

---

This plugin is a React component displaying a simple modal with the text of your choice.

## How to use

### Step 1 - Install

Install the plugin with the console in the root folder of your React project.

```
$ npm i react-modal-wh
```

We advise to use React 18.2.0.

### Step 2 - Import

Import the plugin and his style sheet in your component file.

```javascript
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

## License

MIT © [Llaurianne](https://github.com/Llaurianne)
