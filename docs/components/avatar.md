# Avatar

[component-header:al-avatar]

Avatars are used to represent a person or object.

By default, a generic icon will be shown. You can personalize avatars by adding custom icons, initials, and images. You should always provide a `label` for assistive devices.

```html preview
<al-avatar label="User avatar"></al-avatar>
```

```jsx react
import { AlAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => <AlAvatar label="User avatar" />;
```

## Examples

### Address

To use an image for the avatar, set the `image` and `label` attributes. This will take priority and be shown over initials and icons.

```html preview
<al-avatar
  address="cosmos196ax4vc0lwpxndu9dyhvca7jhxp70rmcfhxsrt"
  label="Avatar generated from a cosmos address"
></al-avatar>
<al-avatar
  address="juno1qlmwjkg7uu4awajw5aunctjdce9q657j0rrdpy"
  label="Avatar generated from a juno address"
></al-avatar>
```

```jsx react
import { AlAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <AlAvatar
    address="cosmos196ax4vc0lwpxndu9dyhvca7jhxp70rmcfhxsrt"
    label="Avatar generated from a cosmos address"
  />
  <AlAvatar
    address="juno1qlmwjkg7uu4awajw5aunctjdce9q657j0rrdpy"
    label="Avatar generated from a juno address"
  />
);
```

### Images

To use an image for the avatar, set the `image` and `label` attributes. This will take priority and be shown over initials and icons.

```html preview
<al-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></al-avatar>
```

```jsx react
import { AlAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <AlAvatar
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  />
);
```

### Initials

When you don't have an image to use, you can set the `initials` attribute to show something more personalized than an icon.

```html preview
<al-avatar initials="SL" label="Avatar with initials: SL"></al-avatar>
```

```jsx react
import { AlAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => <AlAvatar initials="SL" label="Avatar with initials: SL" />;
```

### Custom Icons

When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the `icon` slot.

```html preview
<al-avatar label="Avatar with an image icon">
  <al-icon slot="icon" name="image"></al-icon>
</al-avatar>

<al-avatar label="Avatar with an archive icon">
  <al-icon slot="icon" name="archive"></al-icon>
</al-avatar>

<al-avatar label="Avatar with a briefcase icon">
  <al-icon slot="icon" name="briefcase"></al-icon>
</al-avatar>
```

```jsx react
import { AlAvatar, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <AlAvatar label="Avatar with an image icon">
      <SlIcon slot="icon" name="image" />
    </AlAvatar>

    <AlAvatar label="Avatar with an archive icon">
      <SlIcon slot="icon" name="archive" />
    </AlAvatar>

    <AlAvatar label="Avatar with a briefcase icon">
      <SlIcon slot="icon" name="briefcase" />
    </AlAvatar>
  </>
);
```

### Shapes

Avatars can be shaped using the `shape` attribute.

```html preview
<al-avatar shape="square" label="Square avatar"></al-avatar>
<al-avatar shape="rounded" label="Rounded avatar"></al-avatar>
<al-avatar shape="circle" label="Circle avatar"></al-avatar>
<al-avatar shape="hex" label="Hex avatar"></al-avatar>
```

```jsx react
import { AlAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <AlAvatar shape="square" label="Square avatar" />
    <AlAvatar shape="rounded" label="Rounded avatar" />
    <AlAvatar shape="circle" label="Circle avatar" />
    <AlAvatar shape="hex" label="Hex avatar" />
  </>
);
```

### Avatar Groups

You can group avatars with a few lines of CSS.

```html preview
<div class="avatar-group">
  <al-avatar
    image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
    label="Avatar 1 of 4"
  ></al-avatar>

  <al-avatar
    image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 2 of 4"
  ></al-avatar>

  <al-avatar
    image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 3 of 4"
  ></al-avatar>

  <al-avatar
    image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
    label="Avatar 4 of 4"
  ></al-avatar>
</div>

<style>
  .avatar-group al-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group al-avatar::part(base) {
    border: solid 2px var(--al-color-neutral-0);
  }
</style>
```

```jsx react
import { AlAvatar, SlIcon } from '@shoelace-style/shoelace/dist/react';

const css = `
  .avatar-group al-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group al-avatar::part(base) {
    border: solid 2px var(--al-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="avatar-group">
      <AlAvatar
        image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
        label="Avatar 1 of 4"
      />

      <AlAvatar
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 2 of 4"
      />

      <AlAvatar
        image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 3 of 4"
      />

      <AlAvatar
        image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
        label="Avatar 4 of 4"
      />
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:al-avatar]
