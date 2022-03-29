import { json, Link, useLoaderData } from "remix";

export const loader = async () => {
  return json({
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
  const { docs } = useLoaderData();
  console.log(docs);

  return (
    <main>
      <h1>ETUI Documents</h1>

      <ul>
        {docs.map((document: any) => (
          <li key={document.id}>
            <Link
              to={document.id}
              className="text-blue-600 underline"
            >
              {document.title}
            </Link>

            : {document.desc}
          </li>
        ))}
      </ul>
    </main>
  );
}