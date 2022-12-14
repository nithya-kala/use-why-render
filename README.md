# useWhyRender

This React hook helps you identify what caused re-render in your React component

## Install

`npm install --save use-why-render`

## Usage

Create an instance of the `use-why-render` class, and call its `useWhyRender()` method. Then watch the console for information of why the component is rendered again.

```jsx
import React from "react"
import useWhyRender from "use-why-render"

const MyComponent = (props) => {
  useWhyRender(props)
  return <div>`Hello ${props.name}!`</div>
}
```

### Destructured props

You also can pass select properties to the hook. In this example we'll get notified about changes in the `name` prop, only.

```jsx
const MyComponent = ({ name, age }) => {
  useWhyRender({ name })
  return (
    <div>
      `${name} ${age}!`
    </div>
  )
}
```

### Watching state

In this example we'll get notified about changes in the `name` prop and `count` state.

```jsx
const MyComponent = ({ name, age }) => {
  const [count, setCount] = useState(1)
  useWhyRender({ name }, { count })
  return (
    <div>
      `${name} ${age} ${count} times!`
    </div>
  )
}
```

See the sample directory for a complete example of how to use the library.

## Stackblitz example

https://stackblitz.com/edit/vitejs-vite-8dmguz

## Running in production

We make sure it's removed from production build. It only runs when NODE_ENV !== "production".
