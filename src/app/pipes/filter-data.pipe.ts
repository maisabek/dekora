import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(products:any[],searchKey:string): any {
    // if(!products || !searchKey){
    //   return products
    // }
    return products.filter(product =>
      product.title.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1 ||
      product.description.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1
    )
  }

}
