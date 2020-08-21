import { MatTable } from '@angular/material/table';
import { ProductRead2DataSource } from './../product-read2/product-read2-datasource';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit, AfterViewInit {
  products: Product[]
  @ViewChild(MatTable) table: MatTable<Product>;
  //dataSource: ProductService;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      this.products = products
      //this.table.dataSource = this.products;
      console.log(products)
    })
  }


  ngAfterViewInit() {
    //this.table.dataSource = this.products;

  }


}
