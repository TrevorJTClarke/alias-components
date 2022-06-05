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
    -webkit-mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQ4cHgiIGhlaWdodD0iMjIycHgiIHZpZXdCb3g9IjAgMCAyNDggMjIyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGcgaWQ9ImFsaWFzLmNhdF9tYXNrIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguMDAwMDAwLCAtNTQuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xODgsNDYuMjM3NjA0MyBMMjY2Ljg1MTI1Miw5MS43NjIzOTU3IEMyNzYuNzUyMDg2LDk3LjQ3ODY0NTEgMjgyLjg1MTI1MiwxMDguMDQyNzEgMjgyLjg1MTI1MiwxMTkuNDc1MjA5IEwyODIuODUxMjUyLDIxMC41MjQ3OTEgQzI4Mi44NTEyNTIsMjIxLjk1NzI5IDI3Ni43NTIwODYsMjMyLjUyMTM1NSAyNjYuODUxMjUyLDIzOC4yMzc2MDQgTDE4OCwyODMuNzYyMzk2IEMxNzguMDk5MTY2LDI4OS40Nzg2NDUgMTY1LjkwMDgzNCwyODkuNDc4NjQ1IDE1NiwyODMuNzYyMzk2IEw3Ny4xNDg3NDgzLDIzOC4yMzc2MDQgQzY3LjI0NzkxMzksMjMyLjUyMTM1NSA2MS4xNDg3NDgzLDIyMS45NTcyOSA2MS4xNDg3NDgzLDIxMC41MjQ3OTEgTDYxLjE0ODc0ODMsMTE5LjQ3NTIwOSBDNjEuMTQ4NzQ4MywxMDguMDQyNzEgNjcuMjQ3OTEzOSw5Ny40Nzg2NDUxIDc3LjE0ODc0ODMsOTEuNzYyMzk1NyBMMTU2LDQ2LjIzNzYwNDMgQzE2NS45MDA4MzQsNDAuNTIxMzU0OSAxNzguMDk5MTY2LDQwLjUyMTM1NDkgMTg4LDQ2LjIzNzYwNDMgWiIgaWQ9IkFsaWFzX01hc2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3Mi4wMDAwMDAsIDE2NS4wMDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTcyLjAwMDAwMCwgLTE2NS4wMDAwMDApICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQ4cHgiIGhlaWdodD0iMjIycHgiIHZpZXdCb3g9IjAgMCAyNDggMjIyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGcgaWQ9ImFsaWFzLmNhdF9tYXNrIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguMDAwMDAwLCAtNTQuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xODgsNDYuMjM3NjA0MyBMMjY2Ljg1MTI1Miw5MS43NjIzOTU3IEMyNzYuNzUyMDg2LDk3LjQ3ODY0NTEgMjgyLjg1MTI1MiwxMDguMDQyNzEgMjgyLjg1MTI1MiwxMTkuNDc1MjA5IEwyODIuODUxMjUyLDIxMC41MjQ3OTEgQzI4Mi44NTEyNTIsMjIxLjk1NzI5IDI3Ni43NTIwODYsMjMyLjUyMTM1NSAyNjYuODUxMjUyLDIzOC4yMzc2MDQgTDE4OCwyODMuNzYyMzk2IEMxNzguMDk5MTY2LDI4OS40Nzg2NDUgMTY1LjkwMDgzNCwyODkuNDc4NjQ1IDE1NiwyODMuNzYyMzk2IEw3Ny4xNDg3NDgzLDIzOC4yMzc2MDQgQzY3LjI0NzkxMzksMjMyLjUyMTM1NSA2MS4xNDg3NDgzLDIyMS45NTcyOSA2MS4xNDg3NDgzLDIxMC41MjQ3OTEgTDYxLjE0ODc0ODMsMTE5LjQ3NTIwOSBDNjEuMTQ4NzQ4MywxMDguMDQyNzEgNjcuMjQ3OTEzOSw5Ny40Nzg2NDUxIDc3LjE0ODc0ODMsOTEuNzYyMzk1NyBMMTU2LDQ2LjIzNzYwNDMgQzE2NS45MDA4MzQsNDAuNTIxMzU0OSAxNzguMDk5MTY2LDQwLjUyMTM1NDkgMTg4LDQ2LjIzNzYwNDMgWiIgaWQ9IkFsaWFzX01hc2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3Mi4wMDAwMDAsIDE2NS4wMDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTcyLjAwMDAwMCwgLTE2NS4wMDAwMDApICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
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

  .avatar-group al-avatar::part(base) {
    border: solid 2px rgba(0,0,0,0.7);
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
