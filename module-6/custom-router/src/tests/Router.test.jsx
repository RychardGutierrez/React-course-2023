import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Router from '../router-tools/Router';
import { getCurrentPath } from '../router-tools/utils.js';
import Route from '../router-tools/Route.jsx';
import { Link } from '../router-tools/Link.jsx';

vi.mock('../router-tools/utils.js', () => ({
  getCurrentPath: vi.fn(),
}));

describe('Router', () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('Should render without problems', () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it('Should render 404 if not routes match', () => {
    render(<Router routes={[]} defaulComponent={() => <h1>404</h1>} />);
    expect(screen.getByText('404')).toBeTruthy();
  });

  it('Should render the component if the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about');

    const routes = [
      { path: '/', Component: () => <h1>Home</h1> },
      { path: '/about', Component: () => <h1>About</h1> },
    ];
    render(<Router routes={routes} />);

    expect(screen.getByText('About')).toBeTruthy();
  });

  it('Should navigate using Links', () => {
    getCurrentPath.mockReturnValueOnce('/');

    render(
      <Router>
        <Route
          path="/"
          Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to="/about">Go to About</Link>
              </>
            );
          }}
        />
        <Route path="/about" Component={() => <h1>About</h1>} />
      </Router>
    );

    //Click
    const button = screen.getByText(/Go to About/);
    fireEvent.click(button);

    expect(screen.getByText('About')).toBeTruthy();
  });
});
