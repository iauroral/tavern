import { AuthorityPipe } from './authority.pipe';

describe('AuthorityPipe', () => {
  it('create an instance', () => {
    const pipe = new AuthorityPipe();
    expect(pipe).toBeTruthy();
  });
});
