import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --color-primary: #041433;
    --color-secondary: #f9f9f9;
    --color-login: #686868;
    --color-togle: #686868;
    --color-border-icon: rgba(104, 104, 104, 0.4);
    --color-text-menu: #aeb6c1;
    --color-complement3: #a9095e;
    --color-complement4: #2a5a75;
    --color-black: #000;
    --color-white: #fff;
    --color-sucess: #32917b;
    --color-gray: #f2f2f2;
    --color-gray-dark: #ebebeb;
    --color-gray-light: #e3e3e3;
    --color-border: #cccccc;
    --color-gray-complement1: #adadad;
    --color-gray-complement2: #7f7f7f;
    --divider: #343434;

  --control-width: 36px;
  --control-height: 36px;
  --center-control-width: 48px;
  --center-control-height: 48px;
  --title-width: auto;
  --title-max-width: 620px;
  --title-height: 100%;
  --control-margin: 6px;
  --time-font-size: 15px;
  --title-font-size: 20px;
  --title-line-height: 28px;
  --title-font-weight: 800;
  --subtitle-font-size: 12px;
  --header-spacer: 48px;
  --header-height: auto;
  --header-min-height: 260px;
  --footer-height: 200px;
  --footer-flex-wrap: wrap;
  --footer-left-order: 0;
  --footer-center-order: 1;
  --footer-right-order: 2;
  --footer-center-width: 100%;
  --footer-center-position: absolute;
  --footer-center-position-top: 33%;
  --footer-center-position-bottom: 33%;
  --footer-center-animation: BTMPFadeInOpacity;
  --footer-padding: 0px 20px;
  --audio-subtitles-drawer-check-size: 13px;
  --audio-subtitles-drawer-padding-top: 47px;
  --audio-subtitles-drawer-padding-bottom: 34px;
  --audio-subtitles-drawer-list-width: 164px;
  --audio-subtitles-drawer-list-max-height: 175px;
  --audio-subtitles-drawer-second-list-margin-left: 56px;
  --audio-subtitles-drawer-back-top: 15px;
  --audio-subtitles-drawer-back-left: 20px;
  --audio-subtitles-drawer-options-top: 21px;
  --audio-subtitles-drawer-options-right: 26px;
  --audio-subtitles-drawer-settings-menu-header-height: 18px;
  --audio-subtitles-drawer-settings-menu-item-padding-left: 16px;
  --audio-subtitles-drawer-settings-menu-item-font-size: 11px;
  --audio-subtitles-drawer-settings-menu-item-line-height: 1.5;
  --audio-subtitles-drawer-settings-menu-item-font-weight: 800;
  --audio-subtitles-drawer-options-padding-top: 18px;
  --audio-subtitles-drawer-options-title-margin-left: 64px;
  --audio-subtitles-drawer-options-title-font-size: 20px;
  --audio-subtitles-drawer-options-title-font-weight: 900;
  --audio-subtitles-drawer-options-back-top: 15px;
  --audio-subtitles-drawer-options-back-left: 20px;
  --subtitle-styler-padding-top: 12px;
  --subtitle-styler-padding-right: 20px;
  --subtitle-styler-padding-left: 20px;
  --overlay-ratings-list-width: 342px;
  --overlay-ratings-logo-width: 93px;
  --overlay-skip-button-right: -30px;
  --overlay-skip-button-bottom: 60px;
  --overlay-skip-button-scale: 0.5;
  --progress-bar-preview-image-width-1_33: 135px;
  --progress-bar-preview-image-width-1_85: 180px;
  --progress-bar-preview-image-width-2_35: 180px;
  --progress-bar-preview-font-size: 15px;
  --progress-bar-preview-line-height: 1.53;

}
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: 0;
}
html {
    scroll-behavior: smooth;
}

body {
   margin: 0;
    padding: 0;
    background-color: var(--color-primary);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: top;
    color: var(--color-secondary);

}

body,
button,
input,
select {
    font-family: Avenir Roman, sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
   font-weight: 500;
}

button {
   cursor: pointer;
}

@media only screen and (max-width: 768px) {
   body {
    font-size: 16px;
}
@media only screen and (max-width: 479px) {
   font-size: 14px;
}
}

@media only screen and (min-width: 480px) and (max-width: 768px) {
   body {
        font-size: 15px;
    }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
   body {
        font-size: 16px;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1439px) {
   body {
        font-size: 16px;
    }
}

`;
