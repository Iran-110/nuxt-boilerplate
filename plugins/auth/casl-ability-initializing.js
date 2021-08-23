import { ability, defineAbilityFor } from '~/plugins/auth/ability';

export default function ({ $auth }) {
  // initializing rules.
  const {rules} = defineAbilityFor($auth.$storage.getState('user') || {});
  ability.update(rules);
}
