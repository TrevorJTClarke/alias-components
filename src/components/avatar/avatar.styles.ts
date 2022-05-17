import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;

    --size: 3rem;
    
    --pixel-size: 1px;
    --pixel-box-shadow: 0 0 0 rgba(0,0,0,0);
    --pixel-transform: scale(1);
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
    overflow: hidden;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar--hex {
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTgycHgiIGhlaWdodD0iMjAxcHgiIHZpZXdCb3g9IjAgMCAxODIgMjAxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MC4xICg4ODEzMykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aGV4YWdvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik01NS43ODU3ODg5LDE5MS40MDAyMDkgQzQ2LjU5MDM4NjYsMTkxLjQwMDIwOSAzNS43MjMwOTMsMTg0LjcxMjY0NCAzMC43MDc0MTksMTc3LjE4OTEzMyBMLTUuMjM4MjQ0NTEsMTE1LjMyOTE1NCBDLTEwLjI1MzkxODUsMTA2Ljk2OTY5NyAtMTAuMjUzOTE4NSw5NC40MzA1MTIgLTUuMjM4MjQ0NTEsODYuMDcxMDU1NCBMMzAuNzA3NDE5LDI0LjIxMTA3NjMgQzM1LjcyMzA5MywxNS44NTE2MTk2IDQ2LjU5MDM4NjYsMTAgNTUuNzg1Nzg4OSwxMCBMMTI2Ljg0MTE3LDEwIEMxMzYuMDM2NTczLDEwIDE0Ni45MDM4NjYsMTYuNjg3NTY1MyAxNTEuOTE5NTQsMjQuMjExMDc2MyBMMTg3Ljg2NTIwNCw4Ni4wNzEwNTU0IEMxOTIuMDQ0OTMyLDk0LjQzMDUxMiAxOTIuMDQ0OTMyLDEwNi45Njk2OTcgMTg3Ljg2NTIwNCwxMTUuMzI5MTU0IEwxNTEuOTE5NTQsMTc3LjE4OTEzMyBDMTQ3LjczOTgxMiwxODUuNTQ4NTg5IDEzNi4wMzY1NzMsMTkxLjQwMDIwOSAxMjYuODQxMTcsMTkxLjQwMDIwOSBMNTUuNzg1Nzg4OSwxOTEuNDAwMjA5IFoiIGlkPSJoZXhhZ29uIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkxLjAwMDAwMCwgMTAwLjcwMDEwNCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTkxLjAwMDAwMCwgLTEwMC43MDAxMDQpICI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=);
    mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTgycHgiIGhlaWdodD0iMjAxcHgiIHZpZXdCb3g9IjAgMCAxODIgMjAxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MC4xICg4ODEzMykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aGV4YWdvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik01NS43ODU3ODg5LDE5MS40MDAyMDkgQzQ2LjU5MDM4NjYsMTkxLjQwMDIwOSAzNS43MjMwOTMsMTg0LjcxMjY0NCAzMC43MDc0MTksMTc3LjE4OTEzMyBMLTUuMjM4MjQ0NTEsMTE1LjMyOTE1NCBDLTEwLjI1MzkxODUsMTA2Ljk2OTY5NyAtMTAuMjUzOTE4NSw5NC40MzA1MTIgLTUuMjM4MjQ0NTEsODYuMDcxMDU1NCBMMzAuNzA3NDE5LDI0LjIxMTA3NjMgQzM1LjcyMzA5MywxNS44NTE2MTk2IDQ2LjU5MDM4NjYsMTAgNTUuNzg1Nzg4OSwxMCBMMTI2Ljg0MTE3LDEwIEMxMzYuMDM2NTczLDEwIDE0Ni45MDM4NjYsMTYuNjg3NTY1MyAxNTEuOTE5NTQsMjQuMjExMDc2MyBMMTg3Ljg2NTIwNCw4Ni4wNzEwNTU0IEMxOTIuMDQ0OTMyLDk0LjQzMDUxMiAxOTIuMDQ0OTMyLDEwNi45Njk2OTcgMTg3Ljg2NTIwNCwxMTUuMzI5MTU0IEwxNTEuOTE5NTQsMTc3LjE4OTEzMyBDMTQ3LjczOTgxMiwxODUuNTQ4NTg5IDEzNi4wMzY1NzMsMTkxLjQwMDIwOSAxMjYuODQxMTcsMTkxLjQwMDIwOSBMNTUuNzg1Nzg4OSwxOTEuNDAwMjA5IFoiIGlkPSJoZXhhZ29uIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkxLjAwMDAwMCwgMTAwLjcwMDEwNCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTkxLjAwMDAwMCwgLTEwMC43MDAxMDQpICI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=);
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  .avatar__pixels {
    position: absolute;
    content: '';
    left: 0px;
    top: 0px;
    width: var(--pixel-size);
    height: var(--pixel-size);
    background: transparent;
    box-shadow: var(--pixel-box-shadow);
    transform: var(--pixel-transform);
  }
`;
