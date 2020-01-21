import { COMPONENT_TYPE } from '@/renderer/constants';
import controlPanelPicture from './components/control-panel/Picture.vue';
import controlPanelChoiseQuestion from './components/control-panel/ChoiseQuestion.vue';
import controlPanelTextarea from './components/control-panel/Textarea.vue';
import controlPanelButton from './components/control-panel/Button.vue';
import controlPanelText from './components/control-panel/Text.vue';
import controlPanelSwiper from './components/control-panel/Swiper.vue';

export default {
  [COMPONENT_TYPE.picture]: {
    label: '图片',
    controlPanel: controlPanelPicture,
    iconname: 'image',
  },
  [COMPONENT_TYPE.choiseQuestion]: {
    label: '选择题',
    controlPanel: controlPanelChoiseQuestion,
    iconname: 'check-square',
  },
  [COMPONENT_TYPE.textarea]: {
    label: '输入框',
    controlPanel: controlPanelTextarea,
    iconname: 'edit-square',
  },
  [COMPONENT_TYPE.button]: {
    label: '按钮',
    controlPanel: controlPanelButton,
    iconname: 'select',
  },
  [COMPONENT_TYPE.text]: {
    label: '文字',
    controlPanel: controlPanelText,
    iconname: 'font-colors',
  },
  [COMPONENT_TYPE.swiper]: {
    label: '轮播图',
    controlPanel: controlPanelSwiper,
    iconname: 'interation',
  },
};
