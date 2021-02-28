import React, { useEffect, useState } from "react";
import { Layout } from "components";
import "globalstyles/styles.css";
import "globalstyles/common.css";
import { NewsList, Pagination, Loading, Categories, Search } from "components";
import News, { newsCategory } from "news";

//call axios instance
const news = new News(newsCategory.technology);

const App = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  //call news-data
  useEffect(() => {
    news
      .getNews()
      .then((data) => setState({ data, isLoading: false }))
      .catch((e) => {
        catchError(e);
      });
  }, []);

  //next page
  const nextPage = () => {
    if (state.data.isNext) {
      setState({ isLoading: true });
    }

    news
      .next()
      .then((data) => setState({ data, isLoading: false }))
      .catch((e) => {
        catchError(e);
      });
  };

  //previous page
  const prevPage = () => {
    if (state.data.isPrevious) {
      setState({ isLoading: true });
    }

    news
      .prev()
      .then((data) => setState({ data, isLoading: false }))
      .catch((e) => {
        catchError(e);
      });
  };

  //handle page change
  const handlePageChange = (value) => {
    setState({
      data: {
        ...state.data,
        currentPage: Number.parseInt(value),
      },
    });
  };

  //go to page
  const goToPage = () => {
    setState({ isLoading: true });

    news
      .setCurrentPage(state.data.currentPage)
      .then((data) => setState({ data, isLoading: false }))
      .catch((e) => {
        catchError(e);
      });
  };

  //change category
  const changeCategory = (category) => {
    setState({ isLoading: true });

    news
      .changeCategory(category)
      .then((data) => setState({ data, isLoading: false }))
      .catch((e) => {
        catchError(e);
      });
  };

  //search term
  const search = (searchTerm) => {
    setState({ isLoading: true });

    news
      .search(searchTerm)
      .then((data) => setState({ data, isLoading: false }))
      .catch((e) => {
        catchError(e);
      });
  };

  //catching error
  const catchError = (e) => {
    console.log(e);
    alert("Something Went Wrong");
    setState({ isLoading: false });
  };

  return (
    <Layout>
      <Search search={search} />
      {state.isLoading ? (
        <Loading />
      ) : (
        <div>
          <Categories
            changeCategory={changeCategory}
            category={state.data.category}
          />
          <div className="number-of-news">
            <span>About {state.data.totalResults} results found</span>
            <span>
              Page {state.data.currentPage} of {state.data.totalPage}
            </span>
          </div>
          <NewsList news={state.data.articles} />
          <Pagination
            nextPage={nextPage}
            prevPage={prevPage}
            isPrevious={state.data.isPrevious}
            isNext={state.data.isNext}
            totalPage={state.data.totalPage}
            currentPage={state.data.currentPage}
            handlePageChange={handlePageChange}
            goToPage={goToPage}
          />
        </div>
      )}
    </Layout>
  );
};

export default App;
