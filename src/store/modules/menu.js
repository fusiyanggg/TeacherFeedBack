import grades from '../../api/grades'

const state = {
  grades: [],
};

const getters = {
  gradesList(state, getters, rootState) {
    return state.grades
  }
};

const actions = {
  async initGradesList({commit}) {
    let result = await grades.loadData();
    commit('init', result.data.data)
  },
  async createGrade({commit}, order) {
    let result = await grades.createGrade(order);
    commit('addNewGrades', {order, result});
    return result
  }
};

const mutations = {
  init(state, grades) {
    state.grades = grades
  },
  addNewGrades(state, {order, result}) {
    let exits = state.grades.find(v => v.grade_name === order.grade_name);
    if (exits) {
      exits.lessons.find(v => v.lesson_name === order.lesson_name)
        ? console.log(exits)
        : exits.lessons.push({lesson_name: order.lesson_name})
    } else {
      let insertData = {grade_name: order.grade_name, lessons: [{lesson_name: order.lesson_name}]};
      state.grades.push(insertData)
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
