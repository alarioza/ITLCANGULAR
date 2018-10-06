import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    console.log(this.laptops);
  }
  title = 'app';
  laptops=[{
    name: 'Acer Aspire Spin 7 SP714-51-M4E5',
    brand:'Acer',
    description:'Sleek, sophisticated and stylish on every level, this masterfully crafted laptop perfectly combines power with luxury',
    price:60060,
    images:['images/aceraspire (1).jpg','images/aceraspire (2).jpg','images/aceraspire (3).jpg','images/aceraspire (4).jpg'],
    specification:{
      processor: 'Intel Core i7 7Y75',
      os: 'Windows 10',
      memory: '8GB DDR3',
      graphics: 'Intel HM615',
      displaysize: '14 inches',
      storage:'256GB SSD'
    },
    reviews:[{
      stars:5,
      body:'cool pc',
      author:'anonymous1@mail.com',
      createdOn:1332259200000
    },
    {
      stars:5,
      body:'nice pc',
      author:'anonymous2@mail.com',
      createdOn:1332259200000
    },
    {
      stars:3,
      body:'not so good',
      author:'anonymous3@mail.com',
      createdOn:1332259200000
    }],
    canPurchase:true,
    soldOut:true
    
  },
  {
    name: 'Dell Inspiron 13 5368-I76500U',
    brand:'Dell',
    description:'Stylish, versatile and packed with potential',
    price:48345,
    images:['images/dellinspiron (1).jpg','images/dellinspiron (2).jpg','images/dellinspiron (3).jpg','images/dellinspiron (4).jpg'],
    specification:{
      processor: 'Intel Core i7-6500U',
      os: 'Windows 10',
      memory: '8GB DDR4',
      graphics: 'Intel HD Graphics',
      displaysize: '13.3 Touch Display',
      storage:'256GB SSD'
    },
    reviews:[{
      stars:5,
      body:'dell is a cool pc',
      author:'anon1@mail.com',
      createdOn:1469808000000 
    },
    {
      stars:5,
      body:'dell is nice pc',
      author:'anon2@mail.com',
      createdOn:1469808000000  
    },
    {
      stars:3,
      body:'dell is not so good',
      author:'anon3@mail.com',
      createdOn:1469808000000  
    }],
    canPurchase:true,
    soldOut:false
    
  },
  {
    name: 'Lenovo Yoga 510-15ISK ',
    brand:'Lenovo',
    description:'Fast-Recharging Laptop, for All-Day Performance',
    price:51995,
    images:['images/lenovo (1).jpg','images/lenovo (2).jpg','images/lenovo (3).jpg','images/lenovo (4).jpg'],
    specification:{
      processor:  'Intel Core i7-6500U',
      os: 'Windows 10',
      memory: '8GB DDR3',
      graphics: 'AMD Radeon M460 2G',
      displaysize: '15.6 FHD Touch',
      storage:'1TB HDD'
    },
    reviews:[{
      stars:5,
      body:'lenovo is a cool pc',
      author:'mranon1@mail.com',
      createdOn:1487952000000 
    },
    {
      stars:5,
      body:'lenovo is a nice pc',
      author:'mranon2@mail.com',
      createdOn:1487952000000 
    },
    {
      stars:3,
      body:'lenovo is not so good',
      author:'mranon3@mail.com',
      createdOn:1487952000000 
    }],
    canPurchase:true,
    soldOut:false
  },
  {
    name: 'MSI GS63VR 6RF STEALTH PRO GAMING LAPTOP',
    brand:'MSI',
    description:'THE ULTIMATE NOTEBOOKS GAMING PLATFORM',
    price:134995,
    images:['images/msi (1).jpg','images/msi (2).jpg','images/msi (3).jpg','images/msi (4).jpg'],
    specification:{
      processor:  'Intel Core i7-6700HQ ',
      os: 'Windows 10',
      memory: '16GB DDR4 RAM',
      graphics: 'GEFORCE GTX1060',
      displaysize: '15.6″ FHD (1920 x 1080) display',
      storage:'256GB SSD+1TB HDD SATA'
    },
    reviews:[{
      stars:5,
      body:'MSI is a cool gaming pc',
      author:'gamer1@mail.com',
      createdOn:1482595200000 
    },
    {
      stars:5,
      body:'MSI is a nice pc',
      author:'gamer2@mail.com',
      createdOn:1482595200000 
    },
    {
      stars:3,
      body:'MSI is not so good',
      author:'gamer3@mail.com',
      createdOn:1482595200000 
    }],
    canPurchase:true,
    soldOut:false
    
  }];

}
