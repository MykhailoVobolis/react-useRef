import RiseLoader from "react-spinners/RiseLoader";
import css from "./Loader.module.css";

export default function Loader({ loading }) {
  return (
    <div className={css.loader}>
      <RiseLoader color={"#ff0000"} loading={loading} size={15} />
    </div>
  );
}
