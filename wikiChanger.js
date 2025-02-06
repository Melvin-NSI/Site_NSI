function checkAndReplaceBlockedLinks() {
    const targetDomain = 'fr.minecraft.wiki';
    const alternativeBaseUrl = 'https://minecraft.fandom.com/fr/wiki';

    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        const originalUrl = link.href;

        if (originalUrl.includes(targetDomain)) {
            const img = new Image();
            
            img.onload = function() {
            };
            
            img.onerror = function() {
                const path = originalUrl.split(targetDomain)[1];
                const newUrl = alternativeBaseUrl + path;
                link.href = newUrl;
                console.log(`Blocked link detected to ${originalUrl}, replacing it with ${newUrl}`);
            };

            img.src = originalUrl;
        }
    });
}

window.addEventListener('load', checkAndReplaceBlockedLinks);
