const fs = require("fs");
const files = ["stitch_accueil.html", "stitch_boutique.html", "stitch_contact.html", "stitch_promotions.html"];
files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    
    // Nav links
    content = content.replace(/href="#"([^>]*?)>(Home|Accueil)<\/a>/gi, `href="stitch_accueil.html"$1>Accueil</a>`);
    content = content.replace(/href="#"([^>]*?)>(Shop|Boutique)<\/a>/gi, `href="stitch_boutique.html"$1>Boutique</a>`);
    content = content.replace(/href="#"([^>]*?)>Promotions<\/a>/gi, `href="stitch_promotions.html"$1>Promotions</a>`);
    content = content.replace(/href="#"([^>]*?)>Contact<\/a>/gi, `href="stitch_contact.html"$1>Contact</a>`);
    content = content.replace(/href="#"([^>]*?)>Accessoires<\/a>/gi, `href="stitch_boutique.html"$1>Accessoires</a>`);
    
    // Buttons
    content = content.replace(/<button([^>]*)>\s*Explorer la boutique\s*<\/button>/gi, `<button$1 onclick="window.location.href='stitch_boutique.html'">Explorer la boutique</button>`);
    content = content.replace(/<button([^>]*)>\s*Voir toutes les offres\s*<\/button>/gi, `<button$1 onclick="window.location.href='stitch_promotions.html'">Voir toutes les offres</button>`);
    
    // Footer "Quick Links" replacing href="#" if there are any specific to shop
    fs.writeFileSync(file, content);
});
console.log("Fixed links!");

