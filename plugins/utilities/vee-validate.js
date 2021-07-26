import {extend, configure} from 'vee-validate';
import {required} from 'vee-validate/dist/rules';

// Add your extend functions here.
extend("required", required);

// plugin configuration for localization (i18n)
export default function VeeValidatePlugin({ app }) {
  configure({
    defaultMessage: (_, values) =>
      app.i18n.t(`validations.${values._rule_}`, values)
  });
}
