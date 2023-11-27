import ExOneUseState from "./hooks/UseState";
import ExTwoUseEffect from "./hooks/UseEffect";
import ExThreeUseCallBack from "./hooks/UseCallBack";
import ExFourUseMemo from "./hooks/UseMemo";
import ExFiveUseRef from "./hooks/UseRef";

const App = () => {
  return (
    <>
      <ExOneUseState />
      <ExTwoUseEffect />
      <ExThreeUseCallBack />
      <ExFourUseMemo />
      <ExFiveUseRef />
    </>
  )
} 

export default App;
