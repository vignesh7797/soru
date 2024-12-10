import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ApiService } from '../../../services/api.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressModel } from '../../../models/address.model';
import { TabViewChangeEvent } from 'primeng/tabview';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {

  tabs = [
      { title: 'Billing Address', content: 'Tab 1 Content', icon:'receipt_long' },
      { title: 'Shipping Address', content: 'Tab 2 Content', icon:'local_shipping'},
  ];
  activeTabIndex = 0;
  TabName = '';

  visible = false;
  addressForm!:FormGroup;
  addressData:AddressModel[] = []
  countries:any[] = [];
  isLoading: boolean = false;

  constructor(private service:ApiService, private fb:FormBuilder, private messageService: MessageService){
    this.service.getAddressData().subscribe((res:AddressModel[]) => {
      console.log(res);
      this.addressData = res
      this.initaiteForm();
    });

    this.isLoading = true;
    this.service.getCountries().subscribe((res:any) =>{
      res.map((r:any) => this.countries.push({name: r.name['common'], flag : r.flags['png']}));
      this.isLoading = false;
    })
  }

  initaiteForm(){
    this.addressForm = this.fb.group({
      items : this.fb.array([])
    })

    this.addressData.forEach(ad => {
      this.addItem(ad);
    })
  }

  get items():FormArray{
    return this.addressForm.get('items') as FormArray;
  } 

  getControl(i:number, name:string): FormControl{
    return (this.items.at(i) as FormGroup).get(name) as FormControl;
  }

  createItem(data:any){
    let add = new AddressModel(data);

    let grp = this.fb.group({})

    Object.keys(add).forEach((key:any) => {
      grp.addControl(key, new FormControl (data ? data[key] : null, key != 'isEdit' ? [Validators.required] : []))
    });

    return grp;
  }

  addItem(data?:AddressModel){
    this.items.push(this.createItem(data));

    console.log(this.addressForm);
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  AddTab(){
    this.TabName = 'Shipping Address '+this.tabs.length ;
    this.visible = true;
  }

  onAddTab(){
    this.visible = false;
    let i = this.tabs.length + 1;
    this.addItem();
    this.addressData.push(this.items.at(this.items.length - 1).value);
    this.tabs.push({title:this.TabName, content:'Tab '+i+' Content', icon:'local_shipping'});
    setTimeout(() => {
      this.activeTabIndex = this.tabs.length - 1;
      this.addressData[this.activeTabIndex].isEdit = true;
    }, 50);
  }

  onTabChange(e:Event){
    console.log(e, this.activeTabIndex);
    if(this.addressData[this.activeTabIndex].isEdit){
      e.preventDefault();
      e.stopImmediatePropagation();
      this.messageService.add({ severity: 'warn', summary: 'Please, Submit Your Changes', });
    }
  }


  onSubmitAddress(){
    if(this.items.at(this.activeTabIndex).valid){
      this.addressData = this.items.value;
      this.addressData.map(add => add.isEdit = false);
      this.messageService.add({ severity: 'success', summary: 'Addres Updated Successfully...!', });
    }else{
      this.items.at(this.activeTabIndex).markAllAsTouched();
    }
  }

  onCancel(){
    this.addressData[this.activeTabIndex].isEdit = false;
  }
}
