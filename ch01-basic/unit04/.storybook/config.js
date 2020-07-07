import { configure } from '@storybook/react';

function loadStories() {
  // 여기에 스토리파일을 추가 할 수 있다.
  require('../src/stories/InputStory');
}

configure(loadStories, module);
