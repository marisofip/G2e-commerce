const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: 'https://3001-roacv-g2ecommerce-0eabx2qpntf.ws-us84.gitpod.io/api',
			products: {},
			carShopping: [],
			mostrarCarShop: false
		},
		actions: {
			loadDataFromProducts: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/products`)
					.then((response) => response.json())
					.then((data) => {
						//console.log("DATA PRODUCTS", data)
						setStore({
							characters: data
						})
					})
					.catch(error => console.log("error", error));
			},
			
			agregarCarShop: id => {
				const store = getStore();
				//setStore({ carShopping: [...store.carshopping, store.characters[id - 1]] });
				setStore(store.carShopping.push(id))},
			eliminarCarShop: index => {
				const store = getStore();

				const eliminar = store.carShopping.filter((el, i) => {
					return index !== i;
				});
				console.log(eliminar);
				setStore({ carShopping: eliminar });
				console.log(store.carShopping);
			},
			setMostrarCarShop: e => {
				const store = getStore();
				setStore({ mostrarCarShop: !store.mostrarCarShop });
			}
			
		}
	};
}

export default getState;
