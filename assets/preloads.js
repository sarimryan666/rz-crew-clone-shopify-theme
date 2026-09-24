(function() {
    var preconnectOrigins = ["https://cdn.shopify.com"];
    var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Db3KX98s.js", "/cdn/shopifycloud/checkout-web/assets/c1/app.BZXSZRg2.js", "/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.CFwZ9ZF7.js", "/cdn/shopifycloud/checkout-web/assets/c1/context-browser.CHOTdhpr.js", "/cdn/shopifycloud/checkout-web/assets/c1/checkout-policy.BjQxFN1d.js", "/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.CKJt7jLJ.js", "/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.DQ2M51XN.js", "/cdn/shopifycloud/checkout-web/assets/c1/mobile-checkout-sdk-MobileCheckoutSdkClient.L_2gkYy4.js", "/cdn/shopifycloud/checkout-web/assets/c1/proposal-delegated-payment-instrument.DdO72D-c.js", "/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared.DN-1O0Yt.js", "/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.BCykkHUk.js", "/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.LtEtTFYd.js", "/cdn/shopifycloud/checkout-web/assets/c1/shared-report-graphql-error.BGRH26jK.js", "/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.BNG8MXHd.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-shopCashMoney.B29HgRda.js", "/cdn/shopifycloud/checkout-web/assets/c1/PayButton-helpers.DjVBEeCx.js", "/cdn/shopifycloud/checkout-web/assets/c1/hydrate.cLkyCRPI.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser.CWTr32SN.js", "/cdn/shopifycloud/checkout-web/assets/c1/locale-en.BY6huxHp.js", "/cdn/shopifycloud/checkout-web/assets/c1/OnePage.DanRC34v.js", "/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.nnjrX9ws.js", "/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.CUiKrSe8.js", "/cdn/shopifycloud/checkout-web/assets/c1/negotiated-findSelectedDeliveryMethod.DaPFKTo2.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShouldRevealCustomization.pyuxxpPP.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.DhHTBTrf.js", "/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.C5OWzUJm.js", "/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.C69M39CF.js", "/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.CcB5z0C5.js", "/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-grouping.d9DW6qGW.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.BkIczmh0.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-compact.C4beKXET.js", "/cdn/shopifycloud/checkout-web/assets/c1/Popover.BGEaqQE9.js", "/cdn/shopifycloud/checkout-web/assets/c1/Choice.BpO6Jk_m.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.CV1deZsO.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.cf_3vsa-.js", "/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.ZuL-H_5o.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-previous.CkpCYo1O.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.C4bmeuyR.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.D1HGPJ73.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.DATRsNxx.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack.BSFDoI9y.js", "/cdn/shopifycloud/checkout-web/assets/c1/IncentiveBadge.miXdjKx4.js", "/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride.DlUNU6z6.js", "/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.CjSoVezp.js", "/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.tlW7dEfh.js", "/cdn/shopifycloud/checkout-web/assets/c1/Switch.GdiPmbjK.js", "/cdn/shopifycloud/checkout-web/assets/c1/useAddressMutationsWithNegotiation.DoB7oaPo.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.CFkwaFHI.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.D-nML4en.js", "/cdn/shopifycloud/checkout-web/assets/c1/Theme-ThemeOverride.CoRfkt8x.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.DP4UsomD.js", "/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason.C0UVc8y4.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.4MllzRj_.js", "/cdn/shopifycloud/checkout-web/assets/c1/Section.crqKNQNK.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.CnGYDamO.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.BJNDC35k.js", "/cdn/shopifycloud/checkout-web/assets/c1/StickyPayButton-StickyPayButton.module.DNEeeAWE.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.CaNn9_ib.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi.lIHEOnxe.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscounts.LB3ByPA0.js", "/cdn/shopifycloud/checkout-web/assets/c1/Middot.Dy7otD7i.js", "/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.DU7EbYG_.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.CGqKYFPc.js", "/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.BctEA6_h.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.BT_THTNq.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.CkKarJ1w.js", "/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.CNIdb_TG.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.v6z5S3Dt.js", "/cdn/shopifycloud/checkout-web/assets/c1/TextArea.CIdjcYDi.js", "/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.IQF9x-Ot.js", "/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.CTi09Mq-.js", "/cdn/shopifycloud/checkout-web/assets/c1/page-BelowTheFoldContent.BO6tcftz.js", "/cdn/shopifycloud/checkout-web/assets/c1/Captcha.CwDb52Tv.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShopPayCaptcha.D1tjC-5N.js", "/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection.7vYtVEOb.js", "/cdn/shopifycloud/checkout-web/assets/c1/components-PaymentMethodProgressionHost.CXQwrbam.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.U1bu2ruR.js", "/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.DExqomgO.js", "/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.BIRZM-HE.js", "/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.CF0AhNrP.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.DagCfBuf.js", "/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler.gsYrNDiL.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptionSelector.any3GQmv.js", "/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.Bfm1HyoA.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.DPhp3F9K.js"];
    var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.Sxsz5knT.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/checkout-policy.BUDzuiNK.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.BuSCGSwA.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DxMZvmU_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.BPR3LV8c.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useAddressMutationsWithNegotiation.BcTJoNaV.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.D3bcP-mr.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.CPXhWoNv.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShouldRevealCustomization.CuRoM9zv.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.aPApdPe_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/IncentiveBadge.Dlnp55te.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CpHF4L7Q.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.CmuzzmSI.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Captcha.CJQgLR0i.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.2B5x30PG.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.CZuxzxFG.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.C8No5WOn.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.BwQxlzN-.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/grouping.BnDF3H7t.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useSuppressShopPayModalOnLoad.SrYMuQu4.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.DfWUBaTh.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/2343/5009/files/rzcrew_garage_logo_x320.png?v=1613527544", "https://cdn.shopify.com/s/files/1/2343/5009/files/engine_01_01_2x_a6f54d84-7f8a-4344-a897-508dd79668f4_2000x.jpg?v=1729829277"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();