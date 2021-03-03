import "./App.css";
import Table from "./components/table/table";

function App() {
  const abc = "abcdefghijklmnopqrstuvwxyz 1234567890 pqrst4567 defghi";
  const len = abc.length - 5;
  const row2 = [];
  function getItems(len) {
    for (let i = 0; i < len; i++) {
      let newStr = getItem();
      while (!newStr) {
        newStr = getItem();
      }
      row2.push(newStr);
    }
  }

  function getItem() {
    const startStr = Number((Math.random() * len).toFixed());
    const endStr =
      Number((Math.random() * (len - startStr)).toFixed()) + 5 + startStr;
    return abc.slice(startStr, endStr).trim();
  }

  getItems(123);

  return (
    <div className='App'>
      <div className='container'>
        <Table title='Products' rows={row2} />
      </div>
    </div>
  );
}

export default App;
