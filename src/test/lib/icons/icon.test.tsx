import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Icon from '@/lib/icons';

describe("Icon test", () => {

  test('Icon should show iconauto', () => {
    render(<Icon data-testid={'test-icon'} name={'iconauto'}/>);

    let iconDom = screen.queryByTestId('test-icon');
    let className = iconDom?.getAttribute('class');
    expect(iconDom).toBeDefined();
    expect(className).toEqual('svg-icon')
  })

  // class 存在 icon-spin-animation 说明 spin 动画成功
  test('Icon test props spin', async () => {
    const {container} = await render(<Icon spin data-testid={'test-icon'} name={'iconauto'}/>);
    const actionDom = container.querySelector('.action');

    expect(actionDom).not.toBeEmptyDOMElement();
    expect(actionDom).toBeInTheDocument();
    expect(actionDom?.classList?.contains('icon-spin-animation')).toEqual(true)

  })

})
