import { useFetchClass } from "../hooks/useFetchClass";

export const ClassPage = () => {
  const { results, isLoading, error } = useFetchClass(
    "https://www.dnd5eapi.co/api/classes"
  );
  console.log(results);
  if (isLoading) return <h1>LOADING...</h1>;
  if (error) console.log(error);
  return (
    <div>
      {results.map((result) => (
        <p key={result.name}>{result.name}</p>
      ))}
    </div>
  );
};
