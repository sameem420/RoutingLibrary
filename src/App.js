import Link from "./components/Link";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

function App() {
  return (
    <div className="ui container">
      <div className="ui inverted segment">
        <div className="ui inverted secondary pointing menu">
          <Link className="item active" href="/">
            Home
          </Link>
          <Link className="item" href="/search">
            Search
          </Link>
          <Link className="item" href="/translate">
            Translate
          </Link>
        </div>
      </div>
      <Route path="/">
        <h1>This is Home component</h1>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </div>
  );
}

export default App;
