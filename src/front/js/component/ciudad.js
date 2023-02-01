import React from "react";

export const City = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="form-floating col-md-4">
                    <select className="form-select" id="ciudad" aria-label="Seleccione ciudad">
                        <option value="1">Santiago</option>
                    </select>
                    <label htmlFor="ciudad">Seleccione ciudad</label>
                </div>
            </div>
        </div>
    )

};