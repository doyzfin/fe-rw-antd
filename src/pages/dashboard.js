import * as React from "react";
import Layouts from "../components/Layouts";
import sale from "../static/images/icon-sale.png";
import order from "../static/images/icon-order.png";
import user from "../static/images/icon-user.png";
import visitor from "../static/images/icon-visitor.png";
import Stats from "../components/home/Stats";
import ProgressBar from "../components/home/ProgressBar";
import GradientProgess from "../components/home/GradientProgess";
import Barchart from "../components/home/Barchart";
import TodoList from "../components/home/TodoList";
import TimeLine from "../components/home/TimeLine";
import Testimonial from "../components/home/Testimonial";
import TableSelect from "../components/home/TableSelect";
import { Row, Col, Card, Button } from "antd";
import user1 from "../static/images/user1.png";
import user2 from "../static/images/user2.png";

class Dashboard extends React.Component {
  render() {
    return <Layouts title="assets" classname="dashboard"></Layouts>;
  }
}

export default Dashboard;
