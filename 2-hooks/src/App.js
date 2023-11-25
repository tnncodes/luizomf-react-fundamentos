import ExOneUseState from "./hooks/UseState";
import ExTwoUseEffect from "./hooks/UseEffect";
import ExThreeUseCallBack from "./hooks/UseCallBack";
import ExFourUseMemo from "./hooks/UseMemo";

const App = () => {
  return (
    <>
      <ExOneUseState />
      <ExTwoUseEffect />
      <ExThreeUseCallBack />
      <ExFourUseMemo />
    </>
  )
} 

export default App;
