import React from "react";

export default function SearchEngine() {
  return (
    <form id="search-form" className="mb-3">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter City..."
            className="form-control"
            id="searchEngine"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Let's See"
            id="button"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
}
