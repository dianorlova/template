import Header from './header/Header';
import Footer from './footer/Footer';
import SearchPage from './search_page/SearchPage';


/**
 * Страница приложения с поиском
 * @returns страницу с поиском
 */
export default function Search() {
  return (
    <>
        <Header/>
        <SearchPage/>
        <Footer/>
    </>
  );
}