import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  private productos=[]
  private data = [
    {"Framework": "Pelota", "Stars": "10", "Released": "2014"},
    {"Framework": "React", "Stars": "20", "Released": "2013"},
    {"Framework": "Angular", "Stars": "30", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "40", "Released": "2010"},
    {"Framework": "Ember", "Stars": "25", "Released": "2011"},
  ];
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  constructor(private loginservice:LoginserviceService) { }

    ngOnInit(): void {
      this.getStock();
      this.createSvg();
      //this.drawBars(this.productos);
  }
  async getStock(){
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
        this.drawBars(this.productos)
      },
      error =>{ console.log(<any>error);
      }
    )
  }
  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }
  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    
    .domain(data.map(d => d.Nombre))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 200])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.Nombre))
    .attr("y", d => y(d.Stock))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.Stock))
    .attr("fill", "#d04a35");
  }

}
