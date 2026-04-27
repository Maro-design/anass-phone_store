const fs = require("fs");
const files = ["stitch_accueil.html", "stitch_boutique.html", "stitch_contact.html", "stitch_promotions.html"];
files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    
    // Replace absolute paths
    content = content.replace(/href="\/"/g, `href="stitch_accueil.html"`);
    content = content.replace(/href="\/boutique"/g, `href="stitch_boutique.html"`);
    content = content.replace(/href="\/accessoires"/g, `href="stitch_boutique.html"`);
    content = content.replace(/href="\/promotions"/g, `href="stitch_promotions.html"`);
    content = content.replace(/href="\/contact"/g, `href="stitch_contact.html"`);
    
    fs.writeFileSync(file, content);
});
console.log("Fixed absolute links!");

