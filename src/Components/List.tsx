import React, { FunctionComponent } from 'react';
import Crag, { CragProps } from './Crag';

const crags: CragProps[] = [
  { name: "Greggered", lat: 57.61, lon: 12.16 },
];

const List: FunctionComponent = () => {
  const cragWeatherComponents = crags.map(crag => {
    return <Crag { ...crag } />;
  });

  return <>
    {cragWeatherComponents}
  </>
};

export default List;