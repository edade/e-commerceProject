import Brand from "../components/Home/Brand";
import ShopContainer from "../components/ProductListComp/ShopContainer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import CategoryCard from "../components/ProductListComp/CategoryCard";
import ProductListFilter from "../components/ProductListComp/ProductListFilter";
import ProductListCard from "../components/ProductListComp/ProductListCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../store/thunk/fetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchNextPage } from "../store/thunk/fetchNextPage";
import { fetchCategories } from "../store/thunk/fetchCategories";
import { setQueryString } from "../store/utils";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [viewType, setViewType] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("price:asc");
  const [categoryType, setCategoryType] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  //const { productList } = useSelector((state) => state.product)

  const { productList, totalProductCount } = useSelector(
    (state) => state.product
  );

  const fetchData = (data) => {
    setIsLoading(true);
    dispatch(fetchNextPage(data))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching next page:", error);
        setIsLoading(false);
        setHasMore(false);
      });
  };

  useEffect(() => {
    const fetchProductsAndUpdateUrl = async () => {
      setIsLoading(true);
      dispatch(
        fetchProducts({
          category: categoryType,
          filter: searchTerm,
          sort: sortType,
        })
      )
        .then(() => {
          setQueryString(history, categoryType, searchTerm, sortType);
        })
        .finally(() => setIsLoading(false))
        .catch((error) => {
          console.error("Error fetching products:", error);
          setHasMore(false);
        });
    };

    fetchProductsAndUpdateUrl();
  }, [categoryType, searchTerm, sortType, history, dispatch]);

  const handleViewChange = (type) => {
    setViewType(type);
  };

  const handleCategoryChange = (category) => {
    setCategoryType(category.id);
    dispatch(fetchProducts(category.id, searchTerm, sortType));
  };
  // const handleFilterChange = (search) => {
  //   setSearchTerm(search);
  //   dispatch(fetchProducts(categoryType, search, sortType));
  //   setQueryString(search);
  // };

  // const handleSortChange = (sort) => {
  //   setSortType(sort);
  //   dispatch(fetchProducts(categoryType, searchTerm, sort));
  //   setQueryString(sort);
  // };

  // const handleCategoryChange = (category) => {
  //   setCategoryType(category.id);
  //   dispatch(fetchProducts(category.id, searchTerm, sortType));
  //   setQueryString(category, category.title);
  // };

  // const fetchData = (data) => {
  //   dispatch(fetchNextPage(data))
  //     .then(() => {
  //       setHasMore(true);
  //     })
  //     .catch((error) => {
  //       setHasMore(false);
  //     });
  // };

  // const setQueryString = (category) => {
  //   if (category && category.code) {
  //     const genderPrefix = category.code.charAt(0) === "e" ? "erkek" : "kadin";
  //     let url = `${genderPrefix}/${category.title}&filter=${searchTerm}&sort=${sortType}`;
  //     history.push({ search: url });
  //   } else {
  //     console.error("Invalid category or category code.");
  //   }
  // };

  return (
    <div>
      <Header />
      <ShopContainer />
      <CategoryCard onCategoryChange={handleCategoryChange} />
      <ProductListFilter
        sortType={sortType}
        setSortType={setSortType}
        setViewType={setViewType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryType={categoryType}
        setCategoryType={setCategoryType}
      />
      {isLoading ? (
        <div class="flex items-center justify-center">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
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
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>All products has been seen</b>
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
