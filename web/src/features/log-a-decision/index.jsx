import Header from "../../component/Header";
import FormInputDecision from "./FormInputDecision";

export default function LogADecision() {
  return <>
    <Header headerInfo="Log a Decision" otherInfo="Record your prediction before the outcome is know" />
    <FormInputDecision />
  </>
}
