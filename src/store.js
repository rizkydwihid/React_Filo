import createStore from "unistore";
import axios from "axios";
import persistStore from 'unissist';
import localStorageAdapter from 'unissist/integrations/localStorageAdapter';

// const baseUrl = "http://18.136.233.150:5000";
const baseUrl = "http://0.0.0.0:5000";
// const urlSearchCouns = baseUrl + "/public/counselor?city=";
const initialState = {
  is_login: false,
  token: "",
  statusUser: "",

  username: "",
  password: "",

  idUser: "",
  idCounselor: "",

  fullname: "",
  gender: "",

  email: "",
  phone: "",

  jalan: "",
  city: "",
  district: "",

  lisensi: "",
  about: "",
  avatar: "",
  emergencyEmail: "",
  listSearch: [],
  usernametele: "",

  // idAppointment: "",
};

export const store = createStore(initialState);
const adapter = localStorageAdapter()
export const actions = store => ({
  setField: (state, event) => {
      return { [event.target.name]: event.target.value };
  },

  // logout
  postLogout: state => {
    return { is_login: false };
  },

  setGender: (state, event) => {
    return { gender: event.target.value };
  },

  setAvatar: (state, gambar) => {
    store.setState({ avatar: gambar })
  },
  // login admin
  postLoginCouns: async state => {
    const data = { username: state.username, password: state.password };
    await axios
      .post("http://0.0.0.0:5000/login/counselor", data, {
        headers: { 
          Authorization: "Bearer " + store.getState().token ,
          'Content-Type':'application/json',
        }
      })
      .then(async (response) => {
        // console.log("post loginnnnnn!!!!", response.data);
        if (response.status === 200) {
          store.setState({
            is_login: true,
            token: response.data.token,
            statusUser: response.data.statusUser
          });
        }
        const reqGet = {
          method: 'get',
          url: baseUrl + '/counselor',
          headers: { Authorization: "Bearer " + store.getState().token }
        }
        await axios(reqGet)
          .then(function (response) {
              if (response.status === 200) {
                  store.setState({
                      fullname: response.data.user.fullName,
                      phone: response.data.user.contact,
                      gender: response.data.user.gender,
                      email: response.data.user.email,
                      lisensi: response.data.user.lisensi,
                      jalan: response.data.user.address,
                      district: response.data.user.district,
                      city: response.data.user.city,
                      about: response.data.user.about,
                      avatar: response.data.user.avatar,
                  })
                  if (response.data.user.about === null) {
                    store.setState({ about: "", })
                  }
              }
          })
          .catch(function (error) {
              console.log(error);
      })
    })
  },
  // login user
  postLoginUser: async (state) => {
    const data = {
        username: state.username,
        password: state.password,
    };
    const reqToken = {
        method: 'post',
        url: baseUrl + '/login/user',
        data: data,
        headers: { "Content-Type": "application/json" }
    }
    await axios(reqToken)
        .then(async (response) => {
            if (response.status == 200) {
                store.setState({
                    is_login: true,
                    token: response.data.token,
                    statusUser: response.data.statusUser
                });
            }
            const reqGet = {
                method: 'get',
                url: baseUrl + '/user',
                headers: { Authorization: "Bearer " + store.getState().token }
            }
            await axios(reqGet)
                .then(function (response) {
                    if (response.status == 200) {
                        store.setState({
                            fullname: response.data.user.fullName,
                            phone: response.data.user.contact,
                            gender: response.data.user.gender,
                            email: response.data.user.email,
                            jalan: response.data.user.address,
                            emergencyEmail: response.data.user.emergencyEmail,
                            avatar: response.data.user.avatar,
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
        .catch(function (error) {
            console.log(error);
        });
  },

  // register counselor
  postRegis: async state => {
    const data = {
      username: state.username,
      fullName: state.fullname,
      password: state.password,
      email: state.email,
      address: state.jalan,
      district: state.district,
      city: state.city,
      lisensi: state.lisensi,
      gender: state.gender,
      contact: state.phone,
      avatar: store.getState().avatar
    };
    await axios
      .post("http://0.0.0.0:5000/counselor", data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        // console.log("post loginnnnnn!!!!", response.data);
        if (response.status === 200) {
          store.setState({
            is_login: true,
            username: response.data.username,
            email: response.data.email
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // register counselor
  postRegisUser: async state => {
    const data = {
      username: state.username,
      fullName: state.fullname,
      password: state.password,
      email: state.email,
      usernameTele : state.userTele,
      address: state.jalan,
      gender: state.gender,
      contact: state.phone,
      emergencyEmail: state.emergencyEmail,
      avatar: store.getState().avatar
    };
    // console.log("tes", data)
    await axios
      .post("http://0.0.0.0:5000/user", data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        // console.log("post loginnnnnn!!!!", response.data);
        if (response.status === 200) {
          store.setState({
            is_login: true,
            username: response.data.username,
            email: response.data.email
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // edit profile counselor
  editCounselor: async state => {
    const data_edit = {
      username: state.username,
      fullName: state.fullname,
      password: state.password,
      email: state.email,
      address: state.jalan,
      district: state.district,
      city: state.city,
      lisensi: state.lisensi,
      gender: state.gender,
      contact: state.phone,
      avatar: store.getState().avatar,
      about: state.about
    };
    await axios
      .put("http://0.0.0.0:5000/counselor", data_edit, {
        headers: {
          Authorization: 'Bearer ' + store.getState().token,
          'Content-Type': 'application/json',
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // edit profile user
  editUser: async state => {
    const data_edit = {
      username: state.username,
      fullName: state.fullname,
      password: state.password,
      email: state.email,
      address: state.jalan,
      gender: state.gender,
      contact: state.phone,
      avatar: store.getState().avatar,
    };
    await axios
      .put("http://0.0.0.0:5000/user", data_edit, {
        headers: {
          Authorization: 'Bearer ' + store.getState().token,
          'Content-Type': 'application/json',
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // batalkan janji
  cancelAppointmentUser: async (state, idAppointment) => {
    console.log("ini id yang dari store", idAppointment)
    const data_edit = {
      id: idAppointment
    };
    await axios
      .put("http://0.0.0.0:5000/appointment", data_edit, {
        headers: {
          Authorization: 'Bearer ' + store.getState().token,
          'Content-Type': 'application/json',
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
})
persistStore(store, adapter)