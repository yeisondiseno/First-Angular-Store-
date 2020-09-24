import { DeletedRepeatProductPipe } from './repeated-product.pipe';

describe('RepeatProductPipe', () => {
  it('create an instance', () => {
    const pipe = new DeletedRepeatProductPipe();
    expect(pipe).toBeTruthy();
  });
});
