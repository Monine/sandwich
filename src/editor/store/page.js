import createComponent from '@/renderer/component-factory/create-component';
import {
  ADD_COMPONENT,
  SET_ACTIVE_COMPONENT_ID,
  UPDATE_ACTIVE_COMPONENT,
} from './mutation-types';

export default {
  state: {
    components: [],
    activeComponentId: '',
  },

  getters: {
    activeComponent({ components, activeComponentId }) {
      if (activeComponentId) {
        return components.find(c => c.id === activeComponentId);
      }
      return null;
    },
  },

  mutations: {
    [ADD_COMPONENT](state, comp) {
      state.components.push(comp);
    },

    [SET_ACTIVE_COMPONENT_ID](state, id) {
      state.activeComponentId = id;
    },

    [UPDATE_ACTIVE_COMPONENT](state, payload) {
      const activeComp = state.components.find(
        c => c.id === state.activeComponentId
      );
      Object.assign(activeComp, JSON.parse(JSON.stringify(payload)));
    },
  },

  actions: {
    addComponent({ commit }, { type, attrs = {} }) {
      const comp = createComponent(type, {
        ...JSON.parse(JSON.stringify(attrs)),
      });
      commit(ADD_COMPONENT, comp);
      commit(SET_ACTIVE_COMPONENT_ID, comp.id);
    },
  },
};
