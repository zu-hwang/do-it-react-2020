import React from 'react';
import { storiesOf } from '@storybook/react'; // 스토리북 모듈 가져오기

// addon 추가
import { action } from '@storybook/addon-actions';

// 컴포넌트 추가
import Input from '../components/Input'; // 추가할 컴포넌트 가져오기

/**
 * !여기에 등록되는 것들은 스토리북 좌측메뉴 목록에 나타난다
 *
 * + storiesOf의 스토리이름은 대매뉴
 * + add의 스토리이름은 하위 매뉴
 */

// storiesOf('스토리북에 표시할 스토리이름', module).add('스토리북에 표시할 메뉴이름',()=><해당 컴포넌트 />>)

// + Input
//    + 기본인풋
//    + 블랙모드
// + Button
//    + 기본버튼
//    + 블랙모드

storiesOf('Input', module)
  .addWithJSX('기본인풋', () => <Input value='기본인풋' />)
  .addWithJSX('블랙모드', () => <Input value='블랙모드' color='dark' />)
  .addWithJSX('onChange예제', () => (
    <Input
      onChange={action('이벤트 반응!', (e) => console.log(e.target.value))}
    />
  ));
