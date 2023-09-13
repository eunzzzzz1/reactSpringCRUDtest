import { Routes, Route } from "react-router-dom";
import List from "../bbs/List";
import Article from "../bbs/Article";
import Created from "../bbs/Created";

function Router() {

	return (
			<Routes>
				{/* <Route path="/"></Route> */}
				<Route path="/list" element={<List/>}></Route>
				<Route path="/article" element={<Article/>}></Route>
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
