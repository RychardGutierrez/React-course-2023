export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const;

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    filter: 'all',
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    filter: 'active',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    filter: 'completed',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
} as const;
