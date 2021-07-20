import { Controller } from 'stimulus'

// let groupPortions = new Set();
let groupPortions = new Array();

export default class extends Controller {

  // connect(){
  //   this.groupPortions = new Set();
  // }

  receiveGroupPortions(e) {
    this.save(e.detail)
  }

  // validateIfContain
  save(portions){

    if (groupPortions.length === 0){
      console.log('zero')
      groupPortions.push(portions)
    } else {
      groupPortions.forEach((item, i) => {
        if (item.key === portions.key){
          console.log('igual al key')
          groupPortions[i] = portions;
        } else {
          console.log('else')
          groupPortions.push(portions)
        } 
      })
    }

    console.log(groupPortions.length)
    console.log(groupPortions)
    // this.groupPortions.forEach(function(column) {
    //   console.log(column)
    // })
    // this.groupPortions.forEach((item, i) => {
    //   console.log(item)
    //   console.log(i)
    //   if (item.key === portions.key){
    //     this.groupPortions[i] = portions;
    //   } else {
    //     this.groupPortions.push(portions)
    //   } 

    //   console.log(this.groupPortions)
    // });
    // groupPortions.push(newPortion);
    // groupPortions.add(newPortion);

    // this.multiply();

    
  }

  multiply(){
    // console.log(groupPortions)
  }
}