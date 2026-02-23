import { Plus } from "lucide-react";
import { AlertCircleIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import "../../styles/text.css"

import "./FormInputDecision.css"
import { useState } from "react";
import { useRef } from "react";

export default function FormInputDecision({ value, onChange, onChangeFailuresMode }) {
  const idRef = useRef(1)
  const [failures, setFailures] = useState(value.failures)
  const [confidenceLevel, setConfidence] = useState(value.confidence)

  const handleAddFailureMode = () => {
    const newFailures = {
      id: idRef.current,
      values: ''
    }
    const nextFailures = [...failures, newFailures]

    setFailures(nextFailures)
    onChangeFailuresMode(nextFailures)

    idRef.current += 1
  }

  const handleRemoveFailureMode = (id) => {
    return () => {
      const failureMode = failures.find((x) => x.id == id)
      if (failureMode) {
        const failuresMode = failures.filter(x => x.id != id)
        setFailures(failuresMode)
        onChangeFailuresMode(failuresMode)
      }
    }
  }

  const handleFailureInputChange = (id) => {
    return (ev) => {
      const failureMode = failures.find(x => x.id == id)
      if (!failureMode) return

      const nextFailures = failures.map(x => x.id == id ? { ...x, values: ev.target.value } : x)

      setFailures(nextFailures)
      onChangeFailuresMode(nextFailures)
    }
  }


  const createAdditionalInput = (id, value) => {
    return <div className="additional-input" key={id}>
      <AlertCircleIcon className="form-alert-icon" />
      <input type="text" placeholder="e.g Company Culture does not match" value={value} onChange={handleFailureInputChange(id)} />
      <button className="button-icon" onClick={handleRemoveFailureMode(id)}>
        <XIcon className="form-remove-icon" size={14} />
      </button>
    </div>
  }

  const renderAllFailuresMode = () => {
    return failures.map((v) => createAdditionalInput(v.id, v.values))
  }

  const handleConfidenceInput = (ev) => {
    setConfidence(ev.target.value)
    onChange("confidence")(ev)
  }

  return <>
    <div className="form-card">
      <div className="form-input">
        <label>What decision are you making? *</label>
        <input
          type="text"
          className="less-important"
          placeholder="e.g Accepting a Job offer at Company X"
          onChange={onChange("decision")}
          value={value["decision"]}
        />
      </div>

      <div className="form-input">
        <label>What do you expect to happen? *</label>
        <textarea
          rows="10"
          cols="60"
          placeholder="Your Expectation"
          className="less-important"
          onChange={onChange("expectation")}
          value={value["expectation"]}
        >
        </textarea>
      </div>

      <div className="form-input">
        <label>Confidence Level: {confidenceLevel}%</label>
        <input type="range" className="slider" min={0} max={100} onChange={handleConfidenceInput} value={confidenceLevel} />
        <div className="range-tag">
          <span>No Confidence</span>
          <span>Certain</span>
        </div>
      </div>

      <div className="form-input">
        <label>What could go wrong?</label>
        <span>List potential failure modes to calibrate your risk assessment</span>
        {renderAllFailuresMode()}

        <button className="failure-mode" onClick={handleAddFailureMode}> <Plus /> Add Failure Mode</button>
      </div>
      <div className="form-input">
        <label>Additional Notes (Optional)</label>
        <textarea
          rows={5}
          cols={60}
          onChange={onChange("additionalNotes")}
          value={value["additionalNotes"]}
        ></textarea>
      </div>
    </div>
  </>
}
