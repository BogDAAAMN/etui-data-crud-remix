import { json, LoaderFunction, useLoaderData } from "remix";

import Table from "~/components/Table";
import { AgreementType } from "~/types/AgreementType";

type LoaderData = {
  agreements: AgreementType[];
};

const tableKeys = ["id", "agreementtitle", "agtcreated", "publicationstatus"];

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    "https://6239e234bbe20c3f66cba5e2.mockapi.io/mock/v1/agreements/"
  );
  const data: AgreementType[] = await res.json();

  return json({
    agreements: data.map((el) =>
      Object.keys(el)
        .filter((key) => tableKeys.includes(key))
        .reduce((obj, key) => {
          return Object.assign(obj, {
            [key]: el[key],
          });
        }, {})
    ),
  });
};

export default function Documents() {
  const { agreements } = useLoaderData() as LoaderData;
  // console.log(agreements);

  return (
    <Table
      title="Agreements"
      description="A list of all the agreements avaialble including this, this, and that."
      data={agreements}
    />
  );
}
