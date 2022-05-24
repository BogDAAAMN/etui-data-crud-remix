import { Link } from "remix";
import { AgreementType } from "~/types/AgreementType";
import classNames from "~/util/classNames";

type PropsType = {
  title: string;
  description?: string;
  data: AgreementType[];
};

export default function Table({ title, description, data }: PropsType) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {Object.keys(data[0]).map((key, keyIdx) => (
                      <th
                        key={key}
                        scope="col"
                        className={classNames(
                          keyIdx == 0
                            ? "py-3.5 pl-4 pr-3 sm:pl-6"
                            : "px-3 py-3.5",
                          "text-left text-sm font-semibold text-gray-900"
                        )}
                      >
                        {key.toUpperCase()}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((row: AgreementType) => (
                    <tr key={row.id}>
                      {Object.keys(row).map((key, keyIdx) => (
                        <td
                          key={key}
                          className={classNames(
                            keyIdx == 0
                              ? "py-4 pl-4 pr-3 text-gray-900 sm:pl-6 font-medium"
                              : "px-3 py-4 text-gray-500",
                            "whitespace-nowrap text-sm max-w-sm truncate ..."
                          )}
                        >
                          {row[key]}
                        </td>
                      ))}
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          to={"" + row.id}
                          className="text-indigo-600 hover:text-indigo-900"
                          prefetch="intent"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
