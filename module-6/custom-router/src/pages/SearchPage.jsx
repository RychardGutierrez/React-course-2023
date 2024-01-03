const SearchPage = ({ routeParams }) => {
  return (
    <>
      <h1>Search page </h1>
      <span>{routeParams.query}</span>
    </>
  );
};

export default SearchPage;
