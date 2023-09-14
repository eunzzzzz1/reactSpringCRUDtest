import { Routes, Route } from "react-router-dom";
import List from "../bbs/List";
import Article from "../bbs/Article";
import Created from "../bbs/Created";
import { useEffect, useState } from "react";
import axios from "axios";

function Router() {

	const [data, setData] = useState({
        lists: [],
        currentPage: 1,
        totalPage: 1,
        dataCount: 0,
    });
    
      
      useEffect(() => {
       
        axios.get('/list')
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

	return (
			<Routes>
				{/* <Route path="/"></Route> */}
				<Route path="/list" element={<List data={data}/>}></Route>
				<Route path="/article/:number" element={<Article datalist={data.lists}/>}></Route>
				<Route path="/created" element={<Created/>}></Route>
				{/* <Route path="/bbsdetail/:seq" element={<BbsDetail />}></Route>
				<Route path="/bbsupdate" element={<BbsUpdate />}></Route>
				<Route path="/bbsanswer/:parentSeq" element={<BbsAnswer />}></Route>

				<Route path="/login" element={<Login />}></Route>
				<Route path="/join" element={<Join />}></Route>
				<Route path="/logout" element={<Logout />}></Route> */}
			</Routes>
	);
}

export default Router;
