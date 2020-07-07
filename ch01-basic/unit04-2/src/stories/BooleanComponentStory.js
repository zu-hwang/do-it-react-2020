import React from 'react';
import { storiesOf } from '@storybook/react'; // 스토리북 모듈 가져오기
import Input from '../components/Input'; // 추가할 컴포넌트 가져오기

storiesOf('BooleanCompo', module)
  .add('기본인풋', () => <Input value='기본인풋' />)
  .add('블랙모드', () => <Input value='블랙모드' color='dark' />);
