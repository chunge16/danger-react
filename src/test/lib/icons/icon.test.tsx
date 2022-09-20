import {vi, describe, expect, test} from 'vitest';
import {render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import {Icon} from '@/lib/icons';

describe("Icon test", () => {

  test('Icon should render', async () => {
    const { unmount, container } = await render(<Icon data-testid={'test-icon'} name={'iconauto'}/>);
    const svgDom = container.querySelector('.svg-icon');

    expect(container).toMatchSnapshot();

    expect(container).not.toBeEmptyDOMElement();
    expect(svgDom).toHaveClass('svg-icon');

    unmount();
    expect(container).toBeEmptyDOMElement();
    expect(container.innerHTML).toBeFalsy();
  })

  // test icon  props spin
  test('Icon test props spin', async () => {
    const {container} = await render(<Icon spin data-testid={'test-icon'} name={'iconauto'}/>);
    const actionDom = container.querySelector('.action');

    expect(actionDom).not.toBeEmptyDOMElement();
    expect(actionDom).toBeInTheDocument();
    expect(actionDom?.classList?.contains('icon-spin-animation')).toEqual(true)

  })

  // test icon  props rotate
  test('Icon test props rotate', async () => {
    const {container} = await render(<Icon name={'iconauto'} rotate={90} />);
    const svgDom = container.querySelector('.svg-icon');

    expect(svgDom).toHaveStyle({
      transform: 'rotate(90deg)'
    })
  })

  test('Icon test click', async () => {
    const init = 'test click'
    const fn = vi.fn(() => init);

    const { container } = await render(<Icon onClick={fn} data-testid={'test-icon'} name={'iconauto'}/>);
    const svgDom = container.querySelector('.svg-icon');

    if (!!svgDom) fireEvent.click(svgDom);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveReturnedWith(init);

  })

})
