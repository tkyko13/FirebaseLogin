import firebase from '~/plugins/firebase'

// data保管庫
export const state = () => ({
  user: {
    uid: '',
    email: '',
    login: false,
  },
})

// stateの情報を取得
export const getters = {
  user: state => {
    return state.user;
  }
}

// storeの上書き以外の処理や非同期通信
export const actions = {
  login({ dispatch }, payload) {
    // メールとパスワードでログイン
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
  loginGoogle({ dispatch }) {
    // Googleアカウントでログイン
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
    // ログインしているかどうかのチェック　ログインしていたらデータ追加
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        console.log(user);
        commit('login', { uid: user.uid, email: user.email });
      }
    })
  },
  logout({ commit }) {
    // ログアウト
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

// stateの上書き(代入)
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