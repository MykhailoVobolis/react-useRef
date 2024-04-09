import css from "./Error.module.css";

export default function Error() {
  return <p className={css.errorMessage}>Whoops, something went wrong! Please try reloading this page!</p>;
}
