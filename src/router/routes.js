import Register from "../pages/Register.vue";
const routes = [
  {
    path: "/",
    component: () => import("layouts/Search.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      // { path: '/test',name:'test', component: () => import('src/components/product/ProductBox.vue') },

      {
        path: "/customer",
        name: "customer",
        component: () => import("src/pages/customer/Customer.vue"),
      },
      {
        path: "/customer/:customerId",
        name: "detail",
        component: () => import("src/pages/customer/Detail.vue"),
      },
      {
        path: "/product",
        name: "product",
        component: () => import("src/pages/product/Product.vue"),
      },
      //  { path : '/product/:id', name :'product', props:true, component:() => import('src/pages/product/Product.vue')},
      {
        path: "/product/1",
        name: "product_1",
        component: () => import("src/pages/product/Product_1.vue"),
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("src/pages/customer/Contact.vue"),
      },
      //  Admin

      {
        path: "/admin",
        name: "admin",
        component: () => import("src/pages/admin/Admin.vue"),
      },

      {
        path: "/admin/message",
        name: "adminMessage",
        component: () => import("src/pages/admin/Message.vue"),
      },
      {
        path: "/admin/bill",
        name: "adminBill",
        component: () => import("src/pages/admin/Bill.vue"),
      },
      {
        path: "/admin/history",
        name: "adminHistory",
        component: () => import("src/pages/admin/OrderHistory.vue"),
      },
      {
        path: "/admin/category/add",
        name: "addCategory",
        component: () => import("src/pages/product/AddCategory.vue"),
      },
      {
        path: "/admin/product/add",
        name: "addProduct",
        component: () => import("src/pages/product/AddProduct.vue"),
      },
      {
        path: "/admin/product",
        name: "adminProduct",
        component: () => import("src/pages/admin/ProductAdmin.vue"),
      },

      {
        path: "/admin/product/add/:id",
        name: "categoryDetail",
        component: () => import("src/pages/product/AddProduct.vue"),
      },
      {
        path: "/admin/category/edit",
        name: "editCategory",
        component: () => import("src/pages/product/EditCategory.vue"),
      },
      {
        path: "/admin/product/edit",
        name: "editProduct",
        component: () => import("src/pages/product/EditProduct.vue"),
      },
      {
        path: "/admin/reservation",
        name: "adminResieveren",
        component: () => import("src/pages/admin/ReservierungManager.vue"),
      },
      {
        path: "/onlyTuan/createNewUser",
        name: "createNewUser",
        component: () => import("src/pages/admin/CreateUser.vue"),
      },

      //  Admin end
      //  {path : '/loginIn', name : 'loginIn', component:() => import('src/pages/admin/LoginINte.vue')},
      {
        path: "/login",
        name: "login",
        component: () => import("src/pages/admin/Login.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("src/pages/customer/Contact.vue"),
      },

      //
      {
        path: "/shopping",
        name: "shopping",
        component: () => import("src/pages/shopping/Cart.vue"),
      },
      {
        path: "/thank",
        name: "thank",
        component: () => import("src/pages/Thank.vue"),
      },
      {
        path: "/reservation",
        name: "resevation",
        component: () => import("src/pages/customer/Reservation.vue"),
      },
      // Information


    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

// routes.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   // const loggedIn = localStorage.getItem('user');

//   // if (authRequired && !loggedIn) {
//   //   return next('/login');
//   // }

//   if (authRequired) {
//     return next('/login');
//   }

//   next();
// })

export default routes;
