import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Chart extends React.Component {
  state = {
    dataDoughnut: {
      labels: ["Trips", "Grocery", "Others", "Decor", "Ruby's stuff"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
          hoverBackgroundColor: [
            "#FF5A53",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774"
          ]
        }
      ]
    },
    theHighestExpense: '',
    currentBalance: '',
    totalExpenses: '',
    status: ''
  }

  highestExpense = () => {
    let data = this.state.dataDoughnut.datasets[0].data;
      let theHighestExpense = Math.max(...data)
      this.setState({
        theHighestExpense: `Your highest expense this month was $${theHighestExpense}`
      })
      this.totalExpenses()
    // this.state.dataDoughnut.data.forEach( e => console.log(e) )
  }

  totalExpenses = () => {
    let totalExpenses = this.state.dataDoughnut.datasets[0].data.reduce((a,b) => a + b, 0);
    this.setState({
      totalExpenses: `You total expenses this month was $${totalExpenses}`
    })

    if(this.state.totalExpenses > this.state.currentBalance){
      this.setState({ status: `You need to start saving asap yo`})
    } else {
      this.setState({ status: `You good`})
    }
  }

  checkStatus = () => {
  }

  componentDidMount(){
    let balance = 3500;
    this.setState({
      currentBalance: `Your balance is ${balance}`
    })
  }

  render() {
    return (
      <>
      <h4> {this.state.currentBalance} </h4>

        <MDBContainer>
          <Doughnut
            data={this.state.dataDoughnut}
            options={{ responsive: true }} />
        </MDBContainer>
        <section>
          <button onClick={() => { this.highestExpense() }}> Highest Expense </button>
          <h5>{this.state.theHighestExpense}</h5>
          <h5> {this.state.totalExpenses} </h5>
          <h5>{this.state.status}</h5>

        </section>
      </>
    );
  }
}

export default Chart;
