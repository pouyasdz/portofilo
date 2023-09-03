const isIndex = window.location.href.includes("index.html");

export const header = `
<nav class="navbar">
<ul>
    <li><a href="${isIndex?'./index.html':'../index.html'}"><i class="fi fi-rr-home"></i> <span>Home</span></a></li>
    <li><a href="${isIndex?'./pages/contact_to_me.html':'./contact_to_me.html'}"><i class="fi fi-rr-phone-call"></i> <span>Contact To Me</span></a></li>
    <li><a href="${isIndex?'./pages/social_media.html': './social_media.html'}"><i class="fi fi-rr-share"></i> <span>Social Media</span></a></li>
</ul>
</nav>
`