import { Component ,HostListener } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color,ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bar-chart';
  barChartOptions: ChartOptions = {
    responsive: true,
    
    plugins: {
      tooltip: {
        // Tooltip will only receive click events
        events: ['click']
      }
    }
    
  };
  barChartLabels: Label[] = ["", "", "", "", ""];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartClick=true;
  barChartPlugins:any = {'backgroundColor': [
    "#FF2D00",
 "#FF2D00",
 "#FFCE56",
 "#E7E9ED",
 "#36A2EB"
 ]}
 public barChartColors: Color[] = [
  { backgroundColor: 'green' },
]

  barChartData: ChartDataSets[] = [
    { data: [70,70, 70, 70, 70], label: 'Task Status' }
  ];


 
  isShown: boolean = false ; // hidden by default


  toggleShow() {
  
  this.isShown = ! this.isShown;

  
}

onclick(e){

  console.log(e);


//console.log(e);
}
}
