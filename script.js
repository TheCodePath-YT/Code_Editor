let htmlCode = document.getElementById("html");
let cssCode = document.getElementById("css");
let javaScriptCode = document.getElementById("java-script");
let preview = document.getElementById("preview");
let reset = document.getElementById("reset");
let vertical = document.getElementById("vertical");


function updatePreview(){
    let html = htmlCode.value;
    let css = `<style>${cssCode.value}</style>`;
    let js = `<script>${javaScriptCode.value}</script>`;
    let value = `${html}${css}${js}`
    preview.srcdoc = value;
}
function ResetPreview(){
    htmlCode.value = "";
    cssCode.value = "";
    javaScriptCode.value = "";
    preview.srcdoc = "";
    updatePreview();
}


htmlCode.addEventListener("input",updatePreview);
cssCode.addEventListener("input",updatePreview);
javaScriptCode.addEventListener("input",updatePreview);
reset.addEventListener('click',ResetPreview);
vertical.addEventListener('click',vertical);