import { useState } from "react"
import "./App.css"
import useWhyRender from "use-why-render"

function App(props: any) {
  const [count, setCount] = useState(0)
  useWhyRender(props, { count })

  return (
    <div className="App">
      <h1>Welcome to {props.name}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Verify the <code>web console</code> to identify why the component is
          re-rendered.
        </p>
      </div>
    </div>
  )
}

export default App
