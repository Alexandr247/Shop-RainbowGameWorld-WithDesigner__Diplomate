import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/header/Header";


import Promo from "./components/promo/Promo";
import About from "./components/about/About";
import Action from "./components/action/Action";

import Catalog from "./components/catalog/Catalog";

import Product from "./components/product/Product";
import Like from "./components/like/Like";


import Footer from "./components/footer/Footer";



import Abc from "./components/abc/Abc";


function App() {
	return (
		<div className="App">
			
			<Router>

				{/* Вне маршрутов, будет отображаться на всех страницах */}
				<Header />

				<Routes>

					{/* Маршрут для пустого пути */}
					<Route path="/" element={
						<>
							<Promo />
							<About />
							<Action />
							{/* Добавьте сюда другие компоненты, которые должны отображаться на главной странице */}
						</>
					} />

					{/* При переходе на /catalog, показываем только Catalog компонент */}

					<Route path="/catalog" element={<Catalog/>} />

					<Route path="/product" element={
						<>
							<Product />
							<Like />
							{/* Добавьте сюда другие компоненты, которые должны отображаться на этой странице */}
						</>
					} />






					{/* <Route path="/catalog" element={<Catalog/>} />
					<Route path="/product" element={<Product/>} /> */}


				</Routes>

				<Footer />	

			</Router>


		</div>
	);
}

export default App;
