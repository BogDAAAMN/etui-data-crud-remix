import { json, Link, useLoaderData } from "remix";

type Document = {
  id: string;
  title: string;
  desc: string;
  status: string;
}

type LoaderData = {
  docs: Array<Document>;
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export const loader = async () => {
  return json<LoaderData>({
    docs: [
      { id: '1236', title: 'Lorem ipssyus', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', status: 'Member' },
      { id: '3473', title: 'Document that Pedro likes', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', status: 'Member' },
      { id: '3245', title: 'Some other document', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', status: 'Member' },
      { id: '3974', title: 'Bogdan is cool', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', status: 'Member' },
      { id: '3421', title: 'Or is he?', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', status: 'Member' },
      { id: '3235', title: 'Loremus lipsusum', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', status: 'Member' },
    ],
  });
};

export default function Documents() {
  const { docs } = useLoaderData() as LoaderData;
  console.log(docs);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">ETUI Documents</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the documents available in the ETUI archive.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add document
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <table className="min-w-full border-separate" style={{ borderSpacing: 0 }}>
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {docs.map((document, documentIdx) => (
                    <tr key={document.id}>
                      <td
                        className={classNames(
                          documentIdx !== docs.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                        )}
                      >
                        {document.id}
                      </td>
                      <td
                        className={classNames(
                          documentIdx !== docs.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
                        )}
                      >
                        {document.title}
                      </td>
                      <td
                        className={classNames(
                          documentIdx !== docs.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                        )}
                      >
                        {document.desc}
                      </td>
                      <td
                        className={classNames(
                          documentIdx !== docs.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                        )}
                      >
                        {document.status}
                      </td>
                      <td
                        className={classNames(
                          documentIdx !== docs.length - 1 ? 'border-b border-gray-200' : '',
                          'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'
                        )}
                      >
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {document.name}</span>
                        </a>
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
