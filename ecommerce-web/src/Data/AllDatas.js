import ao1 from '../Assets/ao1.webp';
import ao2 from '../Assets/ao2.webp';
import ao3 from '../Assets/ao3.webp';
import ao4 from '../Assets/ao4.webp';
import ao5 from '../Assets/ao5.webp';
import ao6 from '../Assets/ao6.webp';
import quan1 from '../Assets/quan1.webp';
import quan2 from '../Assets/quan2.webp';
import mu1 from '../Assets/mu1.webp';
import mu2 from '../Assets/mu2.webp';
import ao7 from '../Assets/ao7.webp';
import ao8 from '../Assets/ao8.jpg';
import ao9 from '../Assets/ao9.webp';
import ao10 from '../Assets/ao10.webp';
import ao11 from '../Assets/ao11.webp';
import ao12 from '../Assets/ao12.webp';
import jacket1 from '../Assets/jacket1.webp';
import jacket2 from '../Assets/jacket2.webp';
import jacket3 from '../Assets/jacket3.webp';
import jacket4 from '../Assets/jacket4.webp';
import jacket5 from '../Assets/jacket5.webp';
import jacket6 from '../Assets/jacket6.webp';
import mu3 from '../Assets/mu3.webp';
import mu4 from '../Assets/mu4.webp';
import quan3 from '../Assets/quan3.webp';
import quan4 from '../Assets/quan4.webp';
import quan5 from '../Assets/quan5.webp';
import quan6 from '../Assets/quan6.webp';
import gallery_item_1 from '../Assets/gallery_item_1.webp';
import gallery_item_2 from '../Assets/gallery_item_2.webp';
import gallery_item_3 from '../Assets/gallery_item_3.webp';
import gallery_item_4 from '../Assets/gallery_item_4.webp';
import gallery_item_5 from '../Assets/gallery_item_5.webp';
import gallery_item_6 from '../Assets/gallery_item_6.webp';
import gallery_item_7 from '../Assets/gallery_item_7.webp';
import gallery_item_8 from '../Assets/gallery_item_8.webp';
import blog1 from '../Assets/blog1.webp';
import blog2 from '../Assets/blog2.webp'
import blog3 from '../Assets/blog3.webp'
import blog4 from '../Assets/blog4.jpg'
import blog5 from '../Assets/blog5.webp'
import blog6 from '../Assets/blog6.webp'
import blog7 from '../Assets/blog7.webp'
const Items = [
      {
        id: 1,
        des:"Maverik Mesh Football Jersey",
        price: "49",
        catergory: 't-shirt',
        detail: "Form Oversize",
        front: ao1,
        back: ao2 
      },
      {
        id: 2,
        des:"Kaki Jacket",
        price: "90",
        catergory: 'jacket',
        detail: "Form Oversize",
        front: ao3,
        back: ao4
      },
      {
        id: 3,
        des:"Faded Girl T-shirt",
        price: "49",
        catergory: 't-shirt',
        detail: "Form Oversize",
        front: ao5,
        back: ao6
      },
      {
        id: 4,
        des:"Distressed Vintage Hat",
        price: "40",
        catergory: 'hat',
        detail: "100% cotton, one size",
        front: mu1,
        back: mu2
      }, 
      {
        id: 5,
        des:"Kaki Work Pants",
        price: "80",
        catergory: 'pant',
        detail: "100% kaki",
        front: quan1,
        back: quan2
      },
      {
        id: 6,
        des: "What Goes Around Comes Around",
        price : "60",
        catergory: 't-shirt',
        detail: "100% cotton, fit true to size",
        front: ao7,
        back: ao8,
      },
      {
        id: 7 ,
        des: "MAVERIK MESH FOOTBALL JERSEY (GREY)" ,
        price: "49",
        catergory: 't-shirt',
        detail: "100% cotton, fit true to size",
        front: ao9,
        back: ao10,
      },
      {
        id: 8,
        des : "Know where",
        price : "59",
        catergory: 't-shirt',
        detail: "100% cotton, fit true to size",
        front: ao11,
        back: ao12,
      },
      {
        id: 9,
        des: "Faux Leather / Kaki Work Jacket",
        price : "99",
        catergory: 'jacket',
        detail: "Faux Leather : 100% Polyester with PVC Plastic",
        front: jacket1,
        back: jacket2,
      },
      {
        id: 10,
        des: "Kaki Work Jacket ( Black )",
        price : "99",
        catergory: 'jacket',
        detail: "Lining : 100% Polyester ",
        front: jacket3,
        back: jacket4,
      },
      {
        id: 11,
        des : "MULTIES LEATHER POCKET WORK JACKET ( BLACK )",
        price : "99",
        catergory: 'jacket',
        detail: "Kaki 100% cotton",
        front: jacket5,
        back: jacket6,
      },
      {
        id: 12,
        des : "Maverik Embroidered Logo Canvas Hat",
        price : "35",
        catergory: 'hat',
        detail: "Kaki 100% cotton",
        front: mu3,
        back: mu4,
      },
      {
        id: 13,
        des : "VINTAGE CARGO FLARED JEANS",
        price : "86",
        catergory: 'pant',
        detail: "Kaki 100% cotton",
        front: quan3,
        back: quan4,
      },
      {
        id: 14,
        des : "VINTAGE WASHED STRAIGHT JEANS",
        price : "86",
        catergory: 'pant',
        detail: "Kaki 100% cotton",
        front: quan5,
        back: quan6,
      }
      
    ]

const gallery = [
  {
    id: 1,
    src : gallery_item_1 
},
{
  id: 2,
  src : gallery_item_2 
},
{
  id: 3,
  src : gallery_item_3 
},
{
  id: 4,
  src : gallery_item_4 
},
{
  id: 5,
  src : gallery_item_5 
},
{
  id: 6,
  src : gallery_item_6 
},
{
  id: 7,
  src : gallery_item_7 
},
{
  id: 8,
  src : gallery_item_8 
},
]
const gallery2= [
  {
    id: 1,
    src: blog1, 
  },
  {
    id: 2,
    src: blog6
  },
  {
    id: 3,
    src: blog3
  },
  {
    id: 4,
    src:  blog4
  },
  {
    id: 5,
    src: blog5
  },
  {
    id: 6,
    src: blog2
  },
 
  {
    id: 7,
    src: blog7
  },
 
 
]
function getItemData(id){
  let itemData = Items.find(Item=> Item.id ===id);
  if(itemData == undefined){
    console.log("error")
    return undefined
  }
  return itemData
}
export {Items, getItemData, gallery, gallery2};