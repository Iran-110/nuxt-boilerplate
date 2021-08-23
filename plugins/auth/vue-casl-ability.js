import Vue from "vue";
import {abilitiesPlugin} from '@casl/vue';
import { AppAbility } from '~/plugins/auth/ability';

Vue.use(abilitiesPlugin, AppAbility);
