import Card from "./components/Card";
import PayoutCard from "./components/PayoutCard";


export function App() {
  return <div className="flex gap-3">
     <PayoutCard aboutAmount={"Next Payout"} amount={23234657.23} orderCount={23}/>
    <Card aboutAmount={"Amount Pending"} amount={23234.23} orderCount={13}/>
    <Card aboutAmount={"Amount Processed"} amount={23234657.23} />
   
  </div>;
}
export default App;
