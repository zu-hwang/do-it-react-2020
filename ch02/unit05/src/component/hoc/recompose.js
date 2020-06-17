//!  비효율 적인 임포팅 방식
// import { branch, withState } from 'recompose';

//! 효율적인 임포팅 방식
// 조건식에 따라 다른 hoc컴포넌트를 출력해야 하는 경우 사용
import branch from 'recompose/branch';
import withState from 'recompose/withState';

/**
 *
 * branch(
 *   (condition: (props) => boolean),
 *   (left: HigherOrderComponent)
 * )(WrappedCompo);
 *
 */

/**
 *
 * withState(
 * stateName : string,
 * stateUpdater : string,
 * initialState : any,
 * )(WrappedComponent)
 *
 */
