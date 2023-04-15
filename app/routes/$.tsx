/** @format */

import {PlasmicRootProvider, PlasmicComponent} from '@plasmicapp/loader-react';
import {PLASMIC} from '../plasmic-init';
import {useLoaderData} from '@remix-run/react';
import {LoaderFunction, json} from '@remix-run/node';

// Fetch the data needed to render Plasmic pages or components, server-side.
export const loader: LoaderFunction = async ({params}) => {
  // Get the current path from params and pass it to plasmic
  const path = `/${params['*']}`;
  const plasmicData = await PLASMIC.fetchComponentData(path);
  return json(plasmicData);
};

// Render the page or component from Plasmic.
export default function MyPage() {
  const plasmicData = useLoaderData();
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={plasmicData.entryCompMetas[0].displayName} />
    </PlasmicRootProvider>
  );
}
