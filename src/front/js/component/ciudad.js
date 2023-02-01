import React from React;

export const City = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="form-floating col-md-4">
                        <select className="form-select" id="ciudad" aria-label="Seleccione ciudad">
                            <option value="1">Santiago</option>
                            <option value="2">Viña del Mar</option>
                            <option value="3">La Serena</option>
                        </select>
                        <label htmlFor="ciudad">Seleccione ciudad</label>
                    </div>
                </div>
            </div>
        </div>
    )

};