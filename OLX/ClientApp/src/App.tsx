//Basic imports
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

//ImportModules
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.css";

//Import components
import Home from "./components/Home";
import DefaultLayout from "./components/containers/DefaultLayout";
import ProfilePage from "./components/UserData/Profile";
import NoMatch from "./components/NoMatch";
import AddProd from "./components/AddProd/App";
import Chat from "./components/dialog/chat";

//Import lazyLoading

const Register = lazy(() => import("./components/auth/Register/index"));
const Login = lazy(() => import("./components/auth/Login/index"));
const Like = lazy(() => import("./components/Like/index"));
const OrderList = lazy(() => import("./components/UserData/UserOrders"))


function App() {
  // const { cartIsShow } = useTypedSelector((store) => store.cart);

  // const { downloadCartData } = useActions();


  return (
    <>
      {/* {cartIsShow && <Cart />} */}
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />

          {/* AuthRoutes */}
          <Route path="/profile" element={<ProfilePage />} />

          <Route
            path="/register"
            element={
              <Suspense fallback={null}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/addprod"
            element={
              <AddProd />

            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={null}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/like"
            element={
              <Suspense fallback={null}>
                <Like />
              </Suspense>
            }
          />

          <Route
            path="/order"
            element={
              <Suspense fallback={null}>
                <OrderList />
              </Suspense>
            }
          />
          <Route path="/chat" element={<Chat />} />
          {/* 
          
          dialog={props.appState.dialog}

          <Route
            path="/dialog"
            element={
              <Suspense fallback={null}>
                <Dialogs />
              </Suspense>
            }
          /> */}

          {/* RecoverPasswordRoutes */}

          {/* <Route path="/recoverPassword" element={<RecoverPassword />} />
          <Route path="/recoverPassword/sendEmail" element={<SendEmail />} />
          <Route path="/resetpassword" element={<ResetPassword />} /> */}

          {/* Profile Routes */}
          {/* <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/oredrList"
            element={
              <Suspense fallback={null}>
                <OredrList />
              </Suspense>
            }
          /> */}
          {/* Products Routes */}
          {/* <Route path="/products/add" element={<AddNewCar />} /> */}
          {/* <Route
            path="/cars"
            element={
              <Suspense fallback={null}>
                <CarsListAdmin />
              </Suspense>
            }
          /> */}
          {/* <Route path="/cars/:id" element={<CarPage />} /> */}
          {/* <Route path="/cars/edit/:id" element={<EditCarPage />} /> */}

          {/* <Route path="/category/:urlSlug" element={<CarsListBySlug />} /> */}

          {/* News Routes*/}
          {/* <Route
            path="/news/:slug"
            element={
              <Suspense fallback={null}>
                <NewsWithNewsList />
              </Suspense>
            }
          ></Route> */}

          {/*Checkout Route*/}
          {/* <Route
            path="/ckeckOut"
            element={
              <Suspense fallback={null}>
                <CheckOut />
              </Suspense>
            }
          /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>

        {/* AdminPanelRoutes */}
        {/* {isAuth && roles === "admin" && (
          <Route
            path="/adminPanel"
            element={
              <Suspense fallback={null}>
                <AdminPanelLayout />
              </Suspense>
            }
          >
           
            <Route
              path="/adminPanel/users/create"
              element={
                <Suspense fallback={null}>
                  <CreatePage />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/users"
              element={
                <Suspense fallback={null}>
                  <AdminMain />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/users/userInfo/:id"
              element={
                <Suspense fallback={null}>
                  <UserInfo />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/users/edit/:id"
              element={
                <Suspense fallback={null}>
                  <EditUser />
                </Suspense>
              }
            />

            
            <Route
              path="/adminPanel/editor/add"
              element={
                <Suspense fallback={null}>
                  <AddNews />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/newsList"
              element={
                <Suspense fallback={null}>
                  <NewsAdminList />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/news/newsInfo/:slug"
              element={
                <Suspense fallback={null}>
                  <NewsInfo />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/news/edit/:slug"
              element={
                <Suspense fallback={null}>
                  <EditNews />
                </Suspense>
              }
            />

            
            <Route
              path="/adminPanel/categories"
              element={
                <Suspense fallback={null}>
                  <Categories />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/categories/categoryInfo/:id"
              element={
                <Suspense fallback={null}>
                  <CategoryDetailPage />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/categories/edit/:id"
              element={
                <Suspense fallback={null}>
                  <EditCategoryPage />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/categories/add"
              element={
                <Suspense fallback={null}>
                  <CreateCategory />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/categories/get/:id"
              element={
                <Suspense fallback={null}>
                  <CategoryPage />
                </Suspense>
              }
            />
            
            <Route
              path="/adminPanel/orderList"
              element={
                <Suspense fallback={null}>
                  <Orders />
                </Suspense>
              }
            />

            
            <Route
              path="/adminPanel/products"
              element={
                <Suspense fallback={null}>
                  <CarsListAdmin />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/products/addProduct"
              element={
                <Suspense fallback={null}>
                  <AddCarAdmin />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/products/infoProduct/:id"
              element={
                <Suspense fallback={null}>
                  <InfoPage />
                </Suspense>
              }
            />
            <Route
              path="/adminPanel/products/EditProduct/:id"
              element={
                <Suspense fallback={null}>
                  <EditCarPage />
                </Suspense>
              }
            />

            <Route path="*" element={<NoMatch />} />
          </Route>
        )} */}
      </Routes>
    </>
  );
}

export default App;
