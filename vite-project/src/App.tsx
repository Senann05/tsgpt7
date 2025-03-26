import useTheme from "./hooks/useTheme";

const App=()=>{
  const {toggleTheme, theme} = useTheme();

  return(
    <div style={{ textAlign: "center", padding: "20px"}}>
      <h1>edheddj</h1>
      <button onClick={toggleTheme}>{theme==="light"? "Dark moda kec": "Light moda kec"}</button>
      </div>
  )
}
export default App;