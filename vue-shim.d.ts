
// https://stackoverflow.com/questions/62173133/vue-instance-does-not-pick-up-shims-vue-d-ts-file
import Vue from 'vue';
import {UserRole} from "~/plugins/auth/ability";

export interface User {
  id: number;
  role: UserRole;
}
declare module "*.vue" {
  export default Vue;

  export class Auth {
    get user(): User;
  }
}
