import firebase from '~/plugins/firebase'

export const state = () => ({
  user: {
    uid: '',
    email: '',
    login: false,
  },
})

export const getters = {
  user: state => {
    return state.user
  }
}

export const actions = {
  login({ dispatch }, payload) {
    console.log('login action');
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        console.log('ログイン成功！');
        dispatch('checkLogin')
      })
      .catch((error) => {
        alert(error);
      })
  },
  loginGoogle({ dispatch }, payload) {
    console.log('loginGoogle action');
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        console.log('googleログイン成功！');
        dispatch('checkLogin');
      })
      .catch((error) => {
        alert(error);
      });
  },
  checkLogin({ commit }) {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        console.log(user);
        commit('login', { uid: user.uid, email: user.email });
      }
    })
  },
  logout({ commit }) {
    firebase.auth().signOut()
      .then(() => {
        console.log("ログアウトしました");
        commit('logout');
      })
      .catch((error) => {
        console.log(`ログアウト時にエラーが発生しました (${error})`);
      });
  }
}

export const mutations = {
  login(state, payload) {
    state.user.uid = payload.uid;
    state.user.email = payload.email;
    state.user.login = true;
  },
  logout(state) {
    state.user.uid = '';
    state.user.email = '';
    state.user.login = false;
  }
}