import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');
beforeEach(() => jest.resetAllMocks());

test('getLevel', () => {
  fetchData.mockReturnValue({});
  const resp = getLevel(1);
  expect(fetchData).toBeCalledTimes(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
  expect(resp).toEqual('Информация об уровне временно недоступна');
});

test('getLevel-return', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 'золотой' });
  const resp = getLevel(1);
  expect(resp).toEqual('Ваш текущий уровень: золотой');
});
