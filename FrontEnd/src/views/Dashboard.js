/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// react plugin used to create charts
import { Line} from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";


//import {dashboardTEMPChart} from "variables/charts.js"
import React from "react";
let ultTemp = 0
let tempHoy = []
let tempAyer = []
async function fetchTemp() {
  tempHoy = []
  tempAyer = []
  const url = "http://localhost:8080/getTempByPool=1&year=2021&month=11&day=1"
  const response = await fetch(url)
  const respJson = await response.json()
  respJson.forEach(element => {
    tempHoy.push(element.temp)
    ultTemp = element.temp
  });
  return(tempHoy)
}



function Dashboard() {  
  
  React.useEffect(() => {
    fetchTemp()  
  },);

  const Horas = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"]

const dashboardTEMPChart = {
  data: (canvas) => {
    return {
      labels: Horas,
      datasets: [
        {
          data: tempHoy,
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        //{
        //  data: tempAyer,
        //  fill: false,
        //  borderColor: "#fbc658",
        //  backgroundColor: "transparent",
        //  pointBorderColor: "#fbc658",
        //  pointRadius: 4,
        //  pointHoverRadius: 4,
        //  pointBorderWidth: 8,
        //  tension: 0.4,
        //},
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

















   return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">PH</p>
                      <CardTitle tag="p"> 4.5 </CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody> 
            </Card>
          </Col>
          
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Oxigeno</p>
                      <CardTitle tag="p"> XX</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Salinidad</p>
                      <CardTitle tag="p">YY</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Temperatura</p>
                      <CardTitle tag="p"> {ultTemp} </CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Temperatura en Pileta</CardTitle>
                <p className="card-category">Ultimas 24 Horas</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardTEMPChart.data}
                  options={dashboardTEMPChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Hoy{" "}
                  <i className="fa fa-circle text-warning" /> Ayer
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
