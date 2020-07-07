import React from 'react';
import { storiesOf } from '@storybook/react'; // 스토리북 모듈 가져오기
// addon 추가
import { action } from '@storybook/addon-actions';
import InputWithStyledComponent from '../components/InputWithStyledComponent'; // 추가할 컴포넌트 가져오기

storiesOf('StyledComponentStory', module).addWithJSX('styled-component', () => (
  <InputWithStyledComponent
    id='styled-component'
    value='styled-component'
    name='styled-component'
    label='styled-component 적용!'
    type='text'
    errorMessage='꼭 입력하셔야 된다구요오~'
    onChange={action('액쑝!')}
  />
));
