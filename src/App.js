
import './App.css';
// eslint-disable-next-line no-unused-vars
import Navbar from './components/navbar';
import Textform from './components/textform';


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="about site"/>
      <div className="container my-3">
      <Textform heading="enter the text to be transformed"/>
      </div>
    </>
  );
}
export default App;
