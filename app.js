(function () {
  var cfg = window.NIGHTSHIFT || {};
  var url = (cfg.checkoutUrl || "").trim();
  var ids = ["checkout", "buy-hero", "buy-card", "buy-nav"];
  ids.forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    if (url) {
      el.setAttribute("href", url);
    }
  });
  var note = document.getElementById("pay-note");
  var form = document.getElementById("order-form");
  if (!url && form) {
    form.style.display = "block";
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("email").value;
      var subject = encodeURIComponent("Nightshift Operator pack — pay request");
      var body = encodeURIComponent("Please send a $19 payment link for The Grok Nightshift Operator Pack.\n\nBuyer email: " + email);
      window.location.href = "mailto:?subject=" + subject + "&body=" + body;
    });
  } else if (url && note) {
    note.textContent = "Secure checkout opens in a new tab. You get the PDF immediately after payment.";
  }
})();
