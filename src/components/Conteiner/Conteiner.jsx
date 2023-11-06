import css from '../../components/Conteiner/Conteiner.module.css';

function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}
export default Container;
