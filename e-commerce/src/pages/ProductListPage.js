import Brand from "../components/Home/Brand";
import ShopContainer from "../components/ProductListComp/ShopContainer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import CategoryCard from "../components/ProductListComp/CategoryCard";
import ProductListFilter from "../components/ProductListComp/ProductListFilter";
import ProductListCard from "../components/ProductListComp/ProductListCard";
import { useState } from "react";
import { fetchProducts } from "../store/thunk/fetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchNextPage } from "../store/thunk/fetchNextPage";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [viewType, setViewType] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("price:asc");
  const [categoryType, setCategoryType] = useState(1);
  const loading = useSelector((state) => state.product.loading);
  const [hasMore, setHasMore] = useState(true);
  const { productList } = useSelector((state) => state.product);

  const handleViewChange = (type) => {
    setViewType(type);
  };

  const handleFilterChange = (search) => {
    setSearchTerm(search);
    dispatch(fetchProducts(categoryType, search, sortType));
    setQueryString(search);
  };

  const handleSortChange = (sort) => {
    setSortType(sort);
    dispatch(fetchProducts(categoryType, searchTerm, sort));
    setQueryString(sort);
  };

  const handleCategoryChange = (category) => {
    setCategoryType(category.id);
    dispatch(fetchProducts(category.id, searchTerm, sortType));
    setQueryString(category, category.title);
  };

  const fetchData = (data) => {
    dispatch(fetchNextPage(data))
      .then(() => {
        setHasMore(true);
      })
      .catch((error) => {
        setHasMore(false);
      });
  };

  const setQueryString = (category) => {
    if (category && category.code) {
      const genderPrefix = category.code.charAt(0) === "e" ? "erkek" : "kadin";
      let url = `${genderPrefix}/${category.title}&filter=${searchTerm}&sort=${sortType}`;
      history.push({ search: url });
    } else {
      console.error("Invalid category or category code.");
    }
  };

  return (
    <div>
      <Header />
      <ShopContainer />
      <CategoryCard onCategoryChange={handleCategoryChange} />
      <ProductListFilter
        onViewChange={handleViewChange}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        sortType={sortType}
        setViewType={setViewType}
        searchTerm={searchTerm}
        categoryType={categoryType}
        onCategoryChange={handleCategoryChange}
      />
      {loading ? (
        "loading..."
      ) : (
        <InfiniteScroll
          dataLength={productList.length}
          next={() =>
            fetchData({
              categoryType,
              searchTerm,
              sortType,
              offset: 25,
            })
          }
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ProductListCard viewType={viewType} />
        </InfiniteScroll>
      )}
      <Brand />
      <Footer />
    </div>
  );
};

export default ProductListPage;
