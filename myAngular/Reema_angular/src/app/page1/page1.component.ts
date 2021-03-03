import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private fb: FormBuilder) { }
 myForm:FormGroup|any;
 url="../../assets/avtar2.png";
  ngOnInit(): void {
    this.myForm = this.fb.group({
      code:['',Validators.required],
       first: ['', Validators.required],
       last: ['', Validators.required],
      email: ['', [Validators.required ,Validators.email]],
      number: ['', Validators.required]
      
      }); 
  }
  onChange=(e:any)=>{
    console.log(e.target.files);
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

}
