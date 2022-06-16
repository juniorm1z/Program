import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-ex';
  elements: any = [
    {mobile: '0891234567', product: '3G', status: 'Active', status_date: '25/10/2019 15:05:19' , customer_account: 'ณเดชน์ คุกิมิยะ' , register_date: '25/09/2019' , segment: 'Classic' , pa_group: 'PA3' , first_name: 'ณเดชน์' , last_name: 'คุกิมิยะ' }];
    headElements = ['Mobile', 'Product', 'Status', 'Status Date' , 'Customer Account' , 'Register Date' , 'Segment' , 'PA Group' , 'First Name' , 'Last Name'];
}
