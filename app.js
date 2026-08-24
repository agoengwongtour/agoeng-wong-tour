/*
  AGOENG WONG TOUR
  APP ENGINE v3.1
*/

(() => {

  "use strict";

  const C = SITE_CONFIG;

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];


  // ==============================
  // SECURITY / TEXT
  // ==============================

  const esc = (value = "") =>
    String(value).replace(
      /[&<>'"]/g,
      char =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;"
        }[char])
    );


  // ==============================
  // URL
  // ==============================

  const validUrl = value => {

    if (!value || value === "#") {
      return "#";
    }

    try {

      const url = new URL(value, location.href);

      if (
        url.protocol === "http:" ||
        url.protocol === "https:"
      ) {
        return url.href;
      }

      return "#";

    } catch {

      return "#";

    }

  };


  // ==============================
  // WHATSAPP
  // ==============================

  const waUrl = message =>
    `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(message)}`;


  const openWA = message => {

    window.open(
      waUrl(message),
      "_blank",
      "noopener,noreferrer"
    );

  };


  // ==============================
  // HELPERS
  // ==============================

  const setText = (selector, value) => {

    const element = $(selector);

    if (element) {
      element.textContent = value ?? "";
    }

  };


  const setAttr = (selector, attribute, value) => {

    const element = $(selector);

    if (element) {
      element.setAttribute(
        attribute,
        value ?? ""
      );
    }

  };


  // ==============================
  // SEO
  // ==============================

  document.title = C.seo.title;

  setAttr(
    'meta[name="description"]',
    "content",
    C.seo.description
  );

  setAttr(
    'meta[name="keywords"]',
    "content",
    C.seo.keywords
  );

  setAttr(
    'meta[name="author"]',
    "content",
    C.seo.author
  );

  setAttr(
    'meta[property="og:title"]',
    "content",
    C.seo.title
  );

  setAttr(
    'meta[property="og:description"]',
    "content",
    C.seo.description
  );

  setAttr(
    'meta[property="og:image"]',
    "content",
    C.seo.ogImage
  );

  setAttr(
    'meta[property="og:url"]',
    "content",
    C.seo.siteUrl
  );

  setAttr(
    'link[rel="icon"]',
    "href",
    C.brand.favicon
  );


  // ==============================
  // BRAND
  // ==============================

  setAttr(
    "#brandLogo",
    "src",
    C.brand.logo
  );

  setAttr(
    "#brandLogo",
    "alt",
    `${C.brand.name} ${C.brand.subName}`
  );

  setText(
    "#brandName",
    C.brand.name
  );

  setText(
    "#brandSub",
    C.brand.subName
  );

  setText(
    "#brandTag",
    C.brand.tagline
  );

  setAttr(
    "#footerLogo",
    "src",
    C.brand.logo
  );

  setText(
    "#footerName",
    `${C.brand.name} ${C.brand.subName}`
  );

  setText(
    "#footerTag",
    C.brand.tagline
  );

  setText(
    "#powered",
    C.brand.poweredBy
  );


  // ==============================
  // CONTACT
  // ==============================

  setText(
    "#headerPhone",
    C.contact.displayPhone
  );

  setText(
    "#contactPhone",
    C.contact.displayPhone
  );

  setText(
    "#footerPhone",
    C.contact.displayPhone
  );

  setText(
    "#businessHours",
    C.contact.hours
  );

  setText(
    "#footerLocation",
    C.footer.location
  );

  setText(
    "#legalNote",
    C.footer.legalNote
  );


  // ==============================
  // HERO
  // ==============================

  setText(
    "#heroEyebrow",
    C.hero.eyebrow
  );

  $("#heroTitle").innerHTML =
    C.hero.title;

  setText(
    "#heroDesc",
    C.hero.description
  );

  setAttr(
    "#heroImage",
    "src",
    C.hero.image
  );

  setAttr(
    "#heroImage",
    "alt",
    `${C.brand.name} ${C.brand.subName}`
  );

  setText(
    "#heroVisualTitle",
    C.hero.visualTitle
  );

  setText(
    "#heroVisualSub",
    C.hero.visualSub
  );


  // ==============================
  // GENERAL CONTENT
  // ==============================

  setText(
    "#serviceTitle",
    C.serviceTitle
  );

  setText(
    "#serviceDesc",
    C.serviceDesc
  );

  setText(
    "#agentTitle",
    C.agent.title
  );

  setText(
    "#agentDesc",
    C.agent.description
  );

  setText(
    "#agentBadge",
    C.agent.badge
  );

  setText(
    "#agentURLPreview",
    C.links.joinAgent === "#"
      ? "Link belum diisi"
      : C.links.joinAgent
  );

  setAttr(
    "#agentLink",
    "href",
    validUrl(C.links.joinAgent)
  );


  // ==============================
  // QRIS
  // ==============================

  setText(
    "#qrisMerchant",
    C.qris.merchant
  );

  setText(
    "#qrisNmid",
    C.qris.nmid
  );

  setAttr(
    "#qrisImage",
    "src",
    C.qris.image
  );

  setAttr(
    "#qrisImage",
    "alt",
    `QRIS ${C.qris.merchant}`
  );

  if (!C.qris.enabled) {

    const qrisSection = $("#qris");

    if (qrisSection) {
      qrisSection.style.display = "none";
    }

  }


  // ==============================
  // YEAR
  // ==============================

  setText(
    "#year",
    new Date().getFullYear()
  );


  // ==============================
  // ANNOUNCEMENT
  // ==============================

  if (C.announcement.enabled) {

    setText(
      "#announcement",
      C.announcement.text
    );

    $("#announcement")
      ?.classList
      .remove("hidden");

  }


  // ==============================
  // TRUST
  // ==============================

  $("#trustItems").innerHTML =
    C.trust
      .map(item =>
        `<span>✓ ${esc(item)}</span>`
      )
      .join("");


  // ==============================
  // STATS
  // ==============================

  $("#stats").innerHTML =
    C.stats
      .map(item =>
        `<div>
          <b>${esc(item[0])}</b>
          <span>${esc(item[1])}</span>
        </div>`
      )
      .join("");


  // ==============================
  // SERVICES
  // ==============================

  $("#serviceGrid").innerHTML =
    C.services
      .map(item => `

        <article class="service-card">

          <div class="service-icon">
            ${esc(item[0])}
          </div>

          <h3>
            ${esc(item[1])}
          </h3>

          <p>
            ${esc(item[2])}
          </p>

          <button
            class="text-btn"
            data-message="${esc(item[3])}"
            type="button">

            Pesan Sekarang →

          </button>

        </article>

      `)
      .join("");


  // ==============================
  // CATALOG FILTER
  // ==============================

  const filters = [
    ["all", "Semua"],
    ["travel", "Travel"],
    ["payment", "Payment"],
    ["delivery", "Delivery"]
  ];


  $("#filters").innerHTML =
    filters
      .map(
        (item, index) => `

          <button
            class="filter ${index === 0 ? "active" : ""}"
            data-filter="${item[0]}"
            type="button">

            ${item[1]}

          </button>

        `
      )
      .join("");


  // ==============================
  // CATALOG
  // ==============================

  $("#catalogGrid").innerHTML =
    C.catalog
      .map(item => `

        <button
          class="catalog-card"
          data-cat="${esc(item[0])}"
          data-message="${esc(item[4])}"
          type="button">

          <span class="catalog-icon">
            ${esc(item[1])}
          </span>

          <b>
            ${esc(item[2])}
          </b>

          <small>
            ${esc(item[3])}
          </small>

        </button>

      `)
      .join("");


  // ==============================
  // STEPS
  // ==============================

  $("#steps").innerHTML =
    C.steps
      .map(item => `

        <div class="step">

          <b>${esc(item[0])}</b>

          <h3>
            ${esc(item[1])}
          </h3>

          <p>
            ${esc(item[2])}
          </p>

        </div>

      `)
      .join("");


  // ==============================
  // PAYMENT
  // ==============================

  $("#paymentMethods").innerHTML =
    C.paymentMethods
      .map(item => `

        <div class="pay-method">

          <b>
            ${esc(item[0])}
            ${esc(item[1])}
          </b>

          <small>
            ${esc(item[2])}
          </small>

        </div>

      `)
      .join("");


  // ==============================
  // SOCIAL MEDIA
  // ==============================

  $("#socialGrid").innerHTML =
    C.social
      .map(item => `

        <a
          class="social"
          href="${validUrl(item[2])}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kunjungi ${esc(item[0])}">

          <span
            class="social-icon"
            style="--social-brand:${esc(item[4])}">

            <i
              class="${esc(item[1])}"
              aria-hidden="true">
            </i>

          </span>

          <b>
            ${esc(item[0])}
          </b>

          <small>
            ${esc(item[3])}
          </small>

          <span class="social-visit">

            Kunjungi

            <i
              class="fa-solid fa-arrow-up-right-from-square"
              aria-hidden="true">
            </i>

          </span>

        </a>

      `)
      .join("");


  // ==============================
  // JSON-LD
  // ==============================

  const ld = {

    "@context": "https://schema.org",

    "@type": "TravelAgency",

    "name":
      `${C.brand.name} ${C.brand.subName}`,

    "description":
      C.seo.description,

    "url":
      C.seo.siteUrl,

    "telephone":
      `+${C.contact.whatsapp}`,

    "logo":
      C.seo.siteUrl === "https://contoh-domain-anda.com"
        ? C.brand.logo
        : new URL(
            C.brand.logo,
            C.seo.siteUrl
          ).href

  };


  const ldScript =
    document.createElement("script");

  ldScript.type =
    "application/ld+json";

  ldScript.textContent =
    JSON.stringify(ld);

  document.head.appendChild(
    ldScript
  );


  // ==============================
  // WHATSAPP BUTTONS
  // ==============================

  const genericMessage =
    "Halo Agoeng Wong Tour, saya ingin konsultasi layanan.";


  $("#headerWA")
    ?.addEventListener(
      "click",
      event => {

        event.preventDefault();

        openWA(genericMessage);

      }
    );


  $("#heroWA")
    ?.addEventListener(
      "click",
      event => {

        event.preventDefault();

        openWA(
          "Halo Agoeng Wong Tour, saya ingin pesan layanan."
        );

      }
    );


  $("#agentWA")
    ?.addEventListener(
      "click",
      event => {

        event.preventDefault();

        openWA(
          "Halo Agoeng Wong Tour, saya ingin JOIN AGEN. Mohon info syarat dan link pendaftaran resmi."
        );

      }
    );


  $("#contactWA")
    ?.addEventListener(
      "click",
      event => {

        event.preventDefault();

        openWA(genericMessage);

      }
    );


  $("#floatingWA")
    ?.addEventListener(
      "click",
      event => {

        event.preventDefault();

        openWA(genericMessage);

      }
    );


  // ==============================
  // GENERATED WHATSAPP BUTTON
  // ==============================

  document.addEventListener(
    "click",
    event => {

      const element =
        event.target.closest(
          "[data-message]"
        );

      if (!element) {
        return;
      }

      openWA(
        element.dataset.message ||
        genericMessage
      );

    }
  );


  // ==============================
  // JOIN AGENT
  // ==============================

  $("#heroJoin")
    ?.addEventListener(
      "click",
      event => {

        event.preventDefault();

        $("#agen")
          ?.scrollIntoView({
            behavior: "smooth"
          });

      }
    );


  // ==============================
  // QRIS MODAL
  // ==============================

  $("#qrisHelp")
    ?.addEventListener(
      "click",
      () => {

        openModal(
          C.qris.helpTitle,
          `<p>${esc(C.qris.helpText)}</p>`
        );

      }
    );


  // ==============================
  // MOBILE MENU
  // ==============================

  $("#menuBtn")
    ?.addEventListener(
      "click",
      () => {

        const nav =
          $("#mainNav");

        const opened =
          nav.classList.toggle("open");

        $("#menuBtn")
          .setAttribute(
            "aria-expanded",
            String(opened)
          );

      }
    );


  $$("#mainNav a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          $("#mainNav")
            ?.classList
            .remove("open");

        }
      );

    });


  // ==============================
  // FILTER
  // ==============================

  $$(".filter")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          $$(".filter")
            .forEach(item =>
              item.classList.remove(
                "active"
              )
            );

          button.classList.add(
            "active"
          );

          const filter =
            button.dataset.filter;

          $$(".catalog-card")
            .forEach(card => {

              card.hidden =
                !(
                  filter === "all" ||
                  card.dataset.cat === filter
                );

            });

        }
      );

    });


  // ==============================
  // MODAL
  // ==============================

  function openModal(
    title,
    body
  ) {

    setText(
      "#modalTitle",
      title
    );

    $("#modalBody").innerHTML =
      body;

    $("#modal")
      .classList
      .add("show");

    $("#modal")
      .setAttribute(
        "aria-hidden",
        "false"
      );

  }


  function closeModal() {

    $("#modal")
      .classList
      .remove("show");

    $("#modal")
      .setAttribute(
        "aria-hidden",
        "true"
      );

  }


  $("#modalClose")
    ?.addEventListener(
      "click",
      closeModal
    );


  $("#modal")
    ?.addEventListener(
      "click",
      event => {

        if (
          event.target.id === "modal"
        ) {

          closeModal();

        }

      }
    );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeModal();

      }

    }
  );


  // ==============================
  // IMAGE FALLBACK
  // ==============================

  $$("img")
    .forEach(image => {

      image.addEventListener(
        "error",
        () => {

          if (
            image.dataset.fallbackApplied
          ) {
            return;
          }

          image.dataset.fallbackApplied =
            "1";

          image.src =
            "assets/logo-master.png";

        }
      );

    });

})();
