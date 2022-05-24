import { LoaderFunction, useLoaderData } from "remix";
import Card from "~/components/Card";

import { AgreementType } from "~/types/AgreementType";

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(
    `https://6239e234bbe20c3f66cba5e2.mockapi.io/mock/v1/agreements/${params.id}`
  );
  const data: AgreementType = await res.json();

  return Object.entries(data).reduce(
    (obj, [key, value]) => (value === null ? obj : ((obj[key] = value), obj)),
    {} as AgreementType
  );
};

export default function AgreementID() {
  const data = useLoaderData() as AgreementType;

  console.log(data);
  return (
    <>
      <Card data={data} />
    </>
  );
}
