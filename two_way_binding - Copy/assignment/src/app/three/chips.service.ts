import { Injectable } from '@angular/core';
import { Chips } from './chips';

@Injectable({
  providedIn: 'root'
})
export class ChipsService {
  constructor() { }
  getOrders(): Chips[]{
      return[
        {id: 101, code: 'CC&J01',url: 'https://www.listchallenges.com/f/items/6ab7f6f2-9771-4b48-8336-0242f1fcfc3d.jpg', name: 'Cheetos Cheese and Jalapeño', unit: 269, cost: 14.99, rsp: 1.00, margin: 30, category: 'Bagged Sweets', quantity: 12},
        {id: 102, code: 'FDCR02',url: "https://www.listchallenges.com/f/items/52a872d9-9c1c-44f9-a6ef-61da62fbe831.jpg", name: 'Fritolay Doritus Cool Ranch', unit: 198, cost: 14.99, rsp: 1.00, margin: 30, category: 'Bagged Sweets', quantity: 9},
        {id: 103, code: 'DLS03',url: "https://www.listchallenges.com/f/items/061f740e-94b0-463b-914b-aa950b0f148e.jpg", name: 'Doritos Lightly Salted', unit: 269, cost: 14.99, rsp: 1.00, margin: 30, category: 'Bagged Sweets', quantity: 12},
        {id: 104, code: 'DHOL04',url: "https://www.listchallenges.com/f/items/0ecec3d8-e6d7-4ede-ae62-10af207c4f16.jpg", name: 'Doritos Hint of Lime', unit: 269, cost: 14.99, rsp: 1.00, margin: 30, category: 'Bagged Sweets', quantity: 9},
        {id: 105, code: 'LSC&O05',url: "https://www.listchallenges.com/f/items/b91f3338-d01a-46e2-aa30-62842faad290.jpg", name: 'Lays Sour Cream and Onion', unit: 269, cost: 14.99, rsp: 1.00, margin: 30, category: 'Bagged Sweets', quantity: 8},
        {id: 106, code: 'FCC06',url: "https://www.listchallenges.com/f/items/36871297-2867-4846-834b-6f16753c80f9.jpg", name: 'Fritos Chili Cheese', unit: 198, cost: 14.99, rsp: 1.00, margin: 30,category: 'Bagged Sweets', quantity: 7},
        {id: 107, code: 'LWHB07',url: "https://www.listchallenges.com/f/items/8dc8ed84-bebe-4b91-a835-4ea8eb823402.jpg", name: 'Lays Wavy Hickory Barbecue', unit: 269, cost: 14.99, rsp: 1.00, margin: 30, category: 'Bagged Sweets', quantity: 8},
        {id: 108, code: 'LCl08',url: "https://www.listchallenges.com/f/items/d7f01c0a-7223-4972-959d-fb6558d371ea.jpg", name: 'Lays Classic', unit: 269, cost: 14.99, rsp: 1.00, margin: 30, category: 'Bagged Sweets', quantity: 15},
        {id: 109, code: 'CC&BB09',url: "https://www.listchallenges.com/f/items/9444f62e-e6c4-4aac-ab54-7e91f63c9d2f.jpg", name: 'Cheetos Cheese and Bacon Balls', unit: 269, cost: 14.99, rsp: 1.00, margin: 30, category: 'Bagged Sweets', quantity: 10},
        {id: 110, code: 'HChE10',url: 'https://www.listchallenges.com/f/items-dl/caaf126e-a5c8-4683-92f2-a2803bbd82d0.jpg', name: 'Hot Cheetos', unit: 269, cost: 14.99, rsp: 1.00, margin: 30, category: 'Bagged Sweets', quantity: 7},
        
    ]
    }
}



