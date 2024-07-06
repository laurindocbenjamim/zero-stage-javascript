

function displayChart(chart) {
    
  var container = document.getElementById('charts')
  var canvas = document.createElement('canvas')
  

  if(chart){

    if(chart == 'bar'){
        
        removeCanvasChildElement(container)

        canvas.setAttribute('id', 'barChart');
        canvas.className = 'bar-chart'
        canvas.style = "width:100%;max-width:700px"       
        container.appendChild(canvas)
        barChart();
    }else if(chart=='line'){

        removeCanvasChildElement(container)

        canvas.setAttribute('id', 'lineChart');
        canvas.style = "width:100%;max-width:700px"
        container.appendChild(canvas)
        lineChart()
    }else if(chart=='multipleline'){

        removeCanvasChildElement(container)

        canvas.setAttribute('id', 'multipleLineChart');
        canvas.style = "width:100%;max-width:700px"
        container.appendChild(canvas)
        multipleLineChart()
    }else if(chart=='pie'){

        removeCanvasChildElement(container)

        canvas.setAttribute('id', 'pieChart');
        canvas.style = "width:100%;max-width:700px"
        container.appendChild(canvas)
        pieChart()
    }else if(chart=='doughnut'){

        removeCanvasChildElement(container)

        canvas.setAttribute('id', 'doughnutChart');
        canvas.style = "width:100%;max-width:700px"
        container.appendChild(canvas)
        doughnutChart()
    }
  }
}

/**
 *  This method is used to remove existent canvas child element from 
 * the chart container
 */
function removeCanvasChildElement(container){
    try {
        var old = document.querySelector('canvas')
        if(old){
            container.removeChild(old)
        }else{
            console.log(old)
        }
    } catch (error) {
        console.log(error)
    }
}

var barChart = () => {
  const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  const yValues = [55, 49, 44, 24, 15];
  const barColors = ["red", "green", "blue", "orange", "brown"];

  new Chart("barChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "World Wine Production 2018",
      },
    },
  });
};

var lineChart = () => {
  const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

  new Chart("lineChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: 6, max: 16 } }],
      },
    },
  });
};

let multipleLineChart = () => {
  const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  new Chart("multipleLineChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
          borderColor: "red",
          fill: false,
        },
        {
          data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
          borderColor: "green",
          fill: false,
        },
        {
          data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
          borderColor: "blue",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: false },
    },
  });
};

let pieChart = () => {
  const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  const yValues = [55, 49, 44, 24, 15];
  const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

  new Chart("pieChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018",
      },
    },
  });
};

let doughnutChart = () => {
  const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  const yValues = [55, 49, 44, 24, 15];
  const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

  new Chart("doughnutChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018",
      },
    },
  });
};
