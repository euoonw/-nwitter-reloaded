import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import ProtectedRoute from "./components/protected-route";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";
import { styled } from "styled-components";

//React 애플리케이션에 브라우저 기반 라우팅을 설정
//createBrowserRouter 함수는 배열을 받아 라우팅 구성을 정의
//배열의 각 요소는 하나의 라우터 설정
const router = createBrowserRouter([
  {
    path: "/", //루트경로
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ), //<- only for 로그인한 사용자
    children: [
      //children 속성은 하위 라우터를 정의하는 데 사용
      {
        path: "", //경로가 비어있을 때(즉, / 경로)
        element: (
          // <ProtectedRoute>
          <Home />
          // </ProtectedRoute>
          //홈페이지랑 프로필 페이지는 모두 ProtectedRoute의 children(컴포넌트 내부의 모든것~)으로 보내짐
        ),
      },
      {
        path: "profile",
        element: (
          // <ProtectedRoute>
          <Profile />
          // </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);
//path의 element는 우리가 방금 만든 Layout이 된다

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }  
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`; //이걸로 감싸면 모든게 화면 가운데로 옴

function App() {
  const [isLoading, setLoading] = useState(true);
  //async 키워드는 함수를 비동기 함수로 만드는 역할
  const init = async () => {
    //wait for firebase
    await auth.authStateReady();
    setLoading(false);
    //setTimeout(()=>setIsLoading(false), 2000);
  };
  useEffect(() => {
    //useEffect 훅은 컴포넌트가 렌더링될 때마다 특정 효과를 수행하도록 설정
    init();
  }, []);
  /*컴포넌트가 처음 렌더링될 때 비동기 작업을 수행하고, 
  그 동안 로딩 상태를 true로 설정하여 로딩 중임을 나타내다가, 
  작업이 완료되면 로딩 상태를 false로 변경하는 패턴을 구현*/
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
