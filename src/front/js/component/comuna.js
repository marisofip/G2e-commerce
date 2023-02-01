import React from "react";

export const Comuna = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="form-floating col-md-4">
                        <select className="form-select" id="ciudad" aria-label="Seleccione ciudad">
                            <option value="1">Santiago</option>
                            <option value="2">Las Condes</option>
                            <option value="3">Providencia</option>
                        </select>
                        <label htmlFor="ciudad">Seleccione Comuna</label>
                    </div>
                </div>
            </div>
        </div>
    )

};