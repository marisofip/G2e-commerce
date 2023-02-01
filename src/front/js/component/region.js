import React from "react";

export const Region = () => {
    return (
        <div className="container w-50 justify-content-center mt-5  mb-5">
            <form className="row g-3">
                <div className="form-floating col-md-4">
                    <select className="form-select" id="ciudad" aria-label="Seleccione ciudad">
                        <option value="1">Metropolitana de Santiago</option>
                    </select>
                    <label htmlFor="ciudad">Seleccione Region</label>
                </div>
            </form>
        </div>
    )

};