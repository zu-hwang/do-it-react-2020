import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../components/Input';

// storiesOf('스토리북에 표시할 스토리이름', module).add('스토리북에 표시할 메뉴이름',()=><해당 컴포넌트 />>)
storiesOf('Input', module).add('기본설정', () => <Input />);
