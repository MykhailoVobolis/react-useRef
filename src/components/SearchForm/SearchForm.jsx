import css from "./SearchForm.module.css";

export default function SearchForm({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input className={css.inputForm} type="text" name="topic" placeholder="Search articles..." />
      <button className={css.btnSearch}>Search</button>
    </form>
  );
}
