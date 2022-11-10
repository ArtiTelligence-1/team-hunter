import React, { createRef, useEffect, useRef, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { Loader } from '@googlemaps/js-api-loader';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <p>{'<Spinner />'}</p>;
    case Status.FAILURE:
      return <p>{'<ErrorComponent />'}</p>;
    case Status.SUCCESS:
      return <MyMapComponent center={{ lat: 1, lng: 2 }} zoom={1} />;
    default:
      return <MyMapComponent center={{ lat: 1, lng: 2 }} zoom={1} />;
  }
};

const MyMapComponent = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral
  zoom: number
}) => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    new window.google.maps.Map(ref.current!, { // eslint-disable-line no-new
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
};

const MapsInput = () => {
  const [place, setPlace] = useState('');

  useEffect(() => {
    console.log(place);
  }, [place]);

  const loader = new Loader({
    apiKey: 'AIzaSyCV5zbKUfBZ-SwJ60oASNX-j2YiHMC0HG8',
    libraries: ['places'],
  });

  loader.loadCallback((e) => {
    // if (e.error) {
    console.log(e);
    // } else {
    // console.log(window.google.maps);
    const auto = new window.google.maps.places.AutocompleteService();
    console.log(auto.getPlacePredictions({ input: 'some' }).then((ew) => console.log(ew)));
    // new google.maps.Map(document.getElementById("map"), mapOptions);
    // }
  });

  console.log(process.env);
  return (
    <>
      {/* <Wrapper apiKey="AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0" render={render} /> */}
      <input value={place} onInput={(e) => setPlace(e.currentTarget.value)} />
    </>
  );
};

export default MapsInput;
