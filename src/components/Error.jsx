import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.error(err);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        {err.status}: {err.statusText}
      </h1>
      <p>
        Please head to <Link to="/"> Home </Link>
      </p>
    </div>
  );
};
export default Error;
