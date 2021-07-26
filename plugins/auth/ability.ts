import {Ability, AbilityBuilder, AbilityClass} from "@casl/ability";

export enum UserRole {
  admin,
  customer,
  guest,
}

// export type Roles = 'customer' | 'admin' | 'guest';
export interface User {
  id: number;
  role: UserRole;
}
export type Users = User[];

// abilities definition
type Actions = 'manage' | 'read' | 'create' | 'update' | 'delete';
type Subjects = 'all' | User | Users | 'User' | 'Product' | 'Users' | 'Profile';

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;

// roles
type DefinePermissions = (user: User, build: AbilityBuilder<AppAbility>) => void;

const rolePermissions: Record<UserRole, DefinePermissions> = {
  [UserRole.customer](user, { can }) {
    can('read', 'Product');
    can('read', 'User', ['id'], { id: user.id });
    can('update', 'User', { id: user.id });
    can('manage', 'Profile');
  },
  [UserRole.admin](_user, { can }) {
    can('manage', 'all');
    can('manage', 'Profile');
  },
  [UserRole.guest](_user, { can }) {
    can('read', 'Product');
    can('manage', 'Profile');
  }
};

// define ability for a user
export function defineAbilityFor(user: User): AppAbility {
  const builder = new AbilityBuilder(AppAbility);

  const role = user?.role ?? UserRole.guest;
  if (typeof rolePermissions[role] === 'function') {
    rolePermissions[role](user, builder);
  } else {
    throw new TypeError(`Trying to use unknown role "${role}"`);
  }

  return builder.build();
}
