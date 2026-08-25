/* =========================================
   AGOENG WONG TOUR
   RESELLER CENTER
   PHASE 1A
   ========================================= */


/*
 * Modul ini masih frontend.
 *
 * Belum:
 * - database
 * - login
 * - transaksi
 * - saldo
 * - referral provider
 * - API
 *
 * Semua fungsi tersebut akan dibuat
 * pada fase backend.
 */


(function () {

    "use strict";


    /*
     * Ambil semua tombol modul
     */

    const buttons =
        document.querySelectorAll(
            "[data-action]"
        );


    /*
     * Event handler
     */

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const action =
                    button.dataset.action;


                handleAction(action);

            }
        );

    });


    /*
     * Penanganan menu
     */

    function handleAction(action) {

        const messages = {

            profile:
                "Profil reseller akan tersedia setelah sistem login dan database aktif.",

            referral:
                "Informasi referral akan dihubungkan ke sistem resmi/provider pada fase integrasi.",

            marketing:
                "Marketing Kit akan dikembangkan sebagai modul promosi terpisah.",

            activity:
                "Aktivitas reseller akan menggunakan data backend setelah sistem transaksi tersedia."

        };


        const message =
            messages[action] ||
            "Modul belum tersedia.";


        alert(message);

    }


})();
