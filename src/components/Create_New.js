import React from "react";

export const CreateNew = () => {
  return (
      <div className="container my-3">
        <h4>SoP for Bus/Transmission Line/ICT/Reactor/Bay Shutdown</h4>
        <div className="w-75 p-4">
          <form>
            <fieldset disabled>
              <div className="form-group row mt-2">
                <label htmlFor="region" className="col-sm-4 col-form-label">
                  Region
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    id="region"
                    className="form-control"
                    placeholder="WR-II"
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label htmlFor="location" className="col-sm-4 col-form-label">
                  Name of Substation
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    id="location"
                    className="form-control"
                    placeholder="Dehgam"
                  />
                </div>
              </div>
            </fieldset>

            <div className="form-group row mt-2">
              <label htmlFor="description" className="col-sm-4 col-form-label">
                Brief Description
              </label>
              <div className="col-sm-5">
                <input type="text" className="form-control" id="description" />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label
                htmlFor="maintenanceDate"
                className="col-sm-4 col-form-label"
              >
                Maintenance Date
              </label>
              <div className="col-sm-5">
                <input
                  type="date"
                  className="form-control"
                  id="maintenanceDate"
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label
                htmlFor="shutdownStartDate"
                className="col-sm-4 col-form-label"
              >
                Shutdown Start Date
              </label>
              <div className="col-sm-5">
                <input
                  type="date"
                  className="form-control"
                  id="shutdownStartDate"
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label
                htmlFor="shutdownEndDate"
                className="col-sm-4 col-form-label"
              >
                Shutdown End Date
              </label>
              <div className="col-sm-5">
                <input
                  type="date"
                  className="form-control"
                  id="shutdownEndDate"
                />
              </div>
            </div>

            <fieldset>
              <div className="form-group row mt-2">
                <legend className="col-form-label col-sm-4 pt-0">
                  Type of Shutdown
                </legend>
                <div className="col-sm-5">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="occ"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="occ">
                      OCC
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="postOCC"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="postOCC">
                      Post OCC
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="emergency"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="emergency">
                      Emergency
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="form-group row mt-2">
              <label
                htmlFor="shutdownReason"
                className="col-sm-4 col-form-label"
              >
                Reason of Shutdown
              </label>
              <div className="col-sm-5">
                <textarea
                  type="text"
                  className="form-control"
                  id="shutdownReason"
                  rows="3"
                />
              </div>
            </div>

            <fieldset>
              <div className="form-group row mt-2">
                <label className="col-sm-9 col-form-label">
                  Details of Work to be carried out:
                </label>
              </div>
              <div className="form-group row">
                <label htmlFor="risk" className="col-sm-4 col-form-label">
                  “Risks (Safety Risks/System Risk) Identified during the work”
                </label>
                <div className="col-sm-5">
                  <textarea
                    type="text"
                    className="form-control"
                    id="risk"
                    rows="2"
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label htmlFor="mitigation" className="col-sm-4 col-form-label">
                  Mitigation Measures planned for above Risks.
                </label>
                <div className="col-sm-5">
                  <textarea
                    type="text"
                    className="form-control"
                    id="mitigation"
                    rows="2"
                  />
                </div>
              </div>
            </fieldset>

            <div className="form-group row mt-2">
              <label
                htmlFor="shutdownElement"
                className="col-sm-4 col-form-label"
              >
                Bays No./Bus/Element for Shutdown
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  id="shutdownElement"
                />
              </div>
            </div>

            <fieldset>
              <div className="form-group row mt-2">
                <legend className="col-form-label col-sm-4 pt-0">
                  Premises
                </legend>
                <div className="col-sm-5">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="powergridPremises"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="powergridPremises"
                    >
                      Shutdown in POWERGRID Premises
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="otherPremises"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="otherPremises">
                      Shutdown in other utility Premises
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div className="form-group row mt-2">
                <legend className="col-form-label col-sm-4 pt-0">
                  Shutdown Work Scope
                </legend>
                <div className="col-sm-5">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="powergridScope"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="powergridScope"
                    >
                      By POWERGRID
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="otherScope"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="otherScope">
                      By Other Utilities
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group row mt-2">
                <div className="col-sm-4">
                  Ensure the following before availing shutdown
                </div>
                <div className="col-sm-5">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck1"
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      PTW/SFT in SAP before start of work for approval from
                      RTAMC
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck2"
                    />
                    <label className="form-check-label" htmlFor="gridCheck2">
                      CHECKED PPE (Steel Rope, Clamps, PP Rope, helmets, safety
                      belts etc.)
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck3"
                    />
                    <label className="form-check-label" htmlFor="gridCheck3">
                      SAFETY PEP talk before start of work by Maintenance I/C
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck4"
                    />
                    <label className="form-check-label" htmlFor="gridCheck4">
                      Ensure presence of minimum two POWERGRID personnel (with
                      at least one POWERGRID executive) during Manual operation
                      of switchgear assets locally at site with prior clearance
                      from RTAMC
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="form-group row mt-2">
              <label
                htmlFor="isolationSequence"
                className="col-sm-4 col-form-label"
              >
                Sequence of Isolation (CB & Isolator) By RTAMC
              </label>
              <div className="col-sm-5">
                <textarea
                  type="text"
                  className="form-control"
                  id="isolationSequence"
                  rows="2"
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label
                htmlFor="esCloseOperationSequence"
                className="col-sm-4 col-form-label"
              >
                Sequence for E/S Operation By site (Name of Earth Switch to be
                closed)
              </label>
              <div className="col-sm-5">
                <textarea
                  type="text"
                  className="form-control"
                  id="esCloseOperationSequence"
                  rows="2"
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label
                htmlFor="restorationSequence"
                className="col-sm-4 col-form-label"
              >
                Sequence of Restoration (CB & Isolator) By RTAMC
              </label>
              <div className="col-sm-5">
                <textarea
                  type="text"
                  className="form-control"
                  id="restorationSequence"
                  rows="2"
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label
                htmlFor="esOpenOperationSequence"
                className="col-sm-4 col-form-label"
              >
                Sequence for E/S Operation By site (Name of Earth Switch to be
                opened)
              </label>
              <div className="col-sm-5">
                <textarea
                  type="text"
                  className="form-control"
                  id="esOpenOperationSequence"
                  rows="2"
                />
              </div>
            </div>

            <fieldset>
              <div className="form-group row mt-2">
                <div className="col-sm-4">
                  Presence of all following executive to be ensured during
                  shutdown/operation activity.
                </div>
                <div className="col-sm-5">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="presenceOfEmpCheck1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="presenceOfEmpCheck1"
                    >
                      Substation Maintenance In-charge
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="presenceOfEmpCheck1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="presenceOfEmpCheck1"
                    >
                      Station In-charge
                    </label>
                  </div>
                  <div className="col-sm">
                    <label className="form-check-label" htmlFor="alternate">
                      Please mention alternative person (executive) in absence
                      of any one of above.
                    </label>
                    <div className="col-sm">
                      <textarea
                        type="text"
                        className="form-control"
                        id="alternate"
                        rows="2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="form-group row mt-2">
              <label
                htmlFor="additionalSupervision"
                className="col-sm-4 col-form-label"
              >
                Additional POWERGRID supervision
              </label>
              <div className="col-sm-5">
                <textarea
                  type="text"
                  className="form-control"
                  id="additionalSupervision"
                  rows="2"
                />
              </div>
            </div>

            <fieldset>
              <div className="form-group row mt-2">
                <label className="col-sm-9 col-form-label">
                  Following checking to be ensured:
                </label>
              </div>
              <div className="form-group row">
                <label htmlFor="rtamcCheck" className="col-sm-4 col-form-label">
                  RTAMC
                </label>
                <div className="col-sm-5">
                  <textarea
                    type="text"
                    className="form-control"
                    id="rtamcCheck"
                    rows="4"
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label htmlFor="siteCheck" className="col-sm-4 col-form-label">
                  Site
                </label>
                <div className="col-sm-5">
                  <textarea
                    type="text"
                    className="form-control"
                    id="siteCheck"
                    rows="4"
                  />
                </div>
              </div>
            </fieldset>

            <div className="form-group row mt-2">
              <label htmlFor="remarks" className="col-sm-4 col-form-label">
                Remarks
              </label>
              <div className="col-sm-5">
                <textarea
                  type="text"
                  className="form-control"
                  id="remarks"
                  rows="4"
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label htmlFor="otherInfo" className="col-sm-4 col-form-label">
                Any Other Information (If any)
              </label>
              <div className="col-sm-5">
                <textarea
                  type="text"
                  className="form-control"
                  id="otherInfo"
                  rows="4"
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default CreateNew;
