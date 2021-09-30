import Vue from "vue";
import VueRouter from "vue-router";
import admin from "./admin";
import home from "./home";

Vue.use(VueRouter);

var allRoutes = [];
allRoutes = allRoutes.concat(home, admin);

const routes = allRoutes;

export default new VueRouter({
    /*
     * NOTE: VueRouter "history" mode DOESN'T works for Cordova builds,
     * it is only to be used only for websites.
     *
     * If you decide to go with "history" mode, please also open /config/index.js
     * and set "build.publicPath" to something other than an empty string.
     * Example: '/' instead of current ''
     *
     * If switching back to default "hash" mode, don't forget to set the
     * build publicPath back to '' so Cordova builds work again.
     */

    mode: "history",

    routes: routes
});
