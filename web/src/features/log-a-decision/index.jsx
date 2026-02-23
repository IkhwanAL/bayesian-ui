import { useState } from "react";
import Header from "../../component/Header";
import { useRouter } from "../../router";
import FormInputDecision from "./FormInputDecision";
import "./index.css"

export default function LogADecision() {
  const [form, setForm] = useState({
    decision: "",
    expectation: "",
    confidence: 50,
    failures: [],
    additionalNotes: ""
  })

  const { navigate } = useRouter()

  const handleCancel = () => {
    navigate("/")
  }

  const onChangeFailuresMode = (failures) => {
    setForm(prev => ({ ...prev, failures: failures }))
  }

  const onChange = (key) => {
    return (ev) => {
      setForm(prev => ({
        ...prev,
        [key]: ev.target.value
      }))
    }
  }

  const onSubmit = () => {
    console.log(form)
  }

  return <>
    <Header headerInfo="Log a Decision" otherInfo="Record your prediction before the outcome is know" />
    <FormInputDecision value={form} onChange={onChange} onChangeFailuresMode={onChangeFailuresMode} />
    <div className="form-button">
      <button className="cancel-button" onClick={handleCancel}>Cancel</button>
      <button className="accept-button" onClick={onSubmit}>Log Decision</button>
    </div>
  </>
}
