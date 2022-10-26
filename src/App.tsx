import { GlobalStyle } from "./style/global";
import { FC } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Routes/Home/home";
import { Posts } from "./components/Routes/Posts/posts";
import { Layout } from "./components/Common/layout";


export const App: FC = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Layout>        
        <Routes>
          <Route index element={<Home/>}/>
          <Route index element={<Posts/>}/>
        </Routes>
      </Layout>      
    </BrowserRouter>
    </>
  );
}

export default App;