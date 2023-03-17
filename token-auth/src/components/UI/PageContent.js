import classes from "./PageContent.module.css";

function PageContent({ children }) {
  return <div className={classes["page-content"]}>{children}</div>;
}

export default PageContent;
