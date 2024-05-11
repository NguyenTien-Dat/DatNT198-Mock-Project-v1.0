import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/foods';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) : Foods[] {
    return tag == "All"?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag(): Tag[] {
    return [
      { name: 'All'},
      { name: 'Pizza'},
      { name: 'Burgers'},
      { name: 'Chicken Fried'},
      { name: 'Doughnut'},
      { name: 'French Fries'},
      { name: 'Rice'},
      { name: 'Soup'},
    ]
  }

  getAll():Foods[] {
    return [
      {
        id: 1,
        name: 'Frosted Doughnut',
        cookTime: '5-10',
        price: 4,
        favorite: true,
        origins: ['America'],
        star: 4.5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jspw7eM8br0TySw-FHMOw-HBqwDOwM-G8Q&usqp=CAU',
        tags: ['Doughnut'],
      },
      {
        id: 2,
        name: 'Buffalo Wings',
        cookTime: '10-15',
        price: 9.9,
        favorite: false,
        origins: ['America'],
        star: 3.5,
        imageUrl: 'https://idata.hiloved.com/imgs/203f91efc7d02fe6-1024x681.jpg',
        tags: ['Chicken Fried'],       
      },
      {
        id: 3,
        name: 'Pizza Sicilian',
        cookTime: '45-50',
        price: 20.5,
        favorite: false,
        origins: ['America'],
        star: 4,
        imageUrl: 'https://blog.beemart.vn/wp-content/uploads/2021/03/EJ-tLcTUUAAS53m-1024x683.jpg',
        tags: ['Pizza'],
      },
      {
        id: 4,
        name: 'Crinkle-Cut Fries',
        cookTime: '10-15',
        price: 8,
        favorite: true,
        origins: ['France'],
        star: 5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUIkBOR2Uw8jeqKhS2UiAlqVC9FNKWK8ddTw&usqp=CAU',
        tags: ['French Fries'],
      },
      {
        id: 5,
        name: 'Beef Burgers',
        cookTime: '15-20',
        price: 10,
        favorite: true,
        origins: ['Germany'],
        star: 4.5,
        imageUrl: 'https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/520765216/classic-beef-burger.jpg?resize=800,586&quality=82&strip=all',
        tags: ['Burgers'],
      },
      {
        id: 6,
        name: 'Pizza Detroit',
        cookTime: '40-50',
        price: 15,
        favorite: false,
        origins: ['America'],
        star: 4.0,
        imageUrl: 'https://blog.beemart.vn/wp-content/uploads/2021/03/8db6bdf152bc3af395b4493b48ee60cc.jpg',
        tags: ['Pizza'],
      },
      {
        id: 7,
        name: 'Japanese Chicken Karaage',
        cookTime: '10-15',
        price: 4,
        favorite: false,
        origins: ['Japan'],
        star: 3,
        imageUrl: 'https://recipe30.com/wp-content/uploads/2021/07/Japanese-fried-chicken-1024x576.jpg',
        tags: ['Chicken Fried'],
      },
      {
        id: 8,
        name: 'Twist Doughnut',
        cookTime: '5-10',
        price: 2,
        favorite: false,
        origins: ['China, Korea'],
        star: 2.5,
        imageUrl: 'https://kitchencookbook.net/wp-content/uploads/2020/04/twisted1.jpg',
        tags: ['Doughnut'],
      },
      {
        id: 9,
        name: 'Turkey Burgers',
        cookTime: '15-20',
        price: 9,
        favorite: false,
        origins: ['Turkey'],
        star: 4,
        imageUrl: 'https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/184168996/turkey-burger.jpg?resize=800,586&quality=82&strip=all',
        tags: ['Burgers'],
      },
      {
        id: 10,
        name: 'Tater Tots',
        cookTime: '10-15',
        price: 5,
        favorite: false,
        origins: ['England'],
        star: 4,
        imageUrl: 'https://www.seriouseats.com/thmb/s8VfykaIZ3dlOyGvORob2ZNS4Xo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220202-tater-tots-vicky-wasik-10-8bb287641ace4c1a99dcf8ccdd69a1af.jpg',
        tags: ['French Fries'],
      },
      {
        id: 11,
        name: 'Pizza Greek',
        cookTime: '30-45',
        price: 25,
        favorite: true,
        origins: ['Greek'],
        star: 4.5,
        imageUrl: 'https://restaurantclicks.com/wp-content/uploads/2021/11/greek-pizza.jpg',
        tags: ['Pizza'],
      },
      {
        id: 12,
        name: 'Black Bean Burgers',
        cookTime: '15-20',
        price: 13,
        favorite: false,
        origins: ['America'],
        star: 3.5,
        imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2020/02/The-Best-Black-Bean-Burger-Recipe-1-1200.jpg',
        tags: ['Burgers'],
      },
      {
        id: 13,
        name: 'Tornado Fries',
        cookTime: '10-15',
        price: 10,
        favorite: true,
        origins: ['South Korea'],
        star: 5,
        imageUrl: 'https://www.firstforwomen.com/wp-content/uploads/sites/2/2022/09/Crispy-tornado-potatoes.jpg',
        tags: ['French Fries'],
      },
      {
        id: 14,
        name: 'American South Fried Chicken',
        cookTime: '10-15',
        price: 12,
        favorite: false,
        origins: ['South American'],
        star: 3.5,
        imageUrl: 'https://www.southernliving.com/thmb/YhaVnirpeQZOZWqIyU8N5wNrbwM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Cajun-Fried-Chicken_WD0146-S-c6ecd7d110284cabbdda2c2ed40a88ec.jpg',
        tags: ['Chicken Fried'],
      },
      {
        id: 15,
        name: 'Long John Doughnut',
        cookTime: '5-10',
        price: 6,
        favorite: false,
        origins: ['North America', 'French '],
        star: 4,
        imageUrl: 'https://midnightdonuts.com.au/wp-content/uploads/2019/05/Buy-Nutella-Long-Johns-Online-Sydney-Sydney-wide-Delivery-Midnight-Donuts-Sydney-Australia.jpg',
        tags: ['Doughnut'],
      },
      {
        id: 16,
        name: 'Cottage Fries',
        cookTime: '10-15',
        price: 12,
        favorite: true,
        origins: ['France'],
        star: 4.7,
        imageUrl: 'https://clubfoody.com/wp-content/uploads/2020/06/Cottage-Fries-10_Fotor.jpg',
        tags: ['French Fries'],
      },
      {
        id: 17,
        name: 'Cruller',
        cookTime: '15-20',
        price: 10,
        favorite: true,
        origins: ['French'],
        star: 4.7,
        imageUrl: 'https://media.istockphoto.com/id/1190493122/vi/anh/b%C3%A1nh-r%C3%A1n-ph%C3%A1p-ng%E1%BB%8Dt-ng%C3%A0o-t%E1%BB%B1-l%C3%A0m.jpg?s=612x612&w=0&k=20&c=9TCanqKK719fsJa_u-zN2S5AbarPXu2CCpqbIgP6Qkk=',
        tags: ['Doughnut'],
      },
      {
        id: 18,
        name: 'Veggie Burgers',
        cookTime: '15-20',
        price: 24,
        favorite: true,
        origins: ['Germany'],
        star: 4.7,
        imageUrl: 'https://www.familyfoodonthetable.com/wp-content/uploads/2015/09/Simplified-veggie-burgers-close-up.png',
        tags: ['Burgers'],
      },
      {
        id: 19,
        name: 'Korean Fried Chicken',
        cookTime: '10-15',
        price: 15,
        favorite: false,
        origins: ['Korea'],
        star: 4,
        imageUrl: 'https://asian-recipe.com/wp-content/uploads/2021/11/img_61a3f5d5a11f5.jpg',
        tags: ['Chicken Fried'],
      },
      {
        id: 20,
        name: 'Pizza St. Louis',
        cookTime: '45-50',
        price: 30,
        favorite: true,
        origins: ['Italy'],
        star: 5,
        imageUrl: 'https://blog.beemart.vn/wp-content/uploads/2021/03/st_louis_pizza-1243x746-1024x615.jpeg',
        tags: ['Pizza'],
      },
    ]
  }


}


