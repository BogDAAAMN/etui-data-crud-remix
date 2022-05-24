import { LoaderFunction, useLoaderData } from "remix";

import { AgreementType } from "~/types/AgreementType";
import classNames from "~/util/classNames";

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(
    `https://6239e234bbe20c3f66cba5e2.mockapi.io/mock/v1/agreements/${params.id}`
  );
  const data = await res.json();

  return data;
};

export default function AgreementID() {
  const data = useLoaderData() as AgreementType;

  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 mb-10 bg-white border border-gray-200 shadow-lg overflow-hidden sm:rounded-lg max-w-4xl">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Applicant Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {Object.keys(data).map((key, keyIdx) => (
              <div
                key={keyIdx}
                className={classNames(
                  keyIdx % 2 ? "bg-white" : "bg-gray-50",
                  "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                )}
              >
                <dt className="text-sm font-medium text-gray-500">{key}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data[key]}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
