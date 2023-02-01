const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl:
        process.env.BACKEND_URL + "/api/",
      products: {},
      categorias: {},
      productDetail: {},
      productCategoria: {},
      editCategoria: {},
      carShopping: [],
      mostrarCarShop: false,
      isLogged: false,
      user: null,
    },
    actions:
    {
      loadDataFromProducts: async () => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/products"
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
          const resp = await fetch(process.env.BACKEND_URL + "/api/categorias"
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
            process.env.BACKEND_URL + "/api/products/" +
            id
          );
          const data = await resp.json();
          setStore({ productDetail: data });
        } catch (e) {
          console.error(e);
        }
      },
            getEditCategoria: async (id) => {
        try {
          console.log("id: " + id);
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/detail-categoria/" +
            id
          );
          const data = await resp.json();
          setStore({ editCategoria: data });
          console.log(data)
        } catch (e) {
          console.error(e);
        }
      },
      getDetailCategory: async (id) => {
        try {
          //console.log("id: " + id);
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/products/categoria/" +
            id
          );
          const data = await resp.json();
          setStore({ productCategoria: data });
        } catch (e) {
          console.error(e);
        }
      },

      agregarCarShop: (id, nombre, precio, cantidad, img) => {
        const store = getStore();
        let index;
        if(store.carShopping.find( arrobj => arrobj.id === id )) {
          console.log(`${id} ya existe en el array`);
          console.log(parseFloat(store.carShopping.find( arrobj => arrobj.id === id ).cantidad)+parseFloat(cantidad))
          cantidad=parseFloat(store.carShopping.find( arrobj => arrobj.id === id ).cantidad)+parseFloat(cantidad)
          index=store.carShopping.findIndex(obj => obj.id === id)
          const eliminar = store.carShopping.filter((el, i) => {
            return index !== i;
          });
          setStore({ carShopping: eliminar });          
        } 
        setStore(store.carShopping.push({ id, nombre, precio, cantidad, img }));
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
      getToken: () => {
        const tokenLocal = localStorage.getItem("token");
        const userLocal = JSON.parse(localStorage.getItem("user"));
        setStore({
          user: {
            token: tokenLocal,
            user: userLocal
          }
        });
        console.log("->", tokenLocal);
        console.log("->", JSON.stringify(userLocal));
      },
      setLogin: async (email, password) => {
        const response = await fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          body: JSON.stringify(email, password),
          headers: { "Content-type": "application/json" }
        });
        if (response.ok) {
          const json = await response.json();
          setStore({ user: json, isLogged: true });
          if (typeof Storage !== undefined) {
            localStorage.setItem("token", json.token);
            localStorage.setItem("token", JSON.stringify(json.user));
          }
          return response;

        } else {
          await setStore({ user: null, isLogged: false })
        }
      },

      setLogout: async () => {
        await setStore({ user: null, isLogged: false })

        return true
      },
      setRegister: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/registro_usuario", {
          method: "POST",
          body: JSON.stringify(request),
          headers: { "Content-type": "aplications/json" }

        });
        if (response.ok) {
          const json = await response.json();
          return true;
        } else {
          return false;
        }
      }
    },
  };
};

export default getState;
