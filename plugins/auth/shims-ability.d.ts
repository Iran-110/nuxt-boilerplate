import { AppAbility } from './ability';

declare module 'vue/types/vue' {
  interface Vue {
    // @ts-ignore
    $ability: AppAbility;
    $can(this: this, ...args: Parameters<this['$ability']['can']>): boolean;
  }
}
