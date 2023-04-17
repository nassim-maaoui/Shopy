import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductsComponent implements OnInit{
constructor(private service:AuthService,private route: ActivatedRoute){}
  arr:any=""
  sub:any=""
  cat:any[]=[]
  subcF:any[]=[]
  len:any[]=[]
  

  ngOnInit(): void {
    this.service.getby(this.route.snapshot.params['id']).subscribe((data:any)=>{
      this.arr=data.data
      console.log(this.arr)
      this.sub=this.arr.subcategories[0]
      this.service.getallsubcat().subscribe((data:any)=>{
        console.log(data.data)
        this.len=data.data  
        for(let i=0;i<=this.len.length-6;i++){
          this.subcF.push(data.data)
        }
        console.log(this.subcF)
        
        
      })
      this.service.getallcat().subscribe((data:any)=>{
        console.log(data.data)
        this.cat=data.data
      })
  
    this.myForm=new FormGroup({
      title: new FormControl(this.arr.title),
      description: new FormControl(this.arr.description),
      price : new FormControl(this.arr.price),
      category : new FormControl(),
    subcategories:new FormControl()

    })
    })
    





  }

  myForm=new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    price:new FormControl(),
    category : new FormControl(),
    
    subcategories:new FormControl("")
    

  })



  validerr(){
    let data = {title:this.myForm.value.title,description:this.myForm.value.description,price:this.myForm.value.price,category:this.myForm.value.category,subcategories:[this.myForm.value.subcategories]}
    this.service.updateprod(data,this.route.snapshot.params['id']).subscribe((data:any)=>{
      console.log(data)
          })

    
  }

}
