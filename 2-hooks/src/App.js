import ExThreeUseCallBack from "./hooks/UseCallBack";
import ExTwoUseEffect from "./hooks/UseEffect";
import ExOneUseState from "./hooks/UseState";

const App = () => {
  return (
    <>
      <ExOneUseState />
      <ExTwoUseEffect />
      <ExThreeUseCallBack />
    </>
  )
} 

export default App;
