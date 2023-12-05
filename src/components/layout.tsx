import { Outlet } from "react-router-dom";
//Outlet은 중첩된 라우터에서 하위 라우터의 컴포넌트를 렌더링하는 데 사용

export default function Layout() {
  return (
    <>
      <h2></h2>
      <Outlet />

    </>
  );
}
//fragment를 쓰고 그 안에 outlet을 넣음
//프래그먼트(React Fragment)는 여러 자식 요소를 그룹화하거나 
//감싸지 않고 여러 요소를 반환할 때 사용되는 특수한 구문
