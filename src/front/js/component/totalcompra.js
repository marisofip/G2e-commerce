import React , { useContext , useState, useEffect} from "react";
import { Context } from "../store/appContext";
import { NumericFormat } from 'react-number-format';


export const TotalCompra = () => {
    const { store, actions } = useContext(Context);
    const [vSumTotal, setVSumTotal] = useState(0);

    useEffect(() => {
        const sumar = () => {
          const sumar = store.carShopping.map((carro, index) => (parseFloat(carro.precio)*parseFloat(carro.cantidad)))
            .reduce((previous, current) => {
              return previous + current;
            }, 0);
          setVSumTotal(sumar);
        };
        sumar();
      });


    return (
            <div className="">
                    <h5 className="card-title mx-auto">Total de la Compra</h5>
                    <div className="border-top border-bottom border-2 mx-auto my-3" style={{width:'400px'}}>
                        <div className="text-end my-3 me-2">
                            <NumericFormat value={vSumTotal} prefix="Sub-total $" thousandSeparator="." decimalSeparator="," displayType="text"   />
                        </div>
                        <p className="text-end my-3 me-2">Despacho    $0</p>
                    </div>
                    <div className="my-3" style={{width:'393px'}}>
                        <NumericFormat value={vSumTotal} prefix="Total $" thousandSeparator="." decimalSeparator="," displayType="text" renderText={(value) => <h6 className="text-end">{value}</h6>}/>
                    </div>
            </div>
    );
}