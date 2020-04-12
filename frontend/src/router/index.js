import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/districts",
    name: "Districts",
    component: () => import("../views/District.vue"),
    meta: {
      resource: "districts"
    }
  },

  // CRUD routes for HHT
  {
    path: "/hht",
    name: "Hht",
    component: () => import("../views/Hht/Index.vue"),
    meta: {
      resource: "hht"
    }
  },
  {
    path: "/hht/create",
    name: "CreateHht",
    component: () => import("../views/Hht/Form.vue"),
    meta: {
      resource: "hht"
    }
  },
  {
    path: "/hht/:id/edit",
    name: "EditHht",
    component: () => import("../views/Hht/Form.vue"),
    meta: {
      resource: "hht",
      mode: "edit"
    }
  },
  {
    path: "/hht/:id",
    name: "ShowHht",
    component: () => import("../views/Hht/Show.vue"),
    meta: {
      resource: "hht"
    }
  },

  // CRUD routes for HHP
  {
    path: "/hhp",
    name: "Hhp",
    component: () => import("../views/Hhp/Index.vue"),
    meta: {
      resource: "hhp"
    }
  },
  {
    path: "/hhp/create",
    name: "CreateHhp",
    component: () => import("../views/Hhp/Form.vue"),
    meta: {
      resource: "hhp"
    }
  },
  {
    path: "/hhp/:id/edit",
    name: "EditHhp",
    component: () => import("../views/Hhp/Form.vue"),
    meta: {
      resource: "hhp",
      mode: "edit"
    }
  },
  {
    path: "/hhp/:id",
    name: "ShowHhp",
    component: () => import("../views/Hhp/Show.vue"),
    meta: {
      resource: "hhp"
    }
  },

  // CRUD routes for Reports
  {
    path: "/repairs",
    name: "Repair",
    component: () => import("../views/Repairs/Index.vue"),
    meta: {
      resource: "repairs"
    }
  },
  {
    path: "/repairs/create",
    name: "CreateRepair",
    component: () => import("../views/Repairs/Form.vue"),
    meta: {
      resource: "repairs"
    }
  },
  {
    path: "/repairs/:id/edit",
    name: "EditRepair",
    component: () => import("../views/Repairs/Form.vue"),
    meta: {
      resource: "repairs",
      mode: "edit"
    }
  },
  {
    path: "/repairs/:id",
    name: "ShowRepair",
    component: () => import("../views/Repairs/Show.vue"),
    meta: {
      resource: "repairs"
    }
  },

  // CRUD routes for PMA
  {
    path: "/pma",
    name: "Pma",
    component: () => import("../views/Pma/Index.vue"),
    meta: {
      resource: "pma"
    }
  },
  {
    path: "/pma/create",
    name: "CreatePma",
    component: () => import("../views/Pma/Form.vue"),
    meta: {
      resource: "pma"
    }
  },
  {
    path: "/pma/:id/edit",
    name: "EditPma",
    component: () => import("../views/Pma/Form.vue"),
    meta: {
      resource: "pma",
      mode: "edit"
    }
  },
  {
    path: "/pma/:id",
    name: "ShowPma",
    component: () => import("../views/Pma/Show.vue"),
    meta: {
      resource: "pma"
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
