import { LoaderFunction } from "remix";
import { redirect } from "remix";

export const loader: LoaderFunction = async () => {
  return redirect("/agreements");
};

export default function Index() {
  return <div></div>;
}
