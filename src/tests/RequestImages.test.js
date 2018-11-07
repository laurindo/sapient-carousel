import React from 'react';
import axiosMock from 'axios';
import { Simulate, render, wait, getAllByTestId } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

jest.mock('axios');

describe("Testing <Carousel /> and <CarouselItem />", async () => {
  test("Calling component to render images", async () => {
    const result = {
      hits: [{
        "largeImageURL": "https://pixabay.com/get/e830b80f28f5013ed1584d05fb1d4f90e671e2d31cac104491f1c57daeebbdb8_1280.jpg",
        "id": 1590010,
        "user_id": 12019,
        "pageURL": "https://pixabay.com/en/river-hills-evening-california-1590010/",
        "tags": "river, hills, evening",
        "previewURL": "https://cdn.pixabay.com/photo/2016/08/12/23/44/river-1590010_150.jpg"
      }]
    };

    axiosMock.get.mockResolvedValueOnce({
      data: result
    });

    const {
      queryByText,
      getByAltText
    } = render(<Carousel />);

    // Before to do request
    expect(getByAltText(/loading.../i)).toBeTruthy();

    // After request has done
    await wait(() => expect(queryByText('loading...')).toBeNull());

    // Checking if attribute img has alt='river, hills, evening'
    const imgElement = getByAltText(/river, hills, evening/i);

    // Checking if element <img /> was returned
    expect(imgElement).toBeTruthy();
  });
});
