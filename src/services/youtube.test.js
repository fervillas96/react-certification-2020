import { search, recomend } from './youtube';

jest.mock('../services/youtube', () => {
  return {
    // eslint-disable-next-line no-unused-vars
    search: jest.fn((query, searchSize) => {
      return { videos: {} };
    }),
    // eslint-disable-next-line no-unused-vars
    recomend: jest.fn((videoId, searchSize) => {
      return { videos: {} };
    }),
  };
});

describe('Youtube API service test suite', () => {
  it('Making a simple search query', async () => {
    const youtubeResponse = await search('Wizeline', 1);
    expect(youtubeResponse.videos).toStrictEqual({});
  });

  it('Making a simple search query', async () => {
    const youtubeResponse = await recomend('IDX01', 1);
    expect(youtubeResponse.videos).toStrictEqual({});
  });
});
