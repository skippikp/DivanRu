import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MainPage from '../pages/MainPage';
import Onboarding, { Step } from '../containers/Onboarding/Onboarding';

//eslint-disable-next-line
const waitForPosition = () => act(async () => {});

const tooltip = {
  title: 'Создай свой дизайн',
  content: 'Для этой модели доступно еще 62 варианта обивки и 5 опций',
  actionText: 'Понял принял',
};

const tooltip2 = {
  title: 'Все и сразу!',
  content: 'Купи уже готовый диван и не парься ни с какими конструкторами',
  actionText: 'Спасибо пожалуйста',
};

const steps: Step[] = [
  { tooltip, position: 'left', target: '#test' },
  { tooltip: tooltip2, position: 'right', target: '#test2' },
];

describe('Tooltips', () => {

  test('render correct tooltip on each step', async () => {
    
    render(
      <div>
        <Onboarding id="test" start={true} steps={steps} />
        <MainPage />
      </div>
    );
  
    //added to prevent Floater lib warnings
    await waitForPosition();

    const overlay = await screen.findByTestId('overlay');
    
    //first render
    expect(await screen.findByText(tooltip.content)).toBeInTheDocument();
    expect(screen.queryByText(tooltip2.content)).not.toBeInTheDocument();
    expect(overlay).toBeInTheDocument();
  
    fireEvent.click(await screen.findByText(tooltip.actionText));
  
    await waitForPosition();
  
    expect(await screen.findByText(tooltip2.content)).toBeInTheDocument();
    expect(screen.queryByText(tooltip.content)).not.toBeInTheDocument();
    expect(overlay).toBeInTheDocument();
  
    fireEvent.click(await screen.findByText(tooltip2.actionText));
  
    //after last tooltip were confirmed
    expect(screen.queryByText(tooltip2.content)).not.toBeInTheDocument();
    expect(screen.queryByText(tooltip.content)).not.toBeInTheDocument();
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
  });
});