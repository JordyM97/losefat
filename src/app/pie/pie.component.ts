import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  private productos=[]
  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];
  private svg;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;
  constructor(private loginservice:LoginserviceService) { }

  ngOnInit() {
    this.createSvg();
    this.getSales();
  }
  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
}
async getSales(){
  await this.loginservice.getproducts().subscribe(
    result => {
      for(let clave in result){
        if (result.hasOwnProperty(clave)) {
          this.productos.push(result[clave])
        }
        console.log(this.productos.map(d =>{
          console.log(d.Stock.toString())
        }));
        
      }
      this.createColors(this.productos)
      this.drawChart(this.productos);
    },
    error =>{ console.log(<any>error);
    }
  )
}
private createColors(Data:any): void {
  this.colors = d3.scaleOrdinal()
  .domain(Data.map(d => d.CntVentas.toString()))
  .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
}
private drawChart(Data:any): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.CntVentas));

  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(Data))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (Data, i) => (this.colors(i)))
  .attr("stroke", "#121926")
  .style("stroke-width", "1px");

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);

  const labelLocation2 = d3.arc()
  .innerRadius(180)
  .outerRadius(this.radius);
  this.svg
  .selectAll('pieces')
  .data(pie(Data))
  .enter()
  .append('text')
  .text(d => d.data.Nombre)
  .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
  this.svg
  .selectAll('pieces')
  .data(pie(Data))
  .enter()
  .append('text')
  .text(d => d.data.CntVentas)
  .attr("transform", d => "translate(" + labelLocation2.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 30)
  .style("color: red");
}

}
