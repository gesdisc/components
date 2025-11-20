import {
  i
} from "./chunk.C7DL2MIN.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/avatar/avatar.styles.ts
init_dirname();
init_buffer();
init_process();
var avatar_styles_default = i`
    :host {
        display: inline-block;

        --size: var(--terra-avatar-size-medium);
    }

    .avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: var(--size);
        height: var(--size);
        background-color: var(--terra-avatar-background-color);
        font-family: var(--terra-avatar-font-family);
        font-size: calc(var(--size) * 0.5);
        font-weight: var(--terra-avatar-font-weight);
        color: var(--terra-avatar-color);
        user-select: none;
        -webkit-user-select: none;
        vertical-align: middle;
    }

    .avatar--circle,
    .avatar--circle .avatar__image {
        border-radius: var(--terra-border-radius-circle);
    }

    .avatar--rounded,
    .avatar--rounded .avatar__image {
        border-radius: var(--terra-border-radius-medium);
    }

    .avatar--square {
        border-radius: 0;
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
`;

export {
  avatar_styles_default
};
