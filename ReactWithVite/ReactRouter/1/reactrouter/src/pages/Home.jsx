import { Link } from "react-router-dom";
import MainNavigator from "../components/MainNavigator";

export default function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        go to <Link to="/products"> the list of products</Link>
      </p>
    </>
  );
}
