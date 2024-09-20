import CityMap from "../components/CityMap";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <CityMap />
      <User />
    </div>
  );
}

export default AppLayout;
