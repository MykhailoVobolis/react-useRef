import { useState, useEffect } from "react";
import ArticleList from "../ArticleList/ArticleList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import SearchForm from "../SearchForm/SearchForm";
import { fetchArticlesWithTopic } from "../../articles-api";
import "./App.css";

export default function App() {
  // Оголошуємо стани
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Оголошуємо асинхронну функцію сабміту форми
  async function handleSearch(topic) {
    try {
      setArticles([]); // Очищаємо стан articles перед новим запитом
      setError(false); // Скидаємо помилку перед наступним запитом, якщо вона була у попередньому запиті.
      setLoading(true); //  Встановлюємо індикатор в true перед запитом

      // Використовуємо HTTP-функцію
      const data = await fetchArticlesWithTopic(topic);
      // Записуємо дані в стан
      setArticles(data);
    } catch (error) {
      // Тут обробляємо помилку
      // Встановлюємо стан error в true
      setError(true);
    } finally {
      // Встановлюємо індикатор в false після запиту
      setLoading(false);
    }
  }

  //  РЕАЛІЗАЦІЯ СТАТИЧНОГО ЗАПИТУ СТАТЕЙ ВИКОРИСТОВУЮЧИ useEffect

  // useEffect(() => {
  //   // Оголошуємо асинхронну функцію
  //   async function fetchArticles() {
  //     try {
  //       //  Встановлюємо індикатор в true перед запитом
  //       setLoading(true);

  //       // Використовуємо HTTP-функцію
  //       const data = await fetchArticlesWithTopic("react");
  //       // Записуємо дані в стан
  //       setArticles(data);
  //     } catch (error) {
  //       // Тут обробляємо помилку
  //       // Встановлюємо стан error в true
  //       setError(true);
  //     } finally {
  //       // Встановлюємо індикатор в false після запиту
  //       setLoading(false);
  //     }
  //   }
  //   // Викликаємо асинхронну функцію одразу після оголошення
  //   fetchArticles();
  // }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <Error error={error} />}
      {articles.length > 0 && <ArticleList items={articles} />}
      <Loader loading={loading} />
    </div>
  );
}
