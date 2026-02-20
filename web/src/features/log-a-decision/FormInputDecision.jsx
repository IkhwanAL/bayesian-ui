import { Plus } from "lucide-react";
import { AlertCircleIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import "../../styles/text.css"

import "./FormInputDecision.css"

export default function FormInputDecision() {
  const createAdditionalInput = () => {
    return <div className="additional-input">
      <AlertCircleIcon className="form-alert-icon" />
      <input type="text" placeholder="e.g Company Culture does not match" />
      <button className="button-icon">
        <XIcon className="form-remove-icon" size={14} />
      </button>
    </div>
  }

  return <>
    <div className="form-card">
      <div className="form-input">
        <label>What decision are you making? *</label>
        <input type="text" className="less-important" placeholder="e.g Accepting a Job offer at Company X" />
      </div>

      <div className="form-input">
        <label>What do you expect to happen? *</label>
        <textarea rows="10" cols="60" placeholder="Something" className="less-important"></textarea>
      </div>

      <div className="form-input">
        <label>Confidence Level: 50%</label>
        <input type="range" className="slider" />
        <div className="range-tag">
          <span>No Confidence</span>
          <span>Certain</span>
        </div>
      </div>

      <div className="form-input">
        <label>What could go wrong?</label>
        <span>List potential failure modes to calibrate your risk assessment</span>
        {createAdditionalInput()}
        {createAdditionalInput()}
        {createAdditionalInput()}

        <button className="failure-mode"> <Plus /> Add Failure Mode</button>
      </div>
      <div className="form-input">
        <label>Additional Notes (Optional)</label>
        <textarea rows={5} cols={60}></textarea>
      </div>
    </div>
  </>
}
