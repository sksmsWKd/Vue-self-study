import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [{
        userId: 'hoza123',
        password: '123',
        name: 'Chambird',
        address: 'Seoul',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Tree_Sparrow_August_2007_Osaka_Japan.jpg/250px-Tree_Sparrow_August_2007_Osaka_Japan.jpg'
      },
      {
        userId: 'max123',
        password: '456',
        name: 'Rabbit',
        address: 'Berlin',
        src: 'http://idb.imarket.co.kr/con_img/cont/100000017842.jpg'
      },
      {
        userId: 'lego123',
        password: '789',
        name: 'Adel',
        address: 'Busan',
        src: 'https://dcimg5.dcinside.com/dccon.php?no=62b5df2be09d3ca567b1c5bc12d46b394aa3b1058c6e4d0ca41648b65eef256eb529f89c193fd5e8e3df822b6167ba5b51963ebc70deabac5bd80dba5e9c07d7d83bce5191af8c6c'
      }
    ]
  },
  getters: { // vuex의 computed - > state를 함수에알려줘야함
    allUsersCount: function (state) {
      return state.allUsers.length;
    },
    countOfSeoul: state => {
      let count = 0
      state.allUsers.forEach(user => {
        if (user.address === 'Seoul') count++
      })
      return count
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100);
    }
  },
  mutations: {

  },
  actions: {

  }
})