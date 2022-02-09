import React from 'react';
import makeWordsBold from './makeBold'

test.skip('test makeWordsBold', () =>{
    const input = 'dog, *cat, pig, *bird'
    const output = makeWordsBold(input)
    expect(output).toBe([
        <React.Fragment> dog,</React.Fragment>,
        <strong> *cat,</strong>,
        <React.Fragment> pig,</React.Fragment>,
        <strong> *bird</strong>
    ])
}

)