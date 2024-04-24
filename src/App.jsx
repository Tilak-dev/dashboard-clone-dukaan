import Card from "./components/Card";


export function App() {
  return <div className="flex gap-3">
    <Card aboutAmount={"Amount Pending"} amount={23234.23} orderCount={13}/>
    <Card aboutAmount={"Amount Processed"} amount={23234657.23} />
  </div>;
}
export default App;
