import styles from "./App.module.scss";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { PageSidebar } from "./components/PageSidebar/PageSidebar";

function App() {
  return (
    <div className={styles.mainContainer}>
      <PageHeader />
      <PageSidebar />
      <MainContainer />
    </div>
  );
}

export default App;
