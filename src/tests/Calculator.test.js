import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })


// My tests


  it('should add 1 to 4 to get 5', () => {
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const addButton = container.find('#operator_add');
    const equals = container.find('#operator-equals');

    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    addButton.simulate('click');
    button1.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const subtractButton = container.find('#operator-subtract');
    const equals = container.find('#operator-equals');

    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtractButton.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply');
    const equals = container.find('#operator-equals');

    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiplyButton.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divideButton = container.find('#operator-divide');
    const equals = container.find('#operator-equals');

    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should show 3 numbers on the screen', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const equals = container.find('#operator-equals');

    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('217');
  })

  it('should multiply 3 by 5 and then add 4 to get 19', () => {
    const button3 = container.find('#number3');
    const button4 = container.find('#number4');
    const addButton = container.find('#operator_add');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply');
    const equals = container.find('#operator-equals');

    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiplyButton.simulate('click');
    button5.simulate('click');
    addButton.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('19');
  })


  it('should clear the running total without affecting the final calculation', () => {
    const button5 = container.find('#number5');
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button7 = container.find('#number7');
    const addButton = container.find('#operator_add');
    const equals = container.find('#operator-equals');
    const clear = container.find('#clear');

    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    button5.simulate('click');
    addButton.simulate('click');
    button7.simulate('click');
    clear.simulate('click')
    addButton.simulate('click')
    button2.simulate('click')
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('17');
  })
  
})
