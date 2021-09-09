import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44329/api/PaymentDetail'
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  addPaymentDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

  updatePaymentDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  getPaymentDetails(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[])
  }


  delete(id: number){
    this.http.delete(`${this.baseURL}/${id}`)
  }
}
