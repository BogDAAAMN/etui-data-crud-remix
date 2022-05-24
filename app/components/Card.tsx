/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { PaperClipIcon } from "@heroicons/react/outline";
import { Link } from "remix";
import { AgreementType } from "~/types/AgreementType";
import classNames from "~/util/classNames";

type PropsType = {
  data: AgreementType;
};

export default function Card({ data }: PropsType) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 mb-10 bg-white border border-gray-200 shadow-lg overflow-hidden sm:rounded-lg max-w-4xl">
        <div className="px-4 py-5 sm:px-6 sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Agreement information
            </h1>
            <p className="mt-2 text-sm text-gray-700">{data.agreementtitle}</p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Edit
            </button>
          </div>
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
            <div
              className={classNames(
                Object.keys(data).length % 2 ? "bg-white" : "bg-gray-50",
                "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              )}
            >
              <dt className="text-sm font-medium text-gray-500">documents</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul
                  role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        art-13-ewc.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        to="/documents"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </Link>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        agreement-full-copy-2003.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        to="/documents"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </Link>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
