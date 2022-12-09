import { useRef, useEffect } from "react"

function useWhyRender(...args: any) {
  useEffect(() => {
    console.log("Component re-rendered")
  })
}

export default useWhyRender
