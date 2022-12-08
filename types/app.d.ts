declare type ItemIcon = {
  name: string,
  size?: string,
  class?: string
}

declare interface MenuItem {
  icon: ItemIcon,
  label: string,
  link?: string,
  external?: boolean,
  action?: () => {},
}

declare interface AppMenuItem {
  icon: ItemIcon,
  label: string,
  title: string,
  link: string,
}
