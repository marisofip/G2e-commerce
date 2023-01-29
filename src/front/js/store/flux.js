const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl:
        "https://3001-roacv-g2ecommerce-j0t49ea2y6y.ws-us84.gitpod.io/api/",
      products: {},
	  categorias: {},
      productDetail: {},
      carShopping: [],
      mostrarCarShop: false,
    },
    actions: {
      loadDataFromProducts: async () => {
        try {
          const resp = await fetch(
            "https://3001-roacv-g2ecommerce-j0t49ea2y6y.ws-us84.gitpod.io/api/products"
          );
          const data = await resp.json();

          //console.log("DATA PRODUCTS", data)
          setStore({
            products: data,
          });
          return data;
        } catch (error) {
          console.log("error", error);
        }
      },
	  loadDataFromCategorias: async () => {
        try {
          const resp = await fetch(
            "https://3001-roacv-g2ecommerce-j0t49ea2y6y.ws-us84.gitpod.io/api/categorias"
          );
          const data = await resp.json();

          //console.log("DATA PRODUCTS", data)
          setStore({
            categorias: data,
          });
          return data;
        } catch (error) {
          console.log("error", error);
        }
      },

      getDetailProduct: async (id) => {
        try {
          console.log("id: " + id);
          const resp = await fetch(
            "https://3001-roacv-g2ecommerce-j0t49ea2y6y.ws-us84.gitpod.io/api/products/" +
              id
          );
          const data = await resp.json();
          setStore({ productDetail: data });
        } catch (e) {
          console.error(e);
        }
      },

      agregarCarShop: (id) => {
        const store = getStore();
        //setStore({ carShopping: [...store.carshopping, store.characters[id - 1]] });
        setStore(store.carShopping.push(id));
      },
      eliminarCarShop: (index) => {
        const store = getStore();

        const eliminar = store.carShopping.filter((el, i) => {
          return index !== i;
        });
        console.log(eliminar);
        setStore({ carShopping: eliminar });
        console.log(store.carShopping);
      },
      setMostrarCarShop: (e) => {
        const store = getStore();
        setStore({ mostrarCarShop: !store.mostrarCarShop });
      },
    },
  };
};

export default getState;
