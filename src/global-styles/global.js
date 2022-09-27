import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }


    body {
        min-height: 100vh;
        width: 100vw;
    }

`;

export const light = {
  colors: {
    // Backgrounds
    bgMain: "hsl(240, 27%, 98%)",
    bgHeader: "hsl(231, 20%, 27%)",
    bgInvoiceItem: "hsl(0, 0%, 100%)",
    bgInvoiceItemShadow: "hsla(231, 38%, 45%, 10%)",
    bgView: "hsl(0, 0%, 100%)",
    bgViewShadow: "hsl(231, 38%, 45%, 10%)",
    bgViewSummary: "hsl(231, 67%, 99%)",
    bgViewSummaryFooter: "hsl(231, 20%, 27%)",
    bgEdit: "hsl(0, 0%, 100%)",
    bgForm: "hsl(0, 0%, 100%)",
    bgFormScroll: "hsl(231, 75%, 93%)",
    bgInput: "hsl(0, 0%, 100%)",
    bgInputBorder: "hsl(231, 75%, 93%)",
    bgSelectBg: "hsl(0, 0%, 100%)",
    bgSelectShadow: "hsla(231, 38%, 45%, 25%)",
    bgSelectBorder: "hsl(231, 75%, 93%)",
    bgFilter: "hsl(0, 0%, 100%)",
    bgFilterBox: "hsl(231, 73%, 93%)",
    bgFilterShadow: "rgba(72, 84, 159, 25%)",
    bgDeleteModal: "hsl(0, 0%, 100%)",
    // Typography
    textPrimary: "hsl(231, 28%, 7%)",
    textSecondary: "hsl(231, 36%, 63%)",
    textTertiary: "hsl(231, 20%, 61%)",
    // Statuses
    statusPaid: "hsl(160, 67%, 52%)",
    statusPaidBg: "hsla(160, 67%, 52%, 5.71%)",
    statusPending: "hsl(34, 100%, 50%)",
    statusPendingBg: "hsla(34, 100%, 50%, 5.71%)",
    statusDraft: "hsl(231, 20%, 27%)",
    statusDraftBg: "hsla(231, 20%, 27%, 5.71%)",
    // Buttons
    btnPrimary: "hsl(252, 94%, 67%)",
    btnPrimaryHover: "hsl(252, 100%, 73%)",
    btnSecondary: "hsl(231, 67%, 99%)",
    btnSecondaryHover: "hsl(231, 73%, 93%)",
    btnSave: "hsl(231, 20%, 27%)",
    btnSaveHover: "hsl(231, 28%, 7%)",
    btnDelete: "hsl(0, 80%, 63%)",
    btnDeleteHover: "hsl(0, 100%, 80%)",
    btnNewItem: "hsl(231, 67%, 99%)",
    btnNewItemHover: "hsl(231, 73%, 93%)",
    btnTheme: "hsl(231, 36%, 63%)",
    btnThemeHover: "hsl(231, 75%, 93%)",
    // Shared
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
    blackAlpha50: "hsla(0, 0%, 0%, 50%)",
    purple: "hsl(252, 94%, 67%)",
    purpleLight: "hsl(252, 100%, 73%)",
    red: "hsl(0, 80%, 63%)",
    redLight: "hsl(0, 100%, 80%)",
    blueGrayish: "hsl(231, 36%, 63%)",
    grayLight: "hsl(231, 20%, 36%)",
    grayMedium: "hsl(225, 14%, 53%)",
  },
};

export const dark = {
  colors: {
    // Backgrounds
    bgMain: "hsl(231, 30%, 11%)",
    bgHeader: "hsl(233, 31%, 17%)",
    bgInvoiceItem: "hsl(233, 31%, 17%)",
    bgInvoiceItemShadow: "hsla(231, 38%, 45%, 10%)",
    bgView: "hsl(231, 31%, 17%)",
    bgViewShadow: "hsla(231, 38%, 45%, 10%)",
    bgViewSummary: "hsl(233, 30%, 21%)",
    bgViewSummaryFooter: "hsl(231, 28%, 7%)",
    bgEdit: "hsl(233, 30%, 11%)",
    bgForm: "hsl(231, 30%, 11%)",
    bgFormScroll: "hsl(233, 30%, 21%)",
    bgInput: "hsl(233, 31%, 17%)",
    bgInputBorder: "hsl(233, 30%, 21%)",
    bgSelectBg: "hsl(233, 30%, 21%)",
    bgSelectShadow: "hsla(0, 0%, 0%, 25%)",
    bgSelectBorder: "hsl(233, 31%, 17%)",
    bgFilter: "hsl(233, 30%, 21%)",
    bgFilterBox: "hsl(233, 31%, 17%)",
    bgFilterShadow: "rgba(0, 0, 0, 25%)",
    bgDeleteModal: "hsl(233, 31%, 17%)",
    // Typography
    textPrimary: "hsl(0, 0%, 100%)",
    textSecondary: "hsl(231, 75%, 93%)",
    textTertiary: "hsl(231, 75%, 93%)",
    // Statuses
    statusPaid: "hsl(160, 67%, 52%)",
    statusPaidBg: "hsla(160, 67%, 52%, 5.71%)",
    statusPending: "hsl(34, 100%, 50%)",
    statusPendingBg: "hsla(34, 100%, 50%, 5.71%)",
    statusDraft: "hsl(231, 75%, 93%)",
    statusDraftBg: "hsla(231, 75%, 93%, 5.71%)",
    // Buttons
    btnPrimary: "hsl(252, 94%, 67%)",
    btnPrimaryHover: "hsl(252, 100%, 73%)",
    btnSecondary: "hsl(233, 30%, 21%)",
    btnSecondaryHover: "hsl(233, 30%, 15%)",
    btnSave: "hsl(231, 20%, 27%)",
    btnSaveHover: "hsl(233, 31%, 17%)",
    btnDelete: "hsl(0, 80%, 63%)",
    btnDeleteHover: "hsl(0, 100%, 80%)",
    btnNewItem: "hsl(231, 67%, 99%)",
    btnNewItemHover: "hsl(231, 73%, 93%)",
    btnTheme: "hsl(232, 23%, 61%)",
    btnThemeHover: "hsl(231, 75%, 93%)",
    // Shared
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
    blackAlpha50: "hsla(0, 0%, 0%, 50%)",
    purple: "hsl(252, 94%, 67%)",
    purpleLight: "hsl(252, 100%, 73%)",
    red: "hsl(0, 80%, 63%)",
    redLight: "hsl(0, 100%, 80%)",
    blueGrayish: "hsl(231, 36%, 63%)",
    grayLight: "hsl(231, 20%, 36%)",
    grayMedium: "hsl(225, 14%, 53%)",
  },
};
