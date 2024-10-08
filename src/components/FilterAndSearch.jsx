function Type() {
  return (
    <div className="d-flex justify-content-center">
      <label htmlFor="type" className="type">
        <span className="fs-6 opacity-50">Type</span>
        <select className="form-select border-0 cursor">
          <option className="fs-6 fw-light text-primary bg-black">
            Used Car
          </option>
          <option className="fs-6 fw-light text-primary bg-black">
            New Car
          </option>
        </select>
      </label>
      <hr className="d-lg-none d-flex" />
      <div className="vr d-none d-lg-flex" />
    </div>
  )
}
function Make() {
  return (
    <div className="d-flex justify-content-center">
      <label htmlFor="type" className="make">
        <span className="fs-6 opacity-50">Make</span>
        <select className="form-select border-0 cursor">
          <option className="fs-6 fw-light text-primary bg-black">
            Initial
          </option>
          <option className="fs-6 fw-light text-primary bg-black">one</option>
          <option className="fs-6 fw-light text-primary bg-black">two</option>
          <option className="fs-6 fw-light text-primary bg-black">three</option>
        </select>
      </label>
      <hr className="d-lg-none d-flex" />
      <div className="vr d-none d-lg-flex" />
    </div>
  )
}
function Year() {
  return (
    <div className="d-flex justify-content-center align-items-center gap-3">
      <label htmlFor="type">
        <select className="form-select border-0 opacity-75 mt-3 cursor">
          <option className="fs-6 fw-light text-primary bg-black">Year</option>
          <option className="fs-6 fw-light text-primary bg-black">2004</option>
          <option className="fs-6 fw-light text-primary bg-black">2010</option>
          <option className="fs-6 fw-light text-primary bg-black">2016</option>
          <option className="fs-6 fw-light text-primary bg-black">2020</option>
          <option className="fs-6 fw-light text-primary bg-black">2024</option>
        </select>
      </label>
      <hr className="d-lg-none d-flex" />
      <div className="vr d-none d-lg-flex" />
    </div>
  )
}
function Model() {
  return (
    <div className="d-flex justify-content-center align-items-center gap-3">
      <label htmlFor="type">
        <select className="form-select border-0 mt-3 opacity-75 cursor">
          <option className="fs-6 fw-light text-primary bg-black">Model</option>
          <option className="fs-6 fw-light text-primary bg-black">
            BMW x3
          </option>
          <option className="fs-6 fw-light text-primary bg-black">
            BMW x7
          </option>
          <option className="fs-6 fw-light text-primary bg-black">
            BMW ix
          </option>
          <option className="fs-6 fw-light text-primary bg-black">
            BMW x6
          </option>
        </select>
      </label>
      <hr className="d-lg-none d-flex" />
      <div className="vr d-none d-lg-flex" />
    </div>
  )
}
function Price() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <label htmlFor="type" className="opacity-75">
        <select className="form-select border-0 opacity-75 mt-3 cursor">
          <option className="fs-6 fw-light text-primary bg-black">Price</option>
          <option className="fs-6 fw-light text-primary bg-black">
            $ 35000
          </option>
          <option className="fs-6 fw-light text-primary bg-black">
            $ 45000
          </option>
          <option className="fs-6 fw-light text-primary bg-black">
            $ 55000
          </option>
          <option className="fs-6 fw-light text-primary bg-black">
            $ 68000
          </option>
          <option className="fs-6 fw-light text-primary bg-black">
            $ 90000
          </option>
        </select>
      </label>
      <hr className="d-lg-none d-flex" />
    </div>
  )
}

function FilterAndSearch() {
  return (
    <div>
      <h1 className="text-center">Which vehicles you are looking for? </h1>
      <div className="rounded-3 d-flex flex-lg-row flex-column justify-content-center align-item-center gap-lg-5 gap-4 shadow-lg rounded-4 w-75 mx-auto p-2">
        <Type />
        <Make />
        <Year />
        <Model />
        <Price />
        <button
          className="btn text-white mt-2 rounded-3 searchBtn"
          type="button"
        >
          <i className="bi bi-search" />
          <span className=" ms-1"> Search</span>
        </button>
      </div>
    </div>
  )
}

export default FilterAndSearch
