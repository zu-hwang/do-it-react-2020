import { configure } from '@storybook/react';
// ...Story.js 자동 등록을 위한 모듈
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
// addon-jsx 모듈 임포트
import { setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

function loadStories() {
  // 여기에 스토리파일을 추가 할 수 있다.
  // + 하나씩 추가하는 법
  // require('../src/stories/InputStory');

  // + 자동 추가하는 법
  const context = require.context(
    '../src/stories',
    true,
    /Story\.js$/ || /Story\.jsx$/
  );
  context.keys().forEach((srcFile) => {
    // console.log('srcFile', srcFile);
    // console.log('context(srcFile)', context(srcFile));
    interopRequireDefault(context(srcFile));
  });
}

setAddon(JSXAddon);
configure(loadStories, module);
